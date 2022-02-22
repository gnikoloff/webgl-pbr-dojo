#version 300 es
precision highp float;

-- DEFINES_HOOK --

#include shared/ubos.glsl;
#include shared/sample-spherical-map.glsl;

uniform sampler2D u_equirectangularMap;

in vec3 vLocalPos;

out vec4 finalColor;

void main () {
  vec2 uv = sampleSphericalMap(normalize(vLocalPos));
  vec3 color = texture(u_equirectangularMap, uv).rgb;
  finalColor = vec4(color, 1.0);
  // finalColor = vec4(uv, 0.0, 1.0);
}
