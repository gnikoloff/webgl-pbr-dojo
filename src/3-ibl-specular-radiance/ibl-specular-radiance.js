// import { Spector } from 'spectorjs'
import { Pane } from 'tweakpane'
import * as TweakpaneThumbnailListPlugin from 'tweakpane-plugin-thumbnail-list'

import HDRImage from '../lib/hdr-png'

import {
  createSphere,
  createUniformBlockInfo,
  createAndBindUBOToBase,
  PerspectiveCamera,
  CameraController,
  SceneNode,
  OrthographicCamera,
  createPlane,
  createBox,
} from '../lib/hwoa-rang-gl2'

import loadCorrectCompressedTexture from '../shared/load-correct-compressed-texture'

import Sphere from './sphere'
import Label from './label'
import Skybox from './skybox'

import CubemapConverter from './cubemap-converter'
import BRDFIntegrationPlane from './bdrf-integration-plane'

import LightDebug from '../shared/light-debug'
import PlaneDebug from '../shared/plane-debug'

// import ToHalfFloatWebWorker from '../shared/to-half-float-web-worker?worker'

// IBL environment
import hdrImageSrc0 from '../images/environment/MonValley_A_LookoutPoint_2k.hdr'
import skyboxImageSrc0 from '../images/environment/MonValley_A_LookoutPoint_Thumb.jpg'
import hdrImageSrc1 from '../images/environment/Theatre-Center_2k.hdr'
import skyboxImageSrc1 from '../images/environment/Theatre-Center_Thumb.jpg'
import hdrImageSrc2 from '../images/environment/Tokyo_BigSight_3k.hdr'
import skyboxImageSrc2 from '../images/environment/Tokyo_BigSight_thumb.jpg'

// PBR compressed textures - S3TC, ASTC, ETC1, ETC2, PVRTC
// PBR 1
// albedo
import albedoMap0S3TC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-albedo_s3tc.ktx'
import albedoMap0ASTC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-albedo_astc.ktx'
import albedoMap0ETC1 from '../images/pbr/worn-shiny-metal/worn-shiny-metal-albedo_etc1.ktx'
import albedoMap0ETC2 from '../images/pbr/worn-shiny-metal/worn-shiny-metal-albedo_etc2.ktx'
import albedoMap0PVRTC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-albedo_pvrtc.ktx'
// ao
import aoMap0S3TC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-ao_s3tc.ktx'
import aoMap0ASTC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-ao_astc.ktx'
import aoMap0ETC1 from '../images/pbr/worn-shiny-metal/worn-shiny-metal-ao_etc1.ktx'
import aoMap0ETC2 from '../images/pbr/worn-shiny-metal/worn-shiny-metal-ao_etc2.ktx'
import aoMap0PVRTC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-ao_pvrtc.ktx'
// normal
import normalMap0S3TC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Normal-ogl_s3tc.ktx'
import normalMap0ASTC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Normal-ogl_astc.ktx'
import normalMap0ETC1 from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Normal-ogl_etc1.ktx'
import normalMap0ETC2 from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Normal-ogl_etc2.ktx'
import normalMap0PVRTC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Normal-ogl_pvrtc.ktx'
// metallic
import metallicMap0S3TC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Metallic_s3tc.ktx'
import metallicMap0ASTC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Metallic_astc.ktx'
import metallicMap0ETC1 from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Metallic_etc1.ktx'
import metallicMap0ETC2 from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Metallic_etc2.ktx'
import metallicMap0PVRTC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Metallic_pvrtc.ktx'
// roughness
import roughnessMap0S3TC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Roughness_s3tc.ktx'
import roughnessMap0ASTC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Roughness_astc.ktx'
import roughnessMap0ETC1 from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Roughness_etc1.ktx'
import roughnessMap0ETC2 from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Roughness_etc2.ktx'
import roughnessMap0PVRTC from '../images/pbr/worn-shiny-metal/worn-shiny-metal-Roughness_pvrtc.ktx'

