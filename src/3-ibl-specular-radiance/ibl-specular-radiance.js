// import 'https://greggman.github.io/webgl-lint/webgl-lint.js'
// // import { Spector } from 'spectorjs'
import { Pane } from 'tweakpane'
import * as TweakpaneThumbnailListPlugin from 'tweakpane-plugin-thumbnail-list'

import HDRImage from '../lib/hdr-png'

import {
  CameraController,
  createAndBindUBOToBase,
  createBox,
  createPlane,
  createSphere,
  createUniformBlockInfo,
  PerspectiveCamera,
  SceneNode,
} from '../lib/hwoa-rang-gl2'

import loadCorrectCompressedTexture from '../shared/load-correct-compressed-texture'

import Label from './label'
import Skybox from './skybox'
import Sphere from './sphere'

import BRDFIntegrationPlane from './bdrf-integration-plane'
import CubemapConverter from './cubemap-converter'

import LightDebug from '../shared/light-debug'
import PlaneDebug from '../shared/plane-debug'

import { normalizeRGB } from '../shared/color-utils'
import { isTouchDevice } from '../shared/interaction-utils'

// shaders
import CONVOLUTE_BDRF_FRAGMENT_SHADER_SRC from './shaders/convolute-bdrf-map.frag'
import CONVOLUTE_IRRADIANCE_MAP_FRAGMENT_SHADER_SRC from './shaders/convolute-irradiance-map.frag'
import CONVOLUTE_PRE_FILTERED_ENVIRONMENT_MAP_SHADER_SRC from './shaders/convolute-pre-filter-environment-map.frag'
import EQIORECTANGULAR_TO_CUBEMAP_FRAGMENT_SHADER_SRC from './shaders/equirectangular-to-cubemap.frag'
import LABEL_FRAGMENT_SHADER_SRC from './shaders/label.frag'
import SKYBOX_FRAGMENT_SHADER_SRC from './shaders/skybox.frag'
import SPHERE_FRAGMENT_SHADER_SRC from './shaders/sphere.frag'
import UBER_VERTEX_SHADER_SRC from './shaders/uber.vert'

// import ToHalfFloatWebWorker from '../shared/to-half-float-web-worker?worker'

// IBL environment
import skyboxImageSrc1 from '../images/environment/little_paris_eiffel_tower.png'
import hdrImageSrc1 from '../images/environment/little_paris_eiffel_tower_1k.hdr'
import skyboxImageSrc0 from '../images/environment/moonlit_golf.png'
import hdrImageSrc0 from '../images/environment/moonlit_golf_1k.hdr'
import hdrImageSrc2 from '../images/environment/qwantani_moon_noon_puresky_1k.hdr'
import skyboxImageSrc2 from '../images/environment/qwantani_moon_noon_puresky_1k.png'

import skyboxImageSrc3 from '../images/environment/studio_small_08.png'
import hdrImageSrc3 from '../images/environment/studio_small_08_1k.hdr'

// PBR compressed textures - S3TC, ASTC, ETC1, ETC2, PVRTC
// PBR 1
// albedo
import albedoMap0ASTC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-albedo_astc.ktx'
import albedoMap0ETC1 from '../images/pbr/worn-shiny-metal/worn-shiny-metal-albedo_etc1.ktx'
import albedoMap0ETC2 from '../images/pbr/worn-shiny-metal/worn-shiny-metal-albedo_etc2.ktx'
import albedoMap0PVRTC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-albedo_pvrtc.ktx'
import albedoMap0S3TC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-albedo_s3tc.ktx'
// ao
import aoMap0ASTC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-ao_astc.ktx'
import aoMap0ETC1 from '../images/pbr/worn-shiny-metal/worn-shiny-metal-ao_etc1.ktx'
import aoMap0ETC2 from '../images/pbr/worn-shiny-metal/worn-shiny-metal-ao_etc2.ktx'
import aoMap0PVRTC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-ao_pvrtc.ktx'
import aoMap0S3TC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-ao_s3tc.ktx'
// normal
import normalMap0ASTC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Normal-ogl_astc.ktx'
import normalMap0ETC1 from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Normal-ogl_etc1.ktx'
import normalMap0ETC2 from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Normal-ogl_etc2.ktx'
import normalMap0PVRTC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Normal-ogl_pvrtc.ktx'
import normalMap0S3TC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Normal-ogl_s3tc.ktx'
// metallic
import metallicMap0ASTC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Metallic_astc.ktx'
import metallicMap0ETC1 from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Metallic_etc1.ktx'
import metallicMap0ETC2 from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Metallic_etc2.ktx'
import metallicMap0PVRTC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Metallic_pvrtc.ktx'
import metallicMap0S3TC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Metallic_s3tc.ktx'
// roughness
import roughnessMap0ASTC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Roughness_astc.ktx'
import roughnessMap0ETC1 from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Roughness_etc1.ktx'
import roughnessMap0ETC2 from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Roughness_etc2.ktx'
import roughnessMap0PVRTC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Roughness_pvrtc.ktx'
import roughnessMap0S3TC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Roughness_s3tc.ktx'

