#version 300 es

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

uniform mat4 u_worldMatrix;

in vec4 aPosition;
in vec3 aNormal;
in vec2 aUv;

void main () {
  gl_Position = projMatrix * viewMatrix * u_worldMatrix * aPosition;
}
