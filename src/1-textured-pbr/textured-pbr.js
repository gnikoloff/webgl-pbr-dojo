import { Pane } from 'tweakpane'

import {
  createSphere,
  createUniformBlockInfo,
  createAndBindUBOToBase,
  PerspectiveCamera,
  CameraController,
  SceneNode,
  OrthographicCamera,
} from '../lib/hwoa-rang-gl2'

import loadCorrectCompressedTexture from '../shared/load-correct-compressed-texture'

import Sphere from './sphere'
import LightDebug from '../shared/light-debug'

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

const SPHERE_GRID_X_COUNT = 7
const SPHERE_GRID_Y_COUNT = 7
const SPHERE_GRID_WIDTH = 10
const SPHERE_GRID_HEIGHT = 10
const POINT_LIGHT_POSITIONS_COUNT = 1
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
const tonemappingModeFloat32 = new Float32Array([1])
const pointLightIntensityFloat32 = new Float32Array([48])

const pane = new Pane()
pane.element.parentNode.style.setProperty('width', '340px')
pane
  .addBlade({
    view: 'list',
    label: 'tone mapping mode',
    options: TONEMAPPING_MODES.map((text) => ({ text, value: text })),
    value: TONEMAPPING_MODES[1],
  })
  .on('change', ({ value }) => {
    tonemappingModeFloat32[0] = TONEMAPPING_MODES.indexOf(value)
  })
pane
  .addBlade({
    view: 'slider',
    label: 'point light luminance',
    min: 0,
    max: 500,
    value: pointLightIntensityFloat32[0],
  })
  .on('change', ({ value }) => {
    pointLightIntensityFloat32[0] = value
  })

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
perspCamera.position = [5.43, 0.2, 14.06]
perspCamera.lookAt = [0, 0, 0]
perspCamera.updateProjectionMatrix()

new CameraController(perspCamera, canvas, false)

const sphereGeometry = createSphere({
  radius: 0.5,
  widthSegments: 32,
  heightSegments: 32,
})

const scene = new SceneNode()
const spheres = []

const sphereDefines = {
  POINT_LIGHTS_COUNT: POINT_LIGHT_POSITIONS_COUNT.toString(),
}

const gridStepX = SPHERE_GRID_WIDTH / SPHERE_GRID_X_COUNT
const gridStepY = SPHERE_GRID_HEIGHT / SPHERE_GRID_Y_COUNT
for (let y = 0; y < SPHERE_GRID_Y_COUNT; y++) {
  for (let x = 0; x < SPHERE_GRID_X_COUNT; x++) {
    const sphere = new Sphere(gl, sphereGeometry, sphereDefines)
    sphere.setPosition([
      x * gridStepX - SPHERE_GRID_WIDTH / 2 + sphereGeometry.radius,
      y * gridStepY - SPHERE_GRID_HEIGHT / 2 + sphereGeometry.radius,
      0,
    ])
    // .setRotation([
    //   Math.random() * Math.PI * 2,
    //   Math.random() * Math.PI * 2,
    //   Math.random() * Math.PI * 2,
    // ])

    sphere.setUniform('u_albedoMap', {
      type: gl.INT,
      value: 0,
    })
    sphere.setUniform('u_normalMap', {
      type: gl.INT,
      value: 1,
    })
    sphere.setUniform('u_metallicMap', {
      type: gl.INT,
      value: 2,
    })
    sphere.setUniform('u_roughnessMap', {
      type: gl.INT,
      value: 3,
    })
    sphere.setUniform('u_aoMap', {
      type: gl.INT,
      value: 4,
    })

    scene.addChild(sphere)
    spheres.push(sphere)
  }
}

// const roughnessLabel = new Label(gl, 'roughness', labelGeometry)
// roughnessLabel.setPosition([
//   -SPHERE_GRID_WIDTH / 2 + labelGeometry.width / 2,
//   -SPHERE_GRID_HEIGHT / 2 - labelGeometry.height,
//   0,
// ])
// scene.addChild(roughnessLabel)

