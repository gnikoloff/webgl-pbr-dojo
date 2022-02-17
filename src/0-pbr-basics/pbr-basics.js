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
import LightDebug from '../shared/light-debug'

const SPHERE_GRID_X_COUNT = 7
const SPHERE_GRID_Y_COUNT = 7
const SPHERE_GRID_WIDTH = 10
const SPHERE_GRID_HEIGHT = 10
const POINT_LIGHT_POSITIONS_COUNT = 4
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
const tonemappingModeFloat32 = new Float32Array([2])
const pointLightIntensityFloat32 = new Float32Array([40])

const pane = new Pane()
pane.element.parentNode.style.setProperty('width', '340px')
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
    value: 20,
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
  }
}

const roughnessLabel = new Label(gl, 'roughness', labelGeometry)
roughnessLabel.setPosition([
  -SPHERE_GRID_WIDTH / 2 + labelGeometry.width / 2,
  -SPHERE_GRID_HEIGHT / 2 - labelGeometry.height,
  0,
])
scene.addChild(roughnessLabel)

const metallicLabel = new Label(gl, 'metallic', labelGeometry)
metallicLabel
  .setPosition([
    -SPHERE_GRID_WIDTH / 2 - labelGeometry.height,
    -SPHERE_GRID_HEIGHT / 2 + labelGeometry.width / 2,
    0,
  ])
  .setRotation([0, 0, Math.PI * 0.5])
scene.addChild(metallicLabel)

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

const pointLightsPositions = []
const pointLightsColors = []
const debugLights = []

for (let i = 0; i < POINT_LIGHT_POSITIONS_COUNT; i++) {
  pointLightsPositions.push(new Float32Array(3))

  const pointLight = [Math.random(), Math.random(), Math.random()]

  pointLightsColors.push(new Float32Array(pointLight))

  const debugLight = new LightDebug(gl)
  debugLight.color = [...pointLight, 1]
  scene.addChild(debugLight)
  debugLights.push(debugLight)
}

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
      Math.cos(i * lightStep + speed) * 10,
      Math.sin(i * lightStep + speed) * 10,
      Math.cos(speed) + 2 + 4,
    ]

    pointLightsPositions[i][0] = lightPos[0]
    pointLightsPositions[i][1] = lightPos[1]
    pointLightsPositions[i][2] = lightPos[2]

    debugLights[i].setPosition(lightPos).updateWorldMatrix()

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

  // gl.bindFramebuffer(gl.FRAMEBUFFER, null)

  // gl.activeTexture(gl.TEXTURE0)
  // gl.bindTexture(gl.TEXTURE_2D, hdrTexture)
  // fsQuad.render()

  // gl.bindTexture(gl.TEXTURE_2D, null)
}

function onResize() {
  perspCamera.aspect = innerWidth / innerHeight
  perspCamera.updateProjectionMatrix()
  canvas.width = innerWidth * devicePixelRatio
  canvas.height = innerHeight * devicePixelRatio
  canvas.style.setProperty('width', `${innerWidth}px`)
  canvas.style.setProperty('height', `${innerHeight}px`)
}