// PBR 2
// albedo
import albedoMap1ASTC from '../images/pbr/rust/rustediron2_basecolor_astc.ktx'
import albedoMap1ETC1 from '../images/pbr/rust/rustediron2_basecolor_etc1.ktx'
import albedoMap1ETC2 from '../images/pbr/rust/rustediron2_basecolor_etc2.ktx'
import albedoMap1PVRTC from '../images/pbr/rust/rustediron2_basecolor_pvrtc.ktx'
import albedoMap1S3TC from '../images/pbr/rust/rustediron2_basecolor_s3tc.ktx'
// ao
import aoMap1ASTC from '../images/pbr/rust/rustediron2_ao_astc.ktx'
import aoMap1ETC1 from '../images/pbr/rust/rustediron2_ao_etc1.ktx'
import aoMap1ETC2 from '../images/pbr/rust/rustediron2_ao_etc2.ktx'
import aoMap1PVRTC from '../images/pbr/rust/rustediron2_ao_pvrtc.ktx'
import aoMap1S3TC from '../images/pbr/rust/rustediron2_ao_s3tc.ktx'
// normal
import normalMap1ASTC from '../images/pbr/rust/rustediron2_normal_astc.ktx'
import normalMap1ETC1 from '../images/pbr/rust/rustediron2_normal_etc1.ktx'
import normalMap1ETC2 from '../images/pbr/rust/rustediron2_normal_etc2.ktx'
import normalMap1PVRTC from '../images/pbr/rust/rustediron2_normal_pvrtc.ktx'
import normalMap1S3TC from '../images/pbr/rust/rustediron2_normal_s3tc.ktx'
// metallic
import metallicMap1ASTC from '../images/pbr/rust/rustediron2_metallic_astc.ktx'
import metallicMap1ETC1 from '../images/pbr/rust/rustediron2_metallic_etc1.ktx'
import metallicMap1ETC2 from '../images/pbr/rust/rustediron2_metallic_etc2.ktx'
import metallicMap1PVRTC from '../images/pbr/rust/rustediron2_metallic_pvrtc.ktx'
import metallicMap1S3TC from '../images/pbr/rust/rustediron2_metallic_s3tc.ktx'
// roughness
import roughnessMap1ASTC from '../images/pbr/rust/rustediron2_roughness_astc.ktx'
import roughnessMap1ETC1 from '../images/pbr/rust/rustediron2_roughness_etc1.ktx'
import roughnessMap1ETC2 from '../images/pbr/rust/rustediron2_roughness_etc2.ktx'
import roughnessMap1PVRTC from '../images/pbr/rust/rustediron2_roughness_pvrtc.ktx'
import roughnessMap1S3TC from '../images/pbr/rust/rustediron2_roughness_s3tc.ktx'

// PBR 3
// albedo
import albedoMap2ASTC from '../images/pbr/grass/leafy-grass2-albedo_astc.ktx'
import albedoMap2ETC1 from '../images/pbr/grass/leafy-grass2-albedo_etc1.ktx'
import albedoMap2ETC2 from '../images/pbr/grass/leafy-grass2-albedo_etc2.ktx'
import albedoMap2PVRTC from '../images/pbr/grass/leafy-grass2-albedo_pvrtc.ktx'
import albedoMap2S3TC from '../images/pbr/grass/leafy-grass2-albedo_s3tc.ktx'
// ao
import aoMap2ASTC from '../images/pbr/grass/leafy-grass2-ao_astc.ktx'
import aoMap2ETC1 from '../images/pbr/grass/leafy-grass2-ao_etc1.ktx'
import aoMap2ETC2 from '../images/pbr/grass/leafy-grass2-ao_etc2.ktx'
import aoMap2PVRTC from '../images/pbr/grass/leafy-grass2-ao_pvrtc.ktx'
import aoMap2S3TC from '../images/pbr/grass/leafy-grass2-ao_s3tc.ktx'
// normal
import normalMap2ASTC from '../images/pbr/grass/leafy-grass2-normal-ogl_astc.ktx'
import normalMap2ETC1 from '../images/pbr/grass/leafy-grass2-normal-ogl_etc1.ktx'
import normalMap2ETC2 from '../images/pbr/grass/leafy-grass2-normal-ogl_etc2.ktx'
import normalMap2PVRTC from '../images/pbr/grass/leafy-grass2-normal-ogl_pvrtc.ktx'
import normalMap2S3TC from '../images/pbr/grass/leafy-grass2-normal-ogl_s3tc.ktx'
// metallic
import metallicMap2ASTC from '../images/pbr/grass/leafy-grass2-metallic_astc.ktx'
import metallicMap2ETC1 from '../images/pbr/grass/leafy-grass2-metallic_etc1.ktx'
import metallicMap2ETC2 from '../images/pbr/grass/leafy-grass2-metallic_etc2.ktx'
import metallicMap2PVRTC from '../images/pbr/grass/leafy-grass2-metallic_pvrtc.ktx'
import metallicMap2S3TC from '../images/pbr/grass/leafy-grass2-metallic_s3tc.ktx'
// roughness
import roughnessMap2ASTC from '../images/pbr/grass/leafy-grass2-roughness_astc.ktx'
import roughnessMap2ETC1 from '../images/pbr/grass/leafy-grass2-roughness_etc1.ktx'
import roughnessMap2ETC2 from '../images/pbr/grass/leafy-grass2-roughness_etc2.ktx'
import roughnessMap2PVRTC from '../images/pbr/grass/leafy-grass2-roughness_pvrtc.ktx'
import roughnessMap2S3TC from '../images/pbr/grass/leafy-grass2-roughness_s3tc.ktx'

const SPHERE_GRID_X_COUNT = 7
const SPHERE_GRID_Y_COUNT = 7
const SPHERE_GRID_WIDTH = 10
const SPHERE_GRID_HEIGHT = 10
const POINT_LIGHT_POSITIONS_COUNT = 4
const BDRF_INTEGRATION_PLANE_WIDTH = 512
const BDRF_INTEGRATION_PLANE_HEIGHT = 512
const SKYBOX_SIDE_SIZE = 1024

const MOBILE_BREAKPOINT = 600

let convolutionState = null
let infoOpen = innerWidth > MOBILE_BREAKPOINT

const TONEMAPPING_MODES = [
  'aces',
  'filmic',
  'lottes',
  'reinhard',
  'reinhard2',
  'uchimura',
  'uncharted',
  'unreal',
]

