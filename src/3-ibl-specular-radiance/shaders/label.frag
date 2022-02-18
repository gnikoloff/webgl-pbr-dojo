#version 300 es
precision highp float;

-- DEFINES_HOOK --

#include shared/ubos.glsl;

uniform sampler2D u_diffuse;

in vec2 vUv;

out vec4 finalColor;

void main () {
  finalColor = texture(u_diffuse, vUv);
}