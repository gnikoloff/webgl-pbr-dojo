vec3 getNormalFromMap(sampler2D normalMap, vec2 uv, vec3 normal, vec3 worldPos) {
  vec3 tangentNormal = texture(normalMap, uv).xyz * 2.0 - 1.0;

  vec3 Q1  = dFdx(worldPos);
  vec3 Q2  = dFdy(worldPos);
  vec2 st1 = dFdx(uv);
  vec2 st2 = dFdy(uv);

  vec3 N   = normalize(normal);
  vec3 T  = normalize(Q1 * st2.t - Q2 * st1.t);
  vec3 B  = -normalize(cross(N, T));
  mat3 TBN = mat3(T, B, N);

  return normalize(TBN * tangentNormal);
}