const PBR_TEXTURES_0 = [
  {
    s3tc: transformAssetSrc(albedoMap0S3TC),
    astc: transformAssetSrc(albedoMap0ASTC),
    etc1: transformAssetSrc(albedoMap0ETC1),
    etc2: transformAssetSrc(albedoMap0ETC2),
    pvrtc: transformAssetSrc(albedoMap0PVRTC),
  },
  {
    s3tc: transformAssetSrc(normalMap0S3TC),
    astc: transformAssetSrc(normalMap0ASTC),
    etc1: transformAssetSrc(normalMap0ETC1),
    etc2: transformAssetSrc(normalMap0ETC2),
    pvrtc: transformAssetSrc(normalMap0PVRTC),
  },
  {
    s3tc: transformAssetSrc(metallicMap0S3TC),
    astc: transformAssetSrc(metallicMap0ASTC),
    etc1: transformAssetSrc(metallicMap0ETC1),
    etc2: transformAssetSrc(metallicMap0ETC2),
    pvrtc: transformAssetSrc(metallicMap0PVRTC),
  },
  {
    s3tc: transformAssetSrc(roughnessMap0S3TC),
    astc: transformAssetSrc(roughnessMap0ASTC),
    etc1: transformAssetSrc(roughnessMap0ETC1),
    etc2: transformAssetSrc(roughnessMap0ETC2),
    pvrtc: transformAssetSrc(roughnessMap0PVRTC),
  },
  {
    s3tc: transformAssetSrc(aoMap0S3TC),
    astc: transformAssetSrc(aoMap0ASTC),
    etc1: transformAssetSrc(aoMap0ETC1),
    etc2: transformAssetSrc(aoMap0ETC2),
    pvrtc: transformAssetSrc(aoMap0PVRTC),
  },
]
const PBR_TEXTURES_1 = [
  {
    s3tc: transformAssetSrc(albedoMap1S3TC),
    astc: transformAssetSrc(albedoMap1ASTC),
    etc1: transformAssetSrc(albedoMap1ETC1),
    etc2: transformAssetSrc(albedoMap1ETC2),
    pvrtc: transformAssetSrc(albedoMap1PVRTC),
  },
  {
    s3tc: transformAssetSrc(normalMap1S3TC),
    astc: transformAssetSrc(normalMap1ASTC),
    etc1: transformAssetSrc(normalMap1ETC1),
    etc2: transformAssetSrc(normalMap1ETC2),
    pvrtc: transformAssetSrc(normalMap1PVRTC),
  },
  {
    s3tc: transformAssetSrc(metallicMap1S3TC),
    astc: transformAssetSrc(metallicMap1ASTC),
    etc1: transformAssetSrc(metallicMap1ETC1),
    etc2: transformAssetSrc(metallicMap1ETC2),
    pvrtc: transformAssetSrc(metallicMap1PVRTC),
  },
  {
    s3tc: transformAssetSrc(roughnessMap1S3TC),
    astc: transformAssetSrc(roughnessMap1ASTC),
    etc1: transformAssetSrc(roughnessMap1ETC1),
    etc2: transformAssetSrc(roughnessMap1ETC2),
    pvrtc: transformAssetSrc(roughnessMap1PVRTC),
  },
  {
    s3tc: transformAssetSrc(aoMap1S3TC),
    astc: transformAssetSrc(aoMap1ASTC),
    etc1: transformAssetSrc(aoMap1ETC1),
    etc2: transformAssetSrc(aoMap1ETC2),
    pvrtc: transformAssetSrc(aoMap1PVRTC),
  },
]
const PBR_TEXTURES_2 = [
  {
    s3tc: transformAssetSrc(albedoMap2S3TC),
    astc: transformAssetSrc(albedoMap2ASTC),
    etc1: transformAssetSrc(albedoMap2ETC1),
    etc2: transformAssetSrc(albedoMap2ETC2),
    pvrtc: transformAssetSrc(albedoMap2PVRTC),
  },
  {
    s3tc: transformAssetSrc(normalMap2S3TC),
    astc: transformAssetSrc(normalMap2ASTC),
    etc1: transformAssetSrc(normalMap2ETC1),
    etc2: transformAssetSrc(normalMap2ETC2),
    pvrtc: transformAssetSrc(normalMap2PVRTC),
  },
  {
    s3tc: transformAssetSrc(metallicMap2S3TC),
    astc: transformAssetSrc(metallicMap2ASTC),
    etc1: transformAssetSrc(metallicMap2ETC1),
    etc2: transformAssetSrc(metallicMap2ETC2),
    pvrtc: transformAssetSrc(metallicMap2PVRTC),
  },
  {
    s3tc: transformAssetSrc(roughnessMap2S3TC),
    astc: transformAssetSrc(roughnessMap2ASTC),
    etc1: transformAssetSrc(roughnessMap2ETC1),
    etc2: transformAssetSrc(roughnessMap2ETC2),
    pvrtc: transformAssetSrc(roughnessMap2PVRTC),
  },
  {
    s3tc: transformAssetSrc(aoMap2S3TC),
    astc: transformAssetSrc(aoMap2ASTC),
    etc1: transformAssetSrc(aoMap2ETC1),
    etc2: transformAssetSrc(aoMap2ETC2),
    pvrtc: transformAssetSrc(aoMap2PVRTC),
  },
]
const CUBEMAP_SIDES_CAPTURE_LOOK_ATS = [
  [1, 0, 0],
  [-1, 0, 0],
  [0, 1, 0],
  [0, -1, 0],
  [0, 0, 1],
  [0, 0, -1],
]
const CUBEMAP_SIDES_CAPTURE_UP_VECTORS = [
  [0, -1, 0],
  [0, -1, 0],
  [0, 0, 1],
  [0, 0, -1],
  [0, -1, 0],
  [0, -1, 0],
]

const DEFAULT_SKYBOX = 'tokyo'

// prettier-ignore
const SKYBOX_IMAGE_SOURCES = new Map([
  ['mon-valley', hdrImageSrc0],
  ['theatre', hdrImageSrc1],
  ['tokyo', hdrImageSrc2],
  ['studio', hdrImageSrc3]
])

const TWEAK_PARAMS = {
  playAnim: true,
  useEnvDiffuseLight: true,
  useEnvSpecularLight: true,
  image: DEFAULT_SKYBOX,
}

// const spector = new Spector()
// spector.displayUI()