// PBR 2
// albedo
import albedoMap1S3TC from '../images/pbr/rust/rustediron2_basecolor_s3tc.ktx'
import albedoMap1ASTC from '../images/pbr/rust/rustediron2_basecolor_astc.ktx'
import albedoMap1ETC1 from '../images/pbr/rust/rustediron2_basecolor_etc1.ktx'
import albedoMap1ETC2 from '../images/pbr/rust/rustediron2_basecolor_etc2.ktx'
import albedoMap1PVRTC from '../images/pbr/rust/rustediron2_basecolor_pvrtc.ktx'
// ao
import aoMap1S3TC from '../images/pbr/rust/rustediron2_ao_s3tc.ktx'
import aoMap1ASTC from '../images/pbr/rust/rustediron2_ao_astc.ktx'
import aoMap1ETC1 from '../images/pbr/rust/rustediron2_ao_etc1.ktx'
import aoMap1ETC2 from '../images/pbr/rust/rustediron2_ao_etc2.ktx'
import aoMap1PVRTC from '../images/pbr/rust/rustediron2_ao_pvrtc.ktx'
// normal
import normalMap1S3TC from '../images/pbr/rust/rustediron2_normal_s3tc.ktx'
import normalMap1ASTC from '../images/pbr/rust/rustediron2_normal_astc.ktx'
import normalMap1ETC1 from '../images/pbr/rust/rustediron2_normal_etc1.ktx'
import normalMap1ETC2 from '../images/pbr/rust/rustediron2_normal_etc2.ktx'
import normalMap1PVRTC from '../images/pbr/rust/rustediron2_normal_pvrtc.ktx'
// metallic
import metallicMap1S3TC from '../images/pbr/rust/rustediron2_metallic_s3tc.ktx'
import metallicMap1ASTC from '../images/pbr/rust/rustediron2_metallic_astc.ktx'
import metallicMap1ETC1 from '../images/pbr/rust/rustediron2_metallic_etc1.ktx'
import metallicMap1ETC2 from '../images/pbr/rust/rustediron2_metallic_etc2.ktx'
import metallicMap1PVRTC from '../images/pbr/rust/rustediron2_metallic_pvrtc.ktx'
// roughness
import roughnessMap1S3TC from '../images/pbr/rust/rustediron2_roughness_s3tc.ktx'
import roughnessMap1ASTC from '../images/pbr/rust/rustediron2_roughness_astc.ktx'
import roughnessMap1ETC1 from '../images/pbr/rust/rustediron2_roughness_etc1.ktx'
import roughnessMap1ETC2 from '../images/pbr/rust/rustediron2_roughness_etc2.ktx'
import roughnessMap1PVRTC from '../images/pbr/rust/rustediron2_roughness_pvrtc.ktx'

// PBR 3
// albedo
import albedoMap2S3TC from '../images/pbr/grass/leafy-grass2-albedo_s3tc.ktx'
import albedoMap2ASTC from '../images/pbr/grass/leafy-grass2-albedo_astc.ktx'
import albedoMap2ETC1 from '../images/pbr/grass/leafy-grass2-albedo_etc1.ktx'
import albedoMap2ETC2 from '../images/pbr/grass/leafy-grass2-albedo_etc2.ktx'
import albedoMap2PVRTC from '../images/pbr/grass/leafy-grass2-albedo_pvrtc.ktx'
// ao
import aoMap2S3TC from '../images/pbr/grass/leafy-grass2-ao_s3tc.ktx'
import aoMap2ASTC from '../images/pbr/grass/leafy-grass2-ao_astc.ktx'
import aoMap2ETC1 from '../images/pbr/grass/leafy-grass2-ao_etc1.ktx'
import aoMap2ETC2 from '../images/pbr/grass/leafy-grass2-ao_etc2.ktx'
import aoMap2PVRTC from '../images/pbr/grass/leafy-grass2-ao_pvrtc.ktx'
// normal
import normalMap2S3TC from '../images/pbr/grass/leafy-grass2-normal-ogl_s3tc.ktx'
import normalMap2ASTC from '../images/pbr/grass/leafy-grass2-normal-ogl_astc.ktx'
import normalMap2ETC1 from '../images/pbr/grass/leafy-grass2-normal-ogl_etc1.ktx'
import normalMap2ETC2 from '../images/pbr/grass/leafy-grass2-normal-ogl_etc2.ktx'
import normalMap2PVRTC from '../images/pbr/grass/leafy-grass2-normal-ogl_pvrtc.ktx'
// metallic
import metallicMap2S3TC from '../images/pbr/grass/leafy-grass2-metallic_s3tc.ktx'
import metallicMap2ASTC from '../images/pbr/grass/leafy-grass2-metallic_astc.ktx'
import metallicMap2ETC1 from '../images/pbr/grass/leafy-grass2-metallic_etc1.ktx'
import metallicMap2ETC2 from '../images/pbr/grass/leafy-grass2-metallic_etc2.ktx'
import metallicMap2PVRTC from '../images/pbr/grass/leafy-grass2-metallic_pvrtc.ktx'
// roughness
import roughnessMap2S3TC from '../images/pbr/grass/leafy-grass2-roughness_s3tc.ktx'
import roughnessMap2ASTC from '../images/pbr/grass/leafy-grass2-roughness_astc.ktx'
import roughnessMap2ETC1 from '../images/pbr/grass/leafy-grass2-roughness_etc1.ktx'
import roughnessMap2ETC2 from '../images/pbr/grass/leafy-grass2-roughness_etc2.ktx'
import roughnessMap2PVRTC from '../images/pbr/grass/leafy-grass2-roughness_pvrtc.ktx'

