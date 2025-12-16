#version 300 es

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

uniform mat4 u_worldMatrix;

in vec4 aPosition;
in vec2 aUv;

out vec2 vUv;

void main () {
  vec3 worldPos = u_worldMatrix[3].xyz;
  
  // Extract scale from world matrix
  vec3 scale = vec3(
    length(u_worldMatrix[0].xyz),
    length(u_worldMatrix[1].xyz),
    length(u_worldMatrix[2].xyz)
  );
  
  // Create billboard matrix that faces camera
  vec3 look = normalize(cameraPosition - worldPos);
  vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), look));
  vec3 up = cross(look, right);
  mat4 billboardMatrix = mat4(
    vec4(right * scale.x, 0.0),
    vec4(up * scale.y, 0.0),
    vec4(look * scale.z, 0.0),
    vec4(worldPos, 1.0)
  );
  
  gl_Position = projMatrix * viewMatrix * billboardMatrix * aPosition;
  vUv = aUv;
}