const tonemappingModeFloat32 = new Float32Array([2])
const pointLightIntensityFloat32 = new Float32Array([16])
const diffuseLightMixFactorFloat32 = new Float32Array([1]) // image diffuse light on by default
const specularLightMixFactorFloat32 = new Float32Array([1]) // image specular light on by default

let collapsableRoot = document.getElementById('collapsable')

const pane = new Pane({
  title: 'Parameters',
  expanded: innerWidth > MOBILE_BREAKPOINT,
})
pane.registerPlugin(TweakpaneThumbnailListPlugin)
hideNoneOptionFromTweakpane()
pane.element.parentNode.style.setProperty('width', '400px')
pane.addInput(TWEAK_PARAMS, 'playAnim', {
  label: 'Play Animation',
})
pane
  .addBlade({
    view: 'list',
    label: 'Tone Mapping Mode',
    options: TONEMAPPING_MODES.map((text) => ({ text, value: text })),
    value: TONEMAPPING_MODES[2],
  })
  .on('change', ({ value }) => {
    tonemappingModeFloat32[0] = TONEMAPPING_MODES.indexOf(value)
  })
pane
  .addBlade({
    view: 'slider',
    label: 'Point Light Luminance',
    min: 0,
    max: 50,
    value: pointLightIntensityFloat32[0],
  })
  .on('change', ({ value }) => {
    pointLightIntensityFloat32[0] = value
  })
pane

  .addInput(TWEAK_PARAMS, 'useEnvDiffuseLight', {
    label: 'Use Environment Diffuse Light',
  })
  .on('change', ({ value }) => {
    diffuseLightMixFactorFloat32[0] = value ? 1 : 0
  })
pane
  .addInput(TWEAK_PARAMS, 'useEnvSpecularLight', {
    label: 'Use Environment Specular Light',
  })
  .on('change', ({ value }) => {
    specularLightMixFactorFloat32[0] = value
  })
pane
  .addInput(TWEAK_PARAMS, 'image', {
    label: 'Environment Image',
    view: 'thumbnail-list',
    options: [
      {
        text: 'Moonlit Golf',
        value: 'mon-valley',
        src: transformAssetSrc(skyboxImageSrc0),
      },
      {
        text: 'Little Paris',
        value: 'theatre',
        src: transformAssetSrc(skyboxImageSrc1),
      },
      {
        text: 'Qwantani Noon',
        value: 'tokyo',
        src: transformAssetSrc(skyboxImageSrc2),
      },
      {
        text: 'Studio Small',
        value: 'studio',
        src: transformAssetSrc(skyboxImageSrc3),
      },
    ],
  })
  .on('change', ({ value: { value } }) => {
    loadHDRImage(SKYBOX_IMAGE_SOURCES.get(value)).then((hdrTexture) => {
      hdrTexCurr = hdrTexture
      hdrTexChanged = true
    })
  })

// const toHalfWorker = new ToHalfFloatWebWorker()

const canvas = document.createElement('canvas')
canvas.setAttribute('id', 'c')
document.body.appendChild(canvas)

const gl = canvas.getContext('webgl2')

const perspCamera = new PerspectiveCamera(
  (45 * Math.PI) / 180,
  innerWidth / innerHeight,
  0.1,
  100,
)
perspCamera.position = [10.84, -0.17, 8.98]
perspCamera.lookAt = [0, 0, 0]
perspCamera.updateProjectionMatrix()

new CameraController(perspCamera, canvas, false, isTouchDevice() ? 2 : 0.85)

// used for capturing each cube face when converting equirectangular to cubemap
const captureFaceCamera = new PerspectiveCamera(
  (90 * Math.PI) / 180,
  1,
  0.1,
  10,
).updateProjectionMatrix()

// all the geometries for this demo
const sphereGeometry = createSphere({
  radius: 0.5,
  widthSegments: 32,
  heightSegments: 32,
})
const labelGeometry = createPlane({
  width: 5,
  height: 5 / 8,
})
const cubemapGeometry = createBox({ flipUVy: true })

const scene = new SceneNode()

const sphereDefines = {
  POINT_LIGHTS_COUNT: POINT_LIGHT_POSITIONS_COUNT.toString(),
}

const spheres = []
const gridStepX = SPHERE_GRID_WIDTH / SPHERE_GRID_X_COUNT
const gridStepY = SPHERE_GRID_HEIGHT / SPHERE_GRID_Y_COUNT
for (let y = 0; y < SPHERE_GRID_Y_COUNT; y++) {
  for (let x = 0; x < SPHERE_GRID_X_COUNT; x++) {
    const sphereX =
      x * gridStepX - SPHERE_GRID_WIDTH / 2 + sphereGeometry.radius
    const sphereY =
      y * gridStepY - SPHERE_GRID_HEIGHT / 2 + sphereGeometry.radius

    // "plain" sphere
    const sphere = new Sphere(
      gl,
      sphereGeometry,
      UBER_VERTEX_SHADER_SRC,
      SPHERE_FRAGMENT_SHADER_SRC,
      sphereDefines,
    )
    sphere.setPosition([sphereX, sphereY, -5])

    const metallic = y / (SPHERE_GRID_Y_COUNT - 1) //Easing.quad_In(y / SPHERE_GRID_Y_COUNT)
    sphere.setUniform('u_metallic', {
      type: gl.FLOAT,
      value: metallic,
    })

    const roughness = Math.max(0.04, x / (SPHERE_GRID_X_COUNT - 1))
    sphere.setUniform('u_roughness', {
      type: gl.FLOAT,
      value: roughness,
    })

    scene.addChild(sphere)
    spheres.push(sphere)

    // textured sphere
    const texturedSphere = new Sphere(
      gl,
      sphereGeometry,
      UBER_VERTEX_SHADER_SRC,
      SPHERE_FRAGMENT_SHADER_SRC,
      {
        USE_PBR_TEXTURES: true,
        USE_UV: true,
        ...sphereDefines,
      },
    )
    texturedSphere.setPosition([sphereX, sphereY, 5])
    scene.addChild(texturedSphere)
    spheres.push(texturedSphere)
  }
}