// shaders
import UBER_VERTEX_SHADER_SRC from './shaders/uber.vert'
import SKYBOX_FRAGMENT_SHADER_SRC from './shaders/skybox.frag'
import EQIORECTANGULAR_TO_CUBEMAP_FRAGMENT_SHADER_SRC from './shaders/equirectangular-to-cubemap.frag'
import SPHERE_FRAGMENT_SHADER_SRC from './shaders/sphere.frag'
import LABEL_FRAGMENT_SHADER_SRC from './shaders/label.frag'
import CONVOLUTE_IRRADIANCE_MAP_FRAGMENT_SHADER_SRC from './shaders/convolute-irradiance-map.frag'
import CONVOLUTE_PRE_FILTERED_ENVIRONMENT_MAP_SHADER_SRC from './shaders/convolute-pre-filter-environment-map.frag'
import CONVOLUTE_BDRF_FRAGMENT_SHADER_SRC from './shaders/convolute-bdrf-map.frag'

const SPHERE_GRID_X_COUNT = 7
const SPHERE_GRID_Y_COUNT = 7
const SPHERE_GRID_WIDTH = 10
const SPHERE_GRID_HEIGHT = 10
const POINT_LIGHT_POSITIONS_COUNT = 4
const BDRF_INTEGRATION_PLANE_WIDTH = 512
const BDRF_INTEGRATION_PLANE_HEIGHT = 512
const SKYBOX_SIDE_SIZE = 1024

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

// prettier-ignore
const SKYBOX_IMAGE_SOURCES = new Map([
  ['mon-valley', hdrImageSrc0],
  ['theatre', hdrImageSrc1],
  ['tokyo', hdrImageSrc2],
])

const TWEAK_PARAMS = {
  useEnvDiffuseLight: true,
  useEnvSpecularLight: true,
  image: 'mon-valley',
}

// const spector = new Spector()
// spector.displayUI()

const tonemappingModeFloat32 = new Float32Array([2])
const pointLightIntensityFloat32 = new Float32Array([16])
const diffuseLightMixFactorFloat32 = new Float32Array([1]) // image diffuse light on by default
const specularLightMixFactorFloat32 = new Float32Array([1]) // image specular light on by default

const pane = new Pane()
pane.registerPlugin(TweakpaneThumbnailListPlugin)
hideNoneOptionFromTweakpane()
pane.element.parentNode.style.setProperty('width', '400px')
pane
  .addBlade({
    view: 'list',
    label: 'tone mapping mode',
    options: TONEMAPPING_MODES.map((text) => ({ text, value: text })),
    value: TONEMAPPING_MODES[2],
  })
  .on('change', ({ value }) => {
    tonemappingModeFloat32[0] = TONEMAPPING_MODES.indexOf(value)
  })
pane
  .addBlade({
    view: 'slider',
    label: 'point light luminance',
    min: 0,
    max: 50,
    value: pointLightIntensityFloat32[0],
  })
  .on('change', ({ value }) => {
    pointLightIntensityFloat32[0] = value
  })
pane
  .addInput(TWEAK_PARAMS, 'useEnvDiffuseLight', {
    label: 'use environment diffuse light',
  })
  .on('change', ({ value }) => {
    diffuseLightMixFactorFloat32[0] = value ? 1 : 0
  })
pane
  .addInput(TWEAK_PARAMS, 'useEnvSpecularLight', {
    label: 'use environment specular light',
  })
  .on('change', ({ value }) => {
    specularLightMixFactorFloat32[0] = value
  })
pane
  .addInput(TWEAK_PARAMS, 'image', {
    label: 'environment image',
    view: 'thumbnail-list',
    options: [
      {
        text: 'MonValley Lookout',
        value: 'mon-valley',
        src: transformAssetSrc(skyboxImageSrc0),
      },
      {
        text: 'Theatre Center',
        value: 'theatre',
        src: transformAssetSrc(skyboxImageSrc1),
      },
      {
        text: 'Tokyo BigSight',
        value: 'tokyo',
        src: transformAssetSrc(skyboxImageSrc2),
      },
    ],
  })
  .on('change', ({ value: { value } }) => {
    const myHDR = new HDRImage()
    myHDR.onload = () => {
      convoluteHDREnvironment([
        hdrTexture.width,
        hdrTexture.height,
        hdrTexture.dataFloat,
      ])
    }
    myHDR.src = transformAssetSrc(SKYBOX_IMAGE_SOURCES.get(value))
  })

