#version 300 es
precision highp float;

-- DEFINES_HOOK --

#include shared/ubos.glsl;
#include shared/tone-mapping.glsl;

uniform samplerCube u_environmentMap;

in vec3 vLocalPos;

out vec4 finalColor;

void main () {
  vec3 envColor = textureLod(u_environmentMap, vLocalPos, 1.2).rgb;
  envColor = applyTonemapping(envColor, tonemappingMode);
  envColor = pow(envColor, vec3(1.0 / 2.2));
  finalColor = vec4(envColor, 1.0);
}