// const metallicLabel = new Label(gl, 'metallic', labelGeometry)
// metallicLabel
//   .setPosition([
//     -SPHERE_GRID_WIDTH / 2 - labelGeometry.height,
//     -SPHERE_GRID_HEIGHT / 2 + labelGeometry.width / 2,
//     0,
//   ])
//   .setRotation([0, 0, Math.PI * 0.5])
// scene.addChild(metallicLabel)

// sphere.setPosition([1, 1, 0]).updateWorldMatrix()

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
    'tonemappingMode',
  ],
)

const lightingUBO = createAndBindUBOToBase(gl, lightingUBOInfo.blockSize, 2)
console.log(lightingUBOInfo)

const pointLightsPositions = []
const pointLightsColors = []
const debugLights = []

for (let i = 0; i < POINT_LIGHT_POSITIONS_COUNT; i++) {
  pointLightsPositions.push(new Float32Array(3))

  const pointLight = [1, 1, 1]
  pointLightsColors.push(new Float32Array(pointLight))

  const debugLight = new LightDebug(gl)
  debugLight.color = [...pointLight, 1]
  scene.addChild(debugLight)
  debugLights.push(debugLight)
}

const $loader = document.createElement('div')
$loader.setAttribute(
  'style',
  `
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  color: white;
  font-family: monospace;
`,
)
$loader.textContent = 'Loading assets...'
document.body.appendChild($loader)

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
]).then((texturePacks) => {
  let texIdx = 0
  for (const sphere of spheres) {
    sphere.textures = texturePacks[texIdx]
    texIdx++
    if (texIdx === 3) {
      texIdx = 0
    }
  }
  $loader.parentNode.removeChild($loader)
})
// .then((textures) => {

// })

// .then((textures) => {
//   spheres.forEach((sphere, i) => {
//     if (i % 2 !== 0) {
//       sphere.textures = textures
//     }
//   })
// })

// .then((textures) => {
//   spheres.forEach((sphere, i) => {
//     if (i % 3 === 0) {
//       sphere.textures = textures
//     }
//   })
// })

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
      Math.cos(i * lightStep + speed) * 5,
      Math.sin(i * lightStep + speed) * 5,
      5,
    ]
    pointLightsPositions[i][0] = lightPos[0]
    pointLightsPositions[i][1] = lightPos[1]
    pointLightsPositions[i][2] = lightPos[2]

    debugLights[i].setPosition(lightPos).updateWorldMatrix()

    gl.bufferSubData(
      gl.UNIFORM_BUFFER,
      lightingUBOInfo.uniforms.pointLightPositions.offset +
        i * 4 * Float32Array.BYTES_PER_ELEMENT,
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
    lightingUBOInfo.uniforms.tonemappingMode.offset,
    tonemappingModeFloat32,
    0,
  )
  gl.bufferSubData(
    gl.UNIFORM_BUFFER,
    lightingUBOInfo.uniforms.pointLightIntensity.offset,
    pointLightIntensityFloat32,
    0,
  )

  gl.enable(gl.DEPTH_TEST)
  gl.enable(gl.BLEND)
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)
  gl.clearColor(0.1, 0.1, 0.1, 1.0)
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

  scene.updateWorldMatrix().render()
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
    image.src = window.BASE_URL
      ? `${window.BASE_URL}assets${imageSrc}`
      : imageSrc
  })
}

function onResize() {
  perspCamera.aspect = innerWidth / innerHeight
  perspCamera.updateProjectionMatrix()
  canvas.width = innerWidth * devicePixelRatio
  canvas.height = innerHeight * devicePixelRatio
  canvas.style.setProperty('width', `${innerWidth}px`)
  canvas.style.setProperty('height', `${innerHeight}px`)
}
