#version 300 es
precision highp float;

-- DEFINES_HOOK --

uniform Projection {
  mat4 projMatrix;
  float zNear;
  float zFar;
};

uniform View {
  mat4 viewMatrix;
  vec3 cameraPosition;
  float time;
};

uniform vec4 u_color;

in vec2 vUv;
out vec4 finalColor;

void main () {
  float d = 1.0 - distance(vUv, vec2(0.5)) * 2.0;
  finalColor = vec4(u_color.rgb * 6.0, u_color.a) * d;
  if (finalColor.a < 0.1) {
    discard;
  }
}