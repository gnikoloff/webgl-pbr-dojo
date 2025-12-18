// tone mapping modes
#include ../../../shared/shaders/tone-mapping/aces.glsl;
#include ../../../shared/shaders/tone-mapping/filmic.glsl;
#include ../../../shared/shaders/tone-mapping/lottes.glsl;
#include ../../../shared/shaders/tone-mapping/reinhard.glsl;
#include ../../../shared/shaders/tone-mapping/reinhard2.glsl;
#include ../../../shared/shaders/tone-mapping/uchimura.glsl;
#include ../../../shared/shaders/tone-mapping/uncharted.glsl;
#include ../../../shared/shaders/tone-mapping/unreal.glsl;

vec3 applyTonemapping(vec3 color, int tonemappingMode) {
  if (tonemappingMode == 0) return aces(color);
  else if (tonemappingMode == 1) return tonemapFilmic(color);
  else if (tonemappingMode == 2) return lottes(color);
  else if (tonemappingMode == 3) return reinhard(color);
  else if (tonemappingMode == 4) return reinhard2(color);
  else if (tonemappingMode == 5) return uchimura(color);
  else if (tonemappingMode == 6) return uncharted2(color);
  else if (tonemappingMode == 7) return unreal(color);
  return color; // fallback
}