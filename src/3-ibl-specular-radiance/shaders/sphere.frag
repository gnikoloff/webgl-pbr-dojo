#version 300 es
precision highp float;

-- DEFINES_HOOK --

#include shared/ubos.glsl;
#include shared/tone-mapping.glsl;

#include pbr/fresnel-schlick.glsl;
#include pbr/fresnel-schlick-roughness.glsl;
#include pbr/distribution-ggx.glsl;
#include pbr/geometry-smith.glsl;
#include pbr/hammersley.glsl;
#include pbr/importance-sample-ggx.glsl;
#include pbr/get-normal-from-map.glsl;

#ifdef USE_PBR_TEXTURES
  uniform sampler2D u_albedoMap;
  uniform sampler2D u_normalMap;
  uniform sampler2D u_metallicMap;
  uniform sampler2D u_roughnessMap;
  uniform sampler2D u_aoMap;
#else
  uniform vec3 u_albedo;
  uniform float u_metallic;
  uniform float u_roughness;
#endif

uniform samplerCube u_irradianceMap;
uniform samplerCube u_prefilterMap;
uniform sampler2D u_brdfLUT;

in vec3 vNormal;
in vec3 vWorldPos;

#ifdef USE_UV
  in vec2 vUv;
#endif

out vec4 finalColor;

void main () {
  vec3 albedo = vec3(0.0);
  float metallic = 0.0;
  float roughness = 0.0;
  float ao = 0.0;
  vec3 N = vec3(0.0);

  #ifdef USE_PBR_TEXTURES
    albedo = texture(u_albedoMap, vUv).rgb;
    metallic = texture(u_metallicMap, vUv).r;
    roughness = texture(u_roughnessMap, vUv).r;
    ao = texture(u_aoMap, vUv).r;
    N = getNormalFromMap(u_normalMap, vUv, normalize(vNormal), vWorldPos);
  #else
    albedo = u_albedo;
    metallic = u_metallic;
    roughness = u_roughness;
    ao = 1.0;
    N = normalize(vNormal);
  #endif

  vec3 V = normalize(cameraPosition - vWorldPos);

  float NdotV = max(dot(N, V), 0.0000001); // min of 0.0000001 to prevent divide by 0

  // calculate reflectance at normal incidence, if diaelectric (like plastic) use
  // baseReflectivity of 0.04; if its metal, use the albedo color as baseReflectivity
  vec3 F0 = mix(vec3(0.04), albedo, metallic);

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
    float D = DistributionGGX(N, H, roughness);
    // smaller the more micro-facets shadowed by other micro facets
    float G = GeometrySmith(N, V, L, roughness);
    // Fresnel-Schlick
    // proportion of specular reflectance
    vec3 F = fresnelSchlick(HdotV, F0);
    
    // energy preservation! specular + diffuse can not excceed 1 (can't emit more light than they receive)
    vec3 kS = F;
    vec3 kD = vec3(1.0) - kS;
    kD *= 1.0 - metallic;
    
    float denominator = 4.0 * NdotV * NdotL;
    vec3 specular = (D * G * F) / denominator;  
        
    // add to outgoing radiance Lo
    Lo += (kD * albedo / PI + specular) * radiance * NdotL; 
  }

  // IBL (Image Based Lighting)
  vec3 F = fresnelSchlickRoughness(NdotV, F0, roughness);
  vec3 kS = F;
  vec3 kD = 1.0 - kS;
  kD *= 1.0 - metallic;

  vec3 irradiance = texture(u_irradianceMap, N).rgb;
  vec3 diffuse = irradiance * albedo * diffuseEnvLightMixFactor;

  vec3 R = reflect(-V, N);
  vec3 prefilteredColor = textureLod(u_prefilterMap, R, roughness * MAX_REFLECTION_LOD).rgb;   
  vec2 envBRDF = texture(u_brdfLUT, vec2(NdotV, roughness)).rg;
  vec3 specular = prefilteredColor * (F * envBRDF.x + envBRDF.y) * specularEnvLightMixFactor;

  vec3 ambient = (kD * diffuse + specular) * ao;
  
  vec3 color = ambient + Lo;
    
  // support for different HDR tone mapping modes
  color = applyTonemapping(color, tonemappingMode);
  
  // gamma correction
  color = pow(color, vec3(1.0 / 2.2));

  finalColor = vec4(color, 1.0);
}