#version 300 es
precision highp float;

-- DEFINES_HOOK --

#include shared-ubo.glsl;
#include pbr/fresnel-schlick.glsl;
#include pbr/distribution-ggx.glsl;
#include pbr/geometry-smith.glsl;

// tone mapping modes
#include ../../shared/shaders/tone-mapping/aces.glsl
#include ../../shared/shaders/tone-mapping/filmic.glsl
#include ../../shared/shaders/tone-mapping/lottes.glsl
#include ../../shared/shaders/tone-mapping/reinhard.glsl
#include ../../shared/shaders/tone-mapping/reinhard2.glsl
#include ../../shared/shaders/tone-mapping/uchimura.glsl
#include ../../shared/shaders/tone-mapping/uncharted.glsl
#include ../../shared/shaders/tone-mapping/unreal.glsl

// PBR inputs
#ifdef USE_PBR
  uniform vec3 u_albedo;
  uniform float u_metallic;
  uniform float u_roughness;
  // uniform float u_ao;
#endif

#ifdef USE_DIFFUSE_ONLY
  uniform sampler2D u_diffuse;
#endif

#ifdef HAS_ENV_MAP
  uniform samplerCube u_environmentMap;
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

vec3 tonemapColorBasedOnMode (vec3 color, float tonemappingMode) {
  return mix(
      aces(color),
      mix(
        tonemapFilmic(color),
        mix(
          lottes(color),
          mix(
            reinhard(color),
            mix(
              reinhard2(color),
              mix(
                uchimura(color),
                mix(
                  uncharted2(color),
                  unreal(color),
                  clamp(tonemappingMode, 6.0, 7.0) - 6.0
                ),
                clamp(tonemappingMode, 5.0, 6.0) - 5.0
              ),
              clamp(tonemappingMode, 4.0, 5.0) - 4.0
            ),
            clamp(tonemappingMode, 3.0, 4.0) - 3.0
          ),
          clamp(tonemappingMode, 2.0, 3.0) - 2.0
        ),
        clamp(tonemappingMode, 1.0, 2.0) - 1.0
      ),
      clamp(tonemappingMode, 0.0, 1.0)
    );
}

in vec3 vNormal;
in vec2 vUv;
in vec3 vWorldPos;
in vec3 vLocalPos;

out vec4 finalColor;

void main () {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(cameraPosition - vWorldPos);

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

        float NdotV = max(dot(N, V), 0.0000001); // min of 0.0000001 to prevent divide by 0
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

    // support for different HDR tone mapping modes
    Lo = tonemapColorBasedOnMode(Lo, tonemappingMode);
    
    // gamma correction
    Lo = pow(Lo, vec3(1.0 / 2.2));

    // vec3 ambient = vec3(0.03) * albedo * ao;
    vec3 ambient = vec3(0.0);
    #ifdef HAS_ENV_MAP
      vec3 reflectedColor = texture(u_environmentMap, N).rgb;
      ambient = reflectedColor * u_albedo;
    #else
      ambient = vec3(0.3) * u_albedo;
    #endif
    
    vec3 color = ambient + Lo;
    finalColor = vec4(color, 1.0);
  #else

    #ifdef SAMPLE_EQUIRERECTANGULAR_MAP
      vec2 uv = sampleSphericalMap(normalize(vLocalPos));
      vec3 color = texture(u_equirectangularMap, vec2(uv.x, 1.0 - uv.y)).rgb;
      finalColor = vec4(color, 1.0);
    #else
      #ifdef HAS_ENV_MAP
        // load in HDR environment map
        vec3 envColor = texture(u_environmentMap, vLocalPos).rgb;
        // tonemapping
        envColor = tonemapColorBasedOnMode(envColor, tonemappingMode);
        // gamma correction
        envColor = pow(envColor, vec3(1.0 / 2.2));
        finalColor = vec4(envColor, 1.0);
      #else
        finalColor = texture(u_diffuse, vUv, -0.5);
      #endif
    #endif
  #endif
}
