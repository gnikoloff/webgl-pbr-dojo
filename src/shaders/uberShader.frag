#version 300 es
precision highp float;

-- DEFINES_HOOK --

#include shared-ubo.glsl;
#include pbr/fresnel-schlick.glsl;
#include pbr/distribution-ggx.glsl;
#include pbr/geometry-smith.glsl;

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

in vec3 vNormal;
in vec2 vUv;
in vec3 vWorldPos;

out vec4 finalColor;

void main () {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(cameraPosition - vWorldPos);

  #ifdef USE_PBR
    vec3 F0 = vec3(0.04); 
    F0 = mix(F0, u_albedo, u_metallic);
    vec3 Lo = vec3(0.0);
    
    for (int i = 0; i < POINT_LIGHTS_COUNT; i++) {
        // calculate per-light radiance
        vec3 L = normalize(lightPositions[i] - vWorldPos);
        vec3 H = normalize(V + L);
        float distance    = length(lightPositions[i] - vWorldPos);
        float attenuation = 20.0 / (distance * distance);
        vec3 radiance     = lightColors[i] * attenuation;        
        
        // cook-torrance brdf
        float NDF = DistributionGGX(N, H, u_roughness);
        float G   = GeometrySmith(N, V, L, u_roughness);
        vec3 F    = fresnelSchlick(max(dot(H, V), 0.0), F0);
        
        vec3 kS = F;
        vec3 kD = vec3(1.0) - kS;
        kD *= 1.0 - u_metallic;	  
        
        vec3 numerator    = NDF * G * F;
        float denominator = 4.0 * max(dot(N, V), 0.0) * max(dot(N, L), 0.0) + 0.0001;
        vec3 specular     = numerator / denominator;  
            
        // add to outgoing radiance Lo
        float NdotL = max(dot(N, L), 0.0);                
        Lo += (kD * u_albedo / PI + specular) * radiance * NdotL; 
    }



    Lo = Lo / (Lo + vec3(1.0));
    Lo = pow(Lo, vec3(1.0/2.2)); 

    // vec3 ambient = vec3(0.03) * albedo * ao;
    vec3 ambient = vec3(0.3) * u_albedo;
    vec3 color = ambient + Lo;
    finalColor = vec4(color, 1.0);
  #else

    finalColor = texture(u_diffuse, vUv, -0.5);
  

  #endif
}
