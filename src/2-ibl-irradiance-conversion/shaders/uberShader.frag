#version 300 es
precision highp float;

-- DEFINES_HOOK --

#include shared/ubos.glsl;
#include shared/tone-mapping.glsl;
#include pbr/fresnel-schlick.glsl;
#include pbr/fresnel-schlick-roughness.glsl;
#include pbr/distribution-ggx.glsl;
#include pbr/geometry-smith.glsl;

#ifdef USE_PBR
  uniform vec3 u_albedo;
  uniform float u_metallic;
  uniform float u_roughness;
  // uniform float u_ao;
#endif

#ifdef USE_DIFFUSE_ONLY
  uniform sampler2D u_diffuse;
#endif

#ifdef USE_ENV_MAP
  uniform samplerCube u_environmentMap;
#endif

#ifdef USE_IRRADIANCE_MAP
  uniform samplerCube u_irradianceMap;
#endif

#ifdef SAMPLE_EQUIRERECTANGULAR_MAP

  uniform sampler2D u_equirectangularMap;

  const vec2 invAtan = vec2(0.1591, 0.3183);
  vec2 sampleSphericalMap(vec3 v) {
    vec2 uv = vec2(atan(v.z, v.x), asin(v.y));
    uv *= invAtan;
    uv += 0.5;
    return uv;
  }
#endif



in vec3 vNormal;
in vec2 vUv;
in vec3 vWorldPos;
in vec3 vLocalPos;

out vec4 finalColor;

void main () {
  

  #ifdef USE_PBR
    // calculate reflectance at normal incidence, if diaelectric (like plastic) use
    // baseReflectivity of 0.04; if its metal, use the albedo color as baseReflectivity
    vec3 F0 = mix(vec3(0.04), u_albedo, u_metallic);

    // output luminance to add to
    vec3 Lo = vec3(0.0);
    
    for (int i = 0; i < POINT_LIGHTS_COUNT; i++) {
        // calculate per-light radiance
        vec3 L = normalize(pointLightPositions[i] - vWorldPos);
        // half way bisecting vector
        vec3 H = normalize(V + L);

        // distance from light position to fragment
        float distance = length(pointLightPositions[i] - vWorldPos);
        // light intensity (brightness) at the given distance
        // best explained here: https://www.youtube.com/watch?v=iman_gDntWA
        float attenuation = pointLightIntensity / (distance * distance);
        
        // how much light energy comes from the light source
        vec3 radiance = pointLightColors[i] * attenuation;

        float NdotL = max(dot(N, L), 0.0000001);
        float HdotV = max(dot(H, V), 0.0);
        float NdotH = max(dot(N, H), 0.0);
         
        // larger the more micro-facets are aligned to H (normal distribution function)
        float D = DistributionGGX(N, H, u_roughness);
        // smaller the more micro-facets shadowed by other micro facets
        float G = GeometrySmith(N, V, L, u_roughness);
        // Fresnel-Schlick
        // proportion of specular reflectance
        vec3 F = fresnelSchlick(HdotV, F0);
        
        // energy preservation! specular + diffuse can not excceed 1 (can't emit more light than they receive)
        vec3 kS = F;
        vec3 kD = vec3(1.0) - kS;
        kD *= 1.0 - u_metallic;
        
        vec3 specular = D * G * F;
        specular /= 4.0 * NdotV * NdotL;
            
        // add to outgoing radiance Lo
        Lo += (kD * u_albedo / PI + specular) * radiance * NdotL; 
    }


    // vec3 ambient = vec3(0.03) * albedo * ao;
    vec3 ambient = vec3(0.0);
    #ifdef USE_ENV_MAP
      vec3 reflectedColor = texture(u_environmentMap, reflect(cameraPosition, N)).rgb;
      ambient = reflectedColor * u_albedo;
    #else
      #ifdef USE_IRRADIANCE_MAP
        vec3 kS = fresnelSchlick(max(dot(N, V), 0.0), F0);
        vec3 kD = 1.0 - kS;
        kD *= 1.0 - u_metallic;	 
        vec3 irradiance = texture(u_irradianceMap, N).rgb;
        vec3 diffuse = irradiance * u_albedo;
        ambient = kD * diffuse;
      #else
        ambient = vec3(0.3) * u_albedo;
      #endif
    #endif
    
    vec3 color = ambient + Lo;
    
    // support for different HDR tone mapping modes
    color = applyTonemapping(color, tonemappingMode);
    
    // gamma correction
    color = pow(color, vec3(1.0 / 2.2));

    finalColor = vec4(color, 1.0);
  #else

    #ifdef SAMPLE_EQUIRERECTANGULAR_MAP
      vec2 uv = sampleSphericalMap(normalize(vLocalPos));
      vec3 color = texture(u_equirectangularMap, uv).rgb;
      finalColor = vec4(color, 1.0);
    #else
      #ifdef IS_CONVOLUTION_CUBEMAP
        vec3 normal = normalize(vLocalPos);
        vec3 irradiance = vec3(0.0);
        vec3 up = vec3(0.0, 1.0, 0.0);
        vec3 right = normalize(cross(up, normal));
        up = normalize(cross(normal, right));

        float sampleDelta = 0.025;
        float nrSamples = 0.0; 
        for (float phi = 0.0; phi < 2.0 * PI; phi += sampleDelta) {
          for (float theta = 0.0; theta < 0.5 * PI; theta += sampleDelta) {
            // spherical to cartesian (in tangent space)
            vec3 tangentSample = vec3(sin(theta) * cos(phi),  sin(theta) * sin(phi), cos(theta));

            // tangent space to world
            vec3 sampleVec = tangentSample.x * right + tangentSample.y * up + tangentSample.z * normal; 

            irradiance += texture(u_environmentMap, sampleVec).rgb * cos(theta) * sin(theta);
            nrSamples++;
          }
        }
        finalColor = vec4(PI * irradiance * (1.0 / float(nrSamples)), 1.0);
      #else
        #ifdef USE_ENV_MAP
          
        #else
          finalColor = texture(u_diffuse, vUv, -0.5);
        #endif
      #endif
    #endif

  #endif
}
