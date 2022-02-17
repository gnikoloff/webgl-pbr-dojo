#version 300 es
precision highp float;

-- DEFINES_HOOK --

#include shared/ubos.glsl;
#include shared/tone-mapping.glsl;

#include pbr/fresnel-schlick.glsl;
#include pbr/fresnel-schlick-roughness.glsl;
#include pbr/distribution-ggx.glsl;
#include pbr/geometry-smith.glsl;

uniform vec3 u_albedo;
uniform float u_metallic;
uniform float u_roughness;
uniform samplerCube u_irradianceMap;

in vec3 vNormal;
in vec3 vWorldPos;

out vec4 finalColor;

void main () {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(cameraPosition - vWorldPos);

  float NdotV = max(dot(N, V), 0.0000001); // min of 0.0000001 to prevent divide by 0

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

  // irradiance map
  vec3 kS = fresnelSchlick(max(dot(N, V), 0.0), F0);
  vec3 kD = 1.0 - kS;
  kD *= 1.0 - u_metallic;
  vec3 irradiance = texture(u_irradianceMap, N).rgb;
  vec3 diffuse = irradiance * u_albedo;
  
  ambient = mix(vec3(0.1) * u_albedo, kD * diffuse, diffuseLightMixFactor);

  vec3 color = ambient + Lo;
    
  // support for different HDR tone mapping modes
  color = applyTonemapping(color, tonemappingMode);
  
  // gamma correction
  color = pow(color, vec3(1.0 / 2.2));

  finalColor = vec4(color, 1.0);
}
