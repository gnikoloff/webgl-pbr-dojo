import {
  createSphere,
  createUniformBlockInfo,
  createAndBindUBOToBase,
  PerspectiveCamera,
  CameraController,
  SceneNode,
} from './lib/hwoa-rang-gl2'

const SPHERE_GRID_X_COUNT = 7
const SPHERE_GRID_Y_COUNT = 7
const SPHERE_GRID_WIDTH = 10
const SPHERE_GRID_HEIGHT = 10

import Sphere from './sphere'

const canvas = document.createElement('canvas')
document.body.appendChild(canvas)

const gl = canvas.getContext('webgl2')

const camera = new PerspectiveCamera(
  (45 * Math.PI) / 180,
  innerWidth / innerHeight,
  0.1,
  100,
)
camera.position = [5.43, 0.2, 14.06]
camera.lookAt = [0, 0, 0]
camera.updateProjectionMatrix()

const orbitController = new CameraController(camera, canvas, false)

const sphereGeometry = createSphere({
  radius: 0.5,
  widthSegments: 32,
  heightSegments: 32,
})
console.log(sphereGeometry)

const scene = new SceneNode()

const gridStepX = SPHERE_GRID_WIDTH / SPHERE_GRID_X_COUNT
const gridStepY = SPHERE_GRID_HEIGHT / SPHERE_GRID_Y_COUNT
for (let y = 0; y < SPHERE_GRID_Y_COUNT; y++) {
  for (let x = 0; x < SPHERE_GRID_X_COUNT; x++) {
    const sphere = new Sphere(gl, sphereGeometry)
    sphere.setPosition([
      x * gridStepX - SPHERE_GRID_WIDTH / 2 + sphereGeometry.radius,
      y * gridStepY - SPHERE_GRID_HEIGHT / 2 + sphereGeometry.radius,
      0,
    ])
    scene.addChild(sphere)
  }
}

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

requestAnimationFrame(drawFrame)
onResize()
window.addEventListener('resize', onResize)

function drawFrame(ts) {
  requestAnimationFrame(drawFrame)

  camera.updateViewMatrix()

  // Projection UBO
  gl.bindBuffer(gl.UNIFORM_BUFFER, projectionUBO)
  gl.bufferSubData(
    gl.UNIFORM_BUFFER,
    projectionUBOInfo.uniforms.projMatrix.offset,
    camera.projectionMatrix,
    0,
  )
  gl.bufferSubData(
    gl.UNIFORM_BUFFER,
    projectionUBOInfo.uniforms.zNear.offset,
    new Float32Array([camera.near]),
    0,
  )
  gl.bufferSubData(
    gl.UNIFORM_BUFFER,
    projectionUBOInfo.uniforms.zFar.offset,
    new Float32Array([camera.far]),
    0,
  )

  // View UBO
  gl.bindBuffer(gl.UNIFORM_BUFFER, viewUBO)
  gl.bufferSubData(
    gl.UNIFORM_BUFFER,
    viewUBOInfo.uniforms.viewMatrix.offset,
    camera.viewMatrix,
    0,
  )
  gl.bufferSubData(
    gl.UNIFORM_BUFFER,
    viewUBOInfo.uniforms.cameraPosition.offset,
    new Float32Array(camera.position),
    0,
  )
  gl.bufferSubData(
    gl.UNIFORM_BUFFER,
    viewUBOInfo.uniforms.time.offset,
    new Float32Array([ts]),
    0,
  )

  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)
  gl.clearColor(0.1, 0.1, 0.1, 1.0)
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

  scene.updateWorldMatrix().render()
}

function onResize() {
  canvas.width = innerWidth * devicePixelRatio
  canvas.height = innerHeight * devicePixelRatio
  canvas.style.setProperty('width', `${innerWidth}px`)
  canvas.style.setProperty('height', `${innerHeight}px`)
}
