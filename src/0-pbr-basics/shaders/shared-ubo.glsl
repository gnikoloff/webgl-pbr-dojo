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

#ifdef USE_PBR
  uniform Lighting {
    vec3 lightPositions[POINT_LIGHTS_COUNT];
    vec3 lightColors[POINT_LIGHTS_COUNT];
  };
#endif
