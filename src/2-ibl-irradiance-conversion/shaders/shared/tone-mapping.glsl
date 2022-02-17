// tone mapping modes
#include ../../../shared/shaders/tone-mapping/aces.glsl;
#include ../../../shared/shaders/tone-mapping/filmic.glsl;
#include ../../../shared/shaders/tone-mapping/lottes.glsl;
#include ../../../shared/shaders/tone-mapping/reinhard.glsl;
#include ../../../shared/shaders/tone-mapping/reinhard2.glsl;
#include ../../../shared/shaders/tone-mapping/uchimura.glsl;
#include ../../../shared/shaders/tone-mapping/uncharted.glsl;
#include ../../../shared/shaders/tone-mapping/unreal.glsl;

vec3 applyTonemapping (vec3 color, float tonemappingMode) {
  return mix(
    aces(color),
    mix(
      tonemapFilmic(color),
      mix(
        lottes(color),
        mix(
          reinhard(color),
          mix(
            reinhard2(color),
            mix(
              uchimura(color),
              mix(
                uncharted2(color),
                unreal(color),
                clamp(tonemappingMode, 6.0, 7.0) - 6.0
              ),
              clamp(tonemappingMode, 5.0, 6.0) - 5.0
            ),
            clamp(tonemappingMode, 4.0, 5.0) - 4.0
          ),
          clamp(tonemappingMode, 3.0, 4.0) - 3.0
        ),
        clamp(tonemappingMode, 2.0, 3.0) - 2.0
      ),
      clamp(tonemappingMode, 1.0, 2.0) - 1.0
    ),
    clamp(tonemappingMode, 0.0, 1.0)
  );
}