// const toHalfWorker = new ToHalfFloatWebWorker()

const canvas = document.createElement('canvas')
document.body.appendChild(canvas)

const gl = canvas.getContext('webgl2')

const orthoCamera = new OrthographicCamera(
  -innerWidth / 2,
  innerWidth / 2,
  innerHeight / 2,
  -innerHeight / 2,
  0,
  2,
)
orthoCamera.position = [0, 0, 1]
orthoCamera.lookAt = [0, 0, 0]
orthoCamera.updateProjectionViewMatrix()

const perspCamera = new PerspectiveCamera(
  (45 * Math.PI) / 180,
  innerWidth / innerHeight,
  0.1,
  100,
)
perspCamera.position = [10.84, -0.17, 8.98]
perspCamera.lookAt = [0, 0, 0]
perspCamera.updateProjectionMatrix()

new CameraController(perspCamera, canvas, false)

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

    const metallic = y / SPHERE_GRID_Y_COUNT //Easing.quad_In(y / SPHERE_GRID_Y_COUNT)
    sphere.setUniform('u_metallic', {
      type: gl.FLOAT,
      value: metallic,
    })

    const roughness = 1 / SPHERE_GRID_X_COUNT + x / SPHERE_GRID_X_COUNT //Easing.quad_In(x / SPHERE_GRID_X_COUNT)
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

