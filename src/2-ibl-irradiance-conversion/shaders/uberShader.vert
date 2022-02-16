#version 300 es

-- DEFINES_HOOK --

#include shared-ubo.glsl;

uniform mat4 u_worldMatrix;

#ifdef USE_UNIQUE_PROJECTION_VIEW_MATRIX
  uniform mat4 u_projectionViewMatrix;
#endif

in vec4 aPosition;
in vec3 aNormal;
in vec2 aUv;

out vec3 vNormal;
out vec2 vUv;
out vec3 vLocalPos;
out vec3 vWorldPos;

void main () {
  vec4 worldPos = u_worldMatrix * aPosition;

  #ifdef IS_CUBEMAP
    mat4 rotView = mat4(mat3(viewMatrix)); // remove translation from the view matrix
    vec4 clipPos = projMatrix * rotView * aPosition;
    gl_Position = clipPos.xyww;
  #else
    #ifdef USE_UNIQUE_PROJECTION_VIEW_MATRIX
      gl_Position = u_projectionViewMatrix * worldPos;
    #else
      gl_Position = projMatrix * viewMatrix * worldPos;
    #endif
  #endif

  vNormal = mat3(u_worldMatrix) * aNormal;
  vUv = aUv;
  vLocalPos = aPosition.xyz;
  vWorldPos = worldPos.xyz;
}