const roughnessLabel = new Label(
  gl,
  'roughness',
  labelGeometry,
  UBER_VERTEX_SHADER_SRC,
  LABEL_FRAGMENT_SHADER_SRC,
)
roughnessLabel.setPosition([
  -SPHERE_GRID_WIDTH / 2 + labelGeometry.width / 2,
  -SPHERE_GRID_HEIGHT / 2 - labelGeometry.height,
  -5,
])
scene.addChild(roughnessLabel)

const metallicLabel = new Label(
  gl,
  'metallic',
  labelGeometry,
  UBER_VERTEX_SHADER_SRC,
  LABEL_FRAGMENT_SHADER_SRC,
)
metallicLabel
  .setPosition([
    -SPHERE_GRID_WIDTH / 2 - labelGeometry.height,
    -SPHERE_GRID_HEIGHT / 2 + labelGeometry.width / 2,
    -5,
  ])
  .setRotation([0, 0, Math.PI * 0.5])
scene.addChild(metallicLabel)

// UBO setup
const projectionUBOInfo = createUniformBlockInfo(
  gl,
  scene.children[0].program,
  'Projection',
  ['projMatrix', 'zNear', 'zFar'],
)
const projectionUBO = createAndBindUBOToBase(gl, projectionUBOInfo.blockSize, 0)

const viewUBOInfo = createUniformBlockInfo(
  gl,
  scene.children[0].program,
  'View',
  ['viewMatrix', 'cameraPosition', 'time'],
)
const viewUBO = createAndBindUBOToBase(gl, viewUBOInfo.blockSize, 1)

const lightingUBOInfo = createUniformBlockInfo(
  gl,
  scene.children[0].program,
  'Lighting',
  [
    'pointLightPositions',
    'pointLightColors',
    'pointLightIntensity',
    'diffuseEnvLightMixFactor',
    'specularEnvLightMixFactor',
  ],
)
const lightingUBO = createAndBindUBOToBase(gl, lightingUBOInfo.blockSize, 2)

const postFXUBOInfo = createUniformBlockInfo(
  gl,
  scene.children[0].program,
  'PostFX',
  ['tonemappingMode'],
)
const postFXUBO = createAndBindUBOToBase(gl, postFXUBOInfo.blockSize, 3)

const pointLightsPositions = []
const pointLightsColors = []
const lightDebuggers = []

const colors = [
  normalizeRGB([243, 156, 18]),
  normalizeRGB([41, 128, 185]),
  normalizeRGB([192, 57, 43]),
  normalizeRGB([142, 68, 173]),
]
for (let i = 0; i < POINT_LIGHT_POSITIONS_COUNT; i++) {
  pointLightsPositions.push(new Float32Array(3))

  // const pointLight = [Math.random(), Math.random(), Math.random()]
  const pointLight = colors[i]

  pointLightsColors.push(new Float32Array(pointLight))

  const lightDebug = new LightDebug(gl)
  lightDebug.color = [...pointLight, 1]
  scene.addChild(lightDebug)
  lightDebuggers.push(lightDebug)
}

// we will project the equirectangular texture to this unit cube, place a camera inside and
// take a snapshot of each of the 6 sides, in the process converting it to cubemap texture
const equirectangularToCubemap = new CubemapConverter(
  gl,
  cubemapGeometry,
  UBER_VERTEX_SHADER_SRC,
  EQIORECTANGULAR_TO_CUBEMAP_FRAGMENT_SHADER_SRC,
)
equirectangularToCubemap.setUniform('u_equirectangularMap', {
  type: gl.INT,
  value: 0,
})

const cubemapToIrradiance = new CubemapConverter(
  gl,
  cubemapGeometry,
  UBER_VERTEX_SHADER_SRC,
  CONVOLUTE_IRRADIANCE_MAP_FRAGMENT_SHADER_SRC,
)
cubemapToIrradiance.setUniform('u_environmentMap', { type: gl.INT, value: 0 })

const cubemapToPrefilterEnvironment = new CubemapConverter(
  gl,
  cubemapGeometry,
  UBER_VERTEX_SHADER_SRC,
  CONVOLUTE_PRE_FILTERED_ENVIRONMENT_MAP_SHADER_SRC,
  {
    CUBEMAP_SIDE_SIZE: SKYBOX_SIDE_SIZE,
  },
)
cubemapToPrefilterEnvironment.setUniform('u_environmentMap', {
  type: gl.INT,
  value: 0,
})
cubemapToPrefilterEnvironment.setUniform('u_roughness', {
  type: gl.FLOAT,
  value: 0,
})

const bdrfPlane = new BRDFIntegrationPlane(
  gl,
  BDRF_INTEGRATION_PLANE_WIDTH,
  BDRF_INTEGRATION_PLANE_HEIGHT,
  UBER_VERTEX_SHADER_SRC,
  CONVOLUTE_BDRF_FRAGMENT_SHADER_SRC,
)

const skybox = new Skybox(
  gl,
  cubemapGeometry,
  UBER_VERTEX_SHADER_SRC,
  SKYBOX_FRAGMENT_SHADER_SRC,
)

const brdfConvoluteTexDebugView = new PlaneDebug(
  gl,
  BDRF_INTEGRATION_PLANE_WIDTH,
  BDRF_INTEGRATION_PLANE_HEIGHT,
)

// const compressedTexS3TCPlaneDebugView = new PlaneDebug(gl, 128, 128)

{
  const scale = 0.2
  const scaledWidth = BDRF_INTEGRATION_PLANE_WIDTH * scale
  const scaledHeight = BDRF_INTEGRATION_PLANE_HEIGHT * scale
  const paddingPx = 24
  brdfConvoluteTexDebugView
    .setPosition([
      -innerWidth / 2 + scaledWidth / 2 + paddingPx,
      -innerHeight / 2 + scaledHeight / 2 + paddingPx,
      0,
    ])
    .setScale([scale, scale, 1])
    .updateWorldMatrix()
}