for (let i = 0; i < POINT_LIGHT_POSITIONS_COUNT; i++) {
  pointLightsPositions.push(new Float32Array(3))

  const pointLight = [Math.random(), Math.random(), Math.random()]
  // const pointLight = [1, 1, 1]

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

loadHDRImage(hdrImageSrc2).then((hdrTexture) => {
  // toHalfWorker.postMessage(
  //   [hdrTexture.width, hdrTexture.height, hdrTexture.dataFloat],
  //   [hdrTexture.dataFloat.buffer],
  // )
  convoluteHDREnvironment([
    hdrTexture.width,
    hdrTexture.height,
    hdrTexture.dataFloat,
  ])
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

function drawFrame(ts) {
  requestAnimationFrame(drawFrame)

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
  const speed = ts * 0.001
  for (let i = 0; i < POINT_LIGHT_POSITIONS_COUNT; i++) {
    const lightStep = (Math.PI * 2) / POINT_LIGHT_POSITIONS_COUNT

    const lightPos = [
      Math.cos(i * lightStep + speed) * (Math.sin(speed) * 2 + 4),
      Math.sin(i * lightStep + speed) * (Math.sin(speed) * 2 + 4),
      Math.cos(speed) * 4,
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

  brdfConvoluteTexDebugView.render()
  // compressedTexS3TCPlaneDebugView.render()
}

function convoluteHDREnvironment([width, height, imageData]) {
  const skyboxTexture = gl.createTexture()
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

  brdfConvoluteTexDebugView.texture = skyboxTexture

  // at this point the equirectangular texture is mapped onto a unit cube
  equirectangularToCubemap.texture = skyboxTexture

  // our framebuffer to hold our 6 equirectangularToCubemap textures
  const captureCubeSidesFramebuffer = gl.createFramebuffer()

  gl.bindFramebuffer(gl.FRAMEBUFFER, captureCubeSidesFramebuffer)
  // attach depth buffer
  const depthBuffer = gl.createRenderbuffer()
  gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer)
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
    depthBuffer,
  )

  const cubemapTexture = gl.createTexture()
  gl.bindTexture(gl.TEXTURE_CUBE_MAP, cubemapTexture)
  for (let i = 0; i < 6; i++) {
    const side = gl.TEXTURE_CUBE_MAP_POSITIVE_X + i
    // important - store each face with 16bit floating values to preserve HDR
    gl.texImage2D(
      side,
      0,
      gl.RGBA16F,
      SKYBOX_SIDE_SIZE,
      SKYBOX_SIDE_SIZE,
      0,
      gl.RGBA,
      gl.HALF_FLOAT,
      null,
    )
    // TODO: could we do proper mipmapping here and use different wrapping and min/mag filtering?
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

  // lets capture the equirectangular 2D texture onto the equirectangularToCubemap faces

  gl.bindFramebuffer(gl.FRAMEBUFFER, captureCubeSidesFramebuffer)
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

    // look at each correct face with our camera in the center of the world
    captureFaceCamera.lookAt = CUBEMAP_SIDES_CAPTURE_LOOK_ATS[i]
    captureFaceCamera.upVector = CUBEMAP_SIDES_CAPTURE_UP_VECTORS[i]
    captureFaceCamera.updateViewMatrix().updateProjectionViewMatrix()

    // render to appropriate cube texture with current camera lookAt orientation
    equirectangularToCubemap.render(captureFaceCamera)
  }
  // we need to generate mipmaps and use trilinear filtering on the environment map
  // to remove bright dots in the pre-filter convolution
  // see https://learnopengl.com/PBR/IBL/Specular-IBL
  gl.generateMipmap(gl.TEXTURE_CUBE_MAP)

  // After generating the HDR cubemap, we need to convolute it to a 32x32 irradiance map
  cubemapToIrradiance.envTexture = cubemapTexture

  const irradianceCubeTexSize = 32
  const irradianceTexture = gl.createTexture()
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

  // gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer)
  gl.renderbufferStorage(
    gl.RENDERBUFFER,
    gl.DEPTH_COMPONENT16,
    irradianceCubeTexSize,
    irradianceCubeTexSize,
  )

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

  // pre-filtering an environment map is quite similar to how we convoluted an irradiance map
  // the difference being that we now account for roughness and store sequentially rougher
  // reflections in the pre-filtered map's mip levels.
  const prefilteredEnvironmentTexture = gl.createTexture()
  const prefilteredEnvironmentTexSize = 128
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
  // important - we need to generate mipmaps. Each mip level will store a blurrier prefiltered map
  // for each material roughness level
  gl.generateMipmap(gl.TEXTURE_CUBE_MAP)

  cubemapToPrefilterEnvironment.envTexture = cubemapTexture
  // we will render to each mip level of the prefilteredEnvironmentTexture
  // with varying rougness
  // roughness: 0.0  = mip level 0
  // roughness: 0.25 = mip level 1
  // roughness: 0.5  = mip level 2
  // roughness: 0.75 = mip level 3
  // roughness: 1.0  = mip level 4
  const maxMipLevels = 5
  for (let mip = 0; mip < maxMipLevels; mip++) {
    const mipWidth = prefilteredEnvironmentTexSize * Math.pow(0.5, mip)
    const mipHeight = prefilteredEnvironmentTexSize * Math.pow(0.5, mip)
    // gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer)
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

  // create the BRDF convolution into a 2d 512x512 texture
  // note that we use a 16-bit precision floating format as recommended by Epic Games
  const brdfLutTexture = gl.createTexture()
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

  // gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer)
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

  // brdfConvoluteTexDebugView.texture = brdfLutTexture

  // gl.deleteTexture(skybox.texture)
  skybox.texture = cubemapTexture

  for (const sphere of spheres) {
    // gl.deleteTexture(sphere.irradianceTexture)
    sphere.irradianceMapTexture = irradianceTexture
    sphere.prefilterMapTexture = prefilteredEnvironmentTexture
    sphere.brdfLutTexture = brdfLutTexture
  }

  // clean up
  // gl.deleteTexture(skyboxTexture)
  // gl.deleteFramebuffer(captureCubeSidesFramebuffer)
  // gl.deleteRenderbuffer(depthBuffer)
}

function onResize() {
  perspCamera.aspect = innerWidth / innerHeight
  perspCamera.updateProjectionMatrix()
  canvas.width = innerWidth * devicePixelRatio
  canvas.height = innerHeight * devicePixelRatio
  canvas.style.setProperty('width', `${innerWidth}px`)
  canvas.style.setProperty('height', `${innerHeight}px`)
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

function loadGLTextureFromImage(imageSrc, format = gl.RGB) {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = () => {
      const texture = gl.createTexture()
      gl.bindTexture(gl.TEXTURE_2D, texture)
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        format,
        image.naturalWidth,
        image.naturalHeight,
        0,
        format,
        gl.UNSIGNED_BYTE,
        image,
      )
      gl.generateMipmap(gl.TEXTURE_2D)

      gl.bindTexture(gl.TEXTURE_2D, null)
      resolve(texture)
    }
    image.onerror = (err) => reject(err)
    image.src = transformAssetSrc(imageSrc)
  })
}

function transformAssetSrc(src) {
  return window.BASE_URL ? `${window.BASE_URL}/assets/${src}` : src
}
