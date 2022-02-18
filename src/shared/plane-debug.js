import { OrthographicCamera, createPlane, Drawable } from '../lib/hwoa-rang-gl2'

import VERTEX_SHADER_SRC from './shaders/plane-debug.vert'
import FRAGMENT_SHADER_SRC from './shaders/plane-debug.frag'

export default class PlaneDebug extends Drawable {
  texture
  constructor(gl, width, height, defines = {}) {
    super(gl, VERTEX_SHADER_SRC, FRAGMENT_SHADER_SRC, defines)

    const { vertexCount, vertexStride, interleavedArray, indicesArray } =
      createPlane({ width, height })

    this.vertexCount = vertexCount

    const camera = new OrthographicCamera(
      -innerWidth / 2,
      innerWidth / 2,
      innerHeight / 2,
      -innerHeight / 2,
      0,
      2,
    )
    camera.position = [0, 0, 1]
    camera.lookAt = [0, 0, 0]
    camera.updateProjectionViewMatrix()

    const aPosition = gl.getAttribLocation(this.program, 'aPosition')
    const aUv = gl.getAttribLocation(this.program, 'aUv')

    const interleavedBuffer = gl.createBuffer()
    const indexBuffer = gl.createBuffer()

    this.gl.bindVertexArray(this.vao)

    gl.bindBuffer(gl.ARRAY_BUFFER, interleavedBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, interleavedArray, gl.STATIC_DRAW)

    gl.enableVertexAttribArray(aPosition)
    gl.vertexAttribPointer(
      aPosition,
      3,
      gl.FLOAT,
      false,
      vertexStride * Float32Array.BYTES_PER_ELEMENT,
      0 * Float32Array.BYTES_PER_ELEMENT,
    )

    gl.enableVertexAttribArray(aUv)
    gl.vertexAttribPointer(
      aUv,
      2,
      gl.FLOAT,
      false,
      vertexStride * Float32Array.BYTES_PER_ELEMENT,
      3 * Float32Array.BYTES_PER_ELEMENT,
    )

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indicesArray, gl.STATIC_DRAW)

    this.gl.bindVertexArray(null)

    this.updateUniform('u_worldMatrix', this.worldMatrix)
    this.setUniform('u_diffuse', {
      type: gl.INT,
      value: 0,
    })
    this.setUniform('u_projectionViewMatrix', {
      type: gl.FLOAT_MAT4,
      value: camera.projectionViewMatrix,
    })
  }
  render() {
    this.gl.useProgram(this.program)
    this.gl.bindVertexArray(this.vao)
    if (this.texture) {
      this.gl.activeTexture(this.gl.TEXTURE0)
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture)
    }
    this.gl.drawElements(
      this.gl.TRIANGLES,
      this.vertexCount,
      this.gl.UNSIGNED_SHORT,
      0,
    )
    if (this.texture) {
      this.gl.bindTexture(this.gl.TEXTURE_2D, null)
    }
    this.gl.bindVertexArray(null)
  }
}