// we need that extension to render to half float 16bit framebuffer!
gl.getExtension('EXT_color_buffer_half_float')
gl.getExtension('EXT_color_buffer_float')
gl.getExtension('OES_texture_half_float')
gl.getExtension('OES_texture_half_float_linear')

let hdrTexChanged = false
let hdrTexCurr

loadHDRImage(SKYBOX_IMAGE_SOURCES.get(DEFAULT_SKYBOX)).then((hdrTexture) => {
  hdrTexCurr = hdrTexture
  hdrTexChanged = true
})

Promise.all([
  Promise.all(
    PBR_TEXTURES_0.map((imageURLs, i) =>
      loadCorrectCompressedTexture(gl, imageURLs),
    ),
  ),
  Promise.all(
    PBR_TEXTURES_1.map((imageURLs, i) =>
      loadCorrectCompressedTexture(gl, imageURLs),
    ),
  ),
  Promise.all(
    PBR_TEXTURES_2.map((imageURLs, i) =>
      loadCorrectCompressedTexture(gl, imageURLs),
    ),
  ),
]).then((pbrTexturesArr) => {
  let texIdx = 0
  for (const sphere of spheres) {
    const pack = pbrTexturesArr[texIdx]
    sphere.albedoMap = pack[0]
    sphere.normalMap = pack[1]
    sphere.metallicMap = pack[2]
    sphere.roughnessMap = pack[3]
    sphere.aoMap = pack[4]
    texIdx++
    if (texIdx === 3) {
      texIdx = 0
    }
  }
})

requestAnimationFrame(drawFrame)
onResize()
window.addEventListener('resize', onResize)
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('header').style.display = 'block'
  var el = isTouchDevice()
    ? document.getElementById('instructions-touch')
    : document.getElementById('instructions-desktop')
  el.style.display = 'block'

  if (infoOpen) {
    collapsableRoot.style.display = 'block'
  }
})
document.getElementById('info-icon').addEventListener('click', () => {
  infoOpen = !infoOpen
  collapsableRoot.style.display = infoOpen ? 'block' : 'none'
})

function drawFrame(ts) {
  requestAnimationFrame(drawFrame)

  if (hdrTexChanged) {
    convolutionState = {
      width: hdrTexCurr.width,
      height: hdrTexCurr.height,
      imageData: hdrTexCurr.dataFloat,
      step: 0,
      maxSteps: 3, // cubemap, irradiance, prefilter
    }
    hdrTexChanged = false
  }

  if (convolutionState) {
    const stepMS = 75
    if (convolutionState.step === stepMS * 0) {
      canvas.classList.remove('visible')
      convoluteCubemap(convolutionState)
    } else if (convolutionState.step === stepMS * 1) {
      convolveIrradiance()
    } else if (convolutionState.step === stepMS * 2) {
      convolvePrefilter()
    } else if (convolutionState.step === stepMS * 3) {
      convolveBRDF()
      convolutionState = null // Done
      canvas.classList.add('visible')
      return
    }
    convolutionState.step++
    return
  }

  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1)

  perspCamera.updateViewMatrix()

  // Projection UBO
  gl.bindBuffer(gl.UNIFORM_BUFFER, projectionUBO)
  gl.bufferSubData(
    gl.UNIFORM_BUFFER,
    projectionUBOInfo.uniforms.projMatrix.offset,
    perspCamera.projectionMatrix,
    0,
  )
  gl.bufferSubData(
    gl.UNIFORM_BUFFER,
    projectionUBOInfo.uniforms.zNear.offset,
    new Float32Array([perspCamera.near]),
    0,
  )
  gl.bufferSubData(
    gl.UNIFORM_BUFFER,
    projectionUBOInfo.uniforms.zFar.offset,
    new Float32Array([perspCamera.far]),
    0,
  )

  // View UBO
  gl.bindBuffer(gl.UNIFORM_BUFFER, viewUBO)
  gl.bufferSubData(
    gl.UNIFORM_BUFFER,
    viewUBOInfo.uniforms.viewMatrix.offset,
    perspCamera.viewMatrix,
    0,
  )
  gl.bufferSubData(
    gl.UNIFORM_BUFFER,
    viewUBOInfo.uniforms.cameraPosition.offset,
    new Float32Array(perspCamera.position),
    0,
  )
  gl.bufferSubData(
    gl.UNIFORM_BUFFER,
    viewUBOInfo.uniforms.time.offset,
    new Float32Array([ts]),
    0,
  )

  // Lighing UBO and light debuggers
  gl.bindBuffer(gl.UNIFORM_BUFFER, lightingUBO)
  if (TWEAK_PARAMS.playAnim) {
    const speed = ts * 0.001
    for (let i = 0; i < POINT_LIGHT_POSITIONS_COUNT; i++) {
      const lightStep = (Math.PI * 2) / POINT_LIGHT_POSITIONS_COUNT

      const lightPos = [
        Math.cos(i * lightStep + speed) * (Math.sin(speed) * 2 + 4),
        Math.sin(i * lightStep + speed) * (Math.sin(speed) * 2 + 4),
        Math.cos(speed) * 3,
      ]
      pointLightsPositions[i][0] = lightPos[0]
      pointLightsPositions[i][1] = lightPos[1]
      pointLightsPositions[i][2] = lightPos[2]

      lightDebuggers[i].setPosition(lightPos).updateWorldMatrix()

      gl.bufferSubData(
        gl.UNIFORM_BUFFER,
        lightingUBOInfo.uniforms.pointLightPositions.offset +
          i *
            lightingUBOInfo.uniforms.pointLightPositions.size *
            Float32Array.BYTES_PER_ELEMENT,
        pointLightsPositions[i],
        0,
      )
      gl.bufferSubData(
        gl.UNIFORM_BUFFER,
        lightingUBOInfo.uniforms.pointLightColors.offset +
          i * 4 * Float32Array.BYTES_PER_ELEMENT,
        pointLightsColors[i],
        0,
      )
    }
  }
  gl.bufferSubData(
    gl.UNIFORM_BUFFER,
    lightingUBOInfo.uniforms.pointLightIntensity.offset,
    pointLightIntensityFloat32,
    0,
  )
  gl.bufferSubData(
    gl.UNIFORM_BUFFER,
    lightingUBOInfo.uniforms.diffuseEnvLightMixFactor.offset,
    diffuseLightMixFactorFloat32,
    0,
  )
  gl.bufferSubData(
    gl.UNIFORM_BUFFER,
    lightingUBOInfo.uniforms.specularEnvLightMixFactor.offset,
    specularLightMixFactorFloat32,
    0,
  )

  // Postfx ubo
  gl.bindBuffer(gl.UNIFORM_BUFFER, postFXUBO)
  gl.bufferSubData(
    gl.UNIFORM_BUFFER,
    postFXUBOInfo.uniforms.tonemappingMode.offset,
    tonemappingModeFloat32,
  )

  gl.enable(gl.DEPTH_TEST)
  gl.enable(gl.BLEND)
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)
  gl.clearColor(0.1, 0.1, 0.1, 1.0)
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1)

  gl.depthFunc(gl.LEQUAL)
  skybox.render()

  gl.depthFunc(gl.LESS)
  scene.updateWorldMatrix().render()

  // brdfConvoluteTexDebugView.render()
  // compressedTexS3TCPlaneDebugView.render()
}

