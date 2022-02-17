import { Pane } from 'tweakpane'

import {
  createSphere,
  createUniformBlockInfo,
  createAndBindUBOToBase,
  PerspectiveCamera,
  CameraController,
  SceneNode,
  OrthographicCamera,
  createPlane,
} from '../lib/hwoa-rang-gl2'

import Sphere from './sphere'
import Label from './label'

import abedoMap0 from '../images/pbr/vintage/vintage-tile1_albedo-min.png'
import aoMap0 from '../images/pbr/vintage/vintage-tile1_ao-min.png'
import metallicMap0 from '../images/pbr/vintage/vintage-tile1_metallic-min.png'
import normalMap0 from '../images/pbr/vintage/vintage-tile1_normal-ogl-min.png'
import roughnessMap0 from '../images/pbr/vintage/vintage-tile1_roughness-min.png'

import abedoMap1 from '../images/pbr/rust/rustediron2_basecolor.png'
import aoMap1 from '../images/pbr/rust/rustediron2_ao.png'
import metallicMap1 from '../images/pbr/rust/rustediron2_metallic.png'
import normalMap1 from '../images/pbr/rust/rustediron2_normal.png'
import roughnessMap1 from '../images/pbr/rust/rustediron2_roughness.png'

import abedoMap2 from '../images/pbr/grass/leafy-grass2-albedo-min.png'
import aoMap2 from '../images/pbr/grass/leafy-grass2-ao-min.png'
import metallicMap2 from '../images/pbr/grass/leafy-grass2-metallic-min.png'
import normalMap2 from '../images/pbr/grass/leafy-grass2-normal-ogl-min.png'
import roughnessMap2 from '../images/pbr/grass/leafy-grass2-roughness-min.png'

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
  abedoMap0,
  normalMap0,
  metallicMap0,
  roughnessMap0,
  aoMap0,
]
const PBR_TEXTURES_1 = [
  abedoMap1,
  normalMap1,
  metallicMap1,
  roughnessMap1,
  aoMap1,
]
const PBR_TEXTURES_2 = [
  abedoMap2,
  normalMap2,
  metallicMap2,
  roughnessMap2,
  aoMap2,
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
const labelGeometry = createPlane({
  width: 5,
  height: 5 / 8,
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

for (let i = 0; i < POINT_LIGHT_POSITIONS_COUNT; i++) {
  pointLightsPositions.push(new Float32Array(3))

  pointLightsColors.push(new Float32Array([1, 1, 1]))
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
    PBR_TEXTURES_0.map((imageURL, i) =>
      loadGLTextureFromImage(imageURL, i === 0 ? gl.SRGBA : gl.RGB),
    ),
  ),
  Promise.all(
    PBR_TEXTURES_1.map((imageURL, i) =>
      loadGLTextureFromImage(imageURL, i === 0 ? gl.SRGBA : gl.RGB),
    ),
  ),
  Promise.all(
    PBR_TEXTURES_2.map((imageURL, i) =>
      loadGLTextureFromImage(imageURL, i === 0 ? gl.SRGBA : gl.RGB),
    ),
  ),
]).then((texturePacks) => {
  let texIdx = 0
  spheres.forEach((sphere, i) => {
    sphere.textures = texturePacks[texIdx]
    texIdx++
    if (texIdx === 3) {
      texIdx = 0
    }
  })
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

  // Lighing UBO
  gl.bindBuffer(gl.UNIFORM_BUFFER, lightingUBO)
  const speed = ts * 0.001
  for (let i = 0; i < POINT_LIGHT_POSITIONS_COUNT; i++) {
    const lightStep = (Math.PI * 2) / POINT_LIGHT_POSITIONS_COUNT
    pointLightsPositions[i][0] = Math.cos(i * lightStep + speed) * 3
    pointLightsPositions[i][1] = Math.sin(i * lightStep + speed) * 3
    pointLightsPositions[i][2] = 5
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