var skyboxTexture
var cubemapTexture
var irradianceTexture
var prefilteredEnvironmentTexture
var brdfLutTexture

let captureFBO = null
let captureRBO = null

function convoluteCubemap(state) {
  const { width, height, imageData } = state

  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1)

  // Clean up old texture
  if (skyboxTexture) {
    gl.deleteTexture(skyboxTexture)
  }

  // Create equirectangular texture
  skyboxTexture = gl.createTexture()
  gl.bindTexture(gl.TEXTURE_2D, skyboxTexture)
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGB9_E5,
    width,
    height,
    0,
    gl.RGB,
    gl.FLOAT,
    imageData,
  )
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
  gl.bindTexture(gl.TEXTURE_2D, null)

  equirectangularToCubemap.texture = skyboxTexture

  // Create/reuse FBO and RBO
  if (!captureFBO) {
    captureFBO = gl.createFramebuffer()
    captureRBO = gl.createRenderbuffer()
  }

  gl.bindFramebuffer(gl.FRAMEBUFFER, captureFBO)
  gl.bindRenderbuffer(gl.RENDERBUFFER, captureRBO)
  gl.renderbufferStorage(
    gl.RENDERBUFFER,
    gl.DEPTH_COMPONENT16,
    SKYBOX_SIDE_SIZE,
    SKYBOX_SIDE_SIZE,
  )
  gl.framebufferRenderbuffer(
    gl.FRAMEBUFFER,
    gl.DEPTH_ATTACHMENT,
    gl.RENDERBUFFER,
    captureRBO,
  )

  // Clean up old cubemap
  if (cubemapTexture) {
    gl.deleteTexture(cubemapTexture)
  }

  // Create cubemap texture
  cubemapTexture = gl.createTexture()
  gl.bindTexture(gl.TEXTURE_CUBE_MAP, cubemapTexture)
  for (let i = 0; i < 6; i++) {
    gl.texImage2D(
      gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
      0,
      gl.RGBA16F,
      SKYBOX_SIDE_SIZE,
      SKYBOX_SIDE_SIZE,
      0,
      gl.RGBA,
      gl.HALF_FLOAT,
      null,
    )
  }
  gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_R, gl.CLAMP_TO_EDGE)
  gl.texParameteri(
    gl.TEXTURE_CUBE_MAP,
    gl.TEXTURE_MIN_FILTER,
    gl.LINEAR_MIPMAP_LINEAR,
  )
  gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR)

  // Render to each cubemap face
  gl.viewport(0, 0, SKYBOX_SIDE_SIZE, SKYBOX_SIDE_SIZE)
  for (let i = 0; i < 6; i++) {
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
      cubemapTexture,
      0,
    )
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

    captureFaceCamera.lookAt = CUBEMAP_SIDES_CAPTURE_LOOK_ATS[i]
    captureFaceCamera.upVector = CUBEMAP_SIDES_CAPTURE_UP_VECTORS[i]
    captureFaceCamera.updateViewMatrix().updateProjectionViewMatrix()

    equirectangularToCubemap.render(captureFaceCamera)
  }

  gl.generateMipmap(gl.TEXTURE_CUBE_MAP)
  gl.bindFramebuffer(gl.FRAMEBUFFER, null)
}

function convolveIrradiance() {
  cubemapToIrradiance.envTexture = cubemapTexture

  const irradianceCubeTexSize = 32

  // Clean up old texture
  if (irradianceTexture) {
    gl.deleteTexture(irradianceTexture)
  }

  // Create irradiance texture
  irradianceTexture = gl.createTexture()
  gl.bindTexture(gl.TEXTURE_CUBE_MAP, irradianceTexture)
  for (let i = 0; i < 6; i++) {
    gl.texImage2D(
      gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
      0,
      gl.RGBA16F,
      irradianceCubeTexSize,
      irradianceCubeTexSize,
      0,
      gl.RGBA,
      gl.HALF_FLOAT,
      null,
    )
  }
  gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_R, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR)

  // Reuse FBO/RBO, just resize
  gl.bindFramebuffer(gl.FRAMEBUFFER, captureFBO)
  gl.bindRenderbuffer(gl.RENDERBUFFER, captureRBO)
  gl.renderbufferStorage(
    gl.RENDERBUFFER,
    gl.DEPTH_COMPONENT16,
    irradianceCubeTexSize,
    irradianceCubeTexSize,
  )

  // Render to each face
  gl.viewport(0, 0, irradianceCubeTexSize, irradianceCubeTexSize)
  for (let i = 0; i < 6; i++) {
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
      irradianceTexture,
      0,
    )
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

    captureFaceCamera.lookAt = CUBEMAP_SIDES_CAPTURE_LOOK_ATS[i]
    captureFaceCamera.upVector = CUBEMAP_SIDES_CAPTURE_UP_VECTORS[i]
    captureFaceCamera.updateViewMatrix().updateProjectionViewMatrix()

    cubemapToIrradiance.render(captureFaceCamera)
  }

  gl.bindFramebuffer(gl.FRAMEBUFFER, null)
}

function convolvePrefilter() {
  // Clean up old texture
  if (prefilteredEnvironmentTexture) {
    gl.deleteTexture(prefilteredEnvironmentTexture)
  }

  const prefilteredEnvironmentTexSize = 128
  prefilteredEnvironmentTexture = gl.createTexture()
  gl.bindTexture(gl.TEXTURE_CUBE_MAP, prefilteredEnvironmentTexture)
  for (let i = 0; i < 6; i++) {
    gl.texImage2D(
      gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
      0,
      gl.RGBA16F,
      prefilteredEnvironmentTexSize,
      prefilteredEnvironmentTexSize,
      0,
      gl.RGBA,
      gl.HALF_FLOAT,
      null,
    )
  }
  gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_R, gl.CLAMP_TO_EDGE)
  gl.texParameteri(
    gl.TEXTURE_CUBE_MAP,
    gl.TEXTURE_MIN_FILTER,
    gl.LINEAR_MIPMAP_LINEAR,
  )
  gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
  gl.generateMipmap(gl.TEXTURE_CUBE_MAP)

  cubemapToPrefilterEnvironment.envTexture = cubemapTexture

  gl.bindFramebuffer(gl.FRAMEBUFFER, captureFBO)

  // Render to each mip level
  const maxMipLevels = 5
  for (let mip = 0; mip < maxMipLevels; mip++) {
    const mipWidth = prefilteredEnvironmentTexSize * Math.pow(0.5, mip)
    const mipHeight = prefilteredEnvironmentTexSize * Math.pow(0.5, mip)

    gl.bindRenderbuffer(gl.RENDERBUFFER, captureRBO)
    gl.renderbufferStorage(
      gl.RENDERBUFFER,
      gl.DEPTH_COMPONENT16,
      mipWidth,
      mipHeight,
    )

    gl.viewport(0, 0, mipWidth, mipHeight)

    const roughness = mip / (maxMipLevels - 1)
    cubemapToPrefilterEnvironment.updateUniform('u_roughness', roughness)

    for (let i = 0; i < 6; i++) {
      captureFaceCamera.lookAt = CUBEMAP_SIDES_CAPTURE_LOOK_ATS[i]
      captureFaceCamera.upVector = CUBEMAP_SIDES_CAPTURE_UP_VECTORS[i]
      captureFaceCamera.updateViewMatrix().updateProjectionViewMatrix()

      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
        prefilteredEnvironmentTexture,
        mip,
      )

      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
      cubemapToPrefilterEnvironment.render(captureFaceCamera)
    }
  }

  gl.bindFramebuffer(gl.FRAMEBUFFER, null)
}

function convolveBRDF() {
  // Clean up old texture
  if (brdfLutTexture) {
    gl.deleteTexture(brdfLutTexture)
  }

  brdfLutTexture = gl.createTexture()
  gl.bindTexture(gl.TEXTURE_2D, brdfLutTexture)
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGBA16F,
    BDRF_INTEGRATION_PLANE_WIDTH,
    BDRF_INTEGRATION_PLANE_HEIGHT,
    0,
    gl.RGBA,
    gl.HALF_FLOAT,
    null,
  )
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)

  gl.bindFramebuffer(gl.FRAMEBUFFER, captureFBO)
  gl.bindRenderbuffer(gl.RENDERBUFFER, captureRBO)
  gl.renderbufferStorage(
    gl.RENDERBUFFER,
    gl.DEPTH_COMPONENT16,
    BDRF_INTEGRATION_PLANE_WIDTH,
    BDRF_INTEGRATION_PLANE_HEIGHT,
  )
  gl.framebufferTexture2D(
    gl.FRAMEBUFFER,
    gl.COLOR_ATTACHMENT0,
    gl.TEXTURE_2D,
    brdfLutTexture,
    0,
  )

  gl.viewport(0, 0, BDRF_INTEGRATION_PLANE_WIDTH, BDRF_INTEGRATION_PLANE_HEIGHT)
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

  bdrfPlane.render()

  gl.bindFramebuffer(gl.FRAMEBUFFER, null)

  // Update skybox and spheres with final textures
  skybox.texture = cubemapTexture

  for (const sphere of spheres) {
    sphere.irradianceMapTexture = irradianceTexture
    sphere.prefilterMapTexture = prefilteredEnvironmentTexture
    sphere.brdfLutTexture = brdfLutTexture
  }
}

function onResize() {
  perspCamera.aspect = innerWidth / innerHeight
  perspCamera.updateProjectionMatrix()
  canvas.width = innerWidth * devicePixelRatio
  canvas.height = innerHeight * devicePixelRatio
}

function hideNoneOptionFromTweakpane() {
  const css = `
    .tp-thumbv_ovl .tp-thumbv_opt:first-of-type {
      display: none !important;
    }
    .tp-thumbv_thmb, .tp-thumbv_sthmb {
      background-size: cover !important;
    }
  `
  const element = document.createElement('style')
  element.setAttribute('type', 'text/css')

  if ('textContent' in element) {
    element.textContent = css
  } else {
    element.styleSheet.cssText = css
  }

  document.getElementsByTagName('head')[0].appendChild(element)
}

function loadHDRImage(src) {
  return new Promise((resolve) => {
    const myHDR = new HDRImage()
    myHDR.src = transformAssetSrc(src)
    myHDR.onload = () => {
      resolve(myHDR)
    }
  })
}

function transformAssetSrc(src) {
  return src
}
