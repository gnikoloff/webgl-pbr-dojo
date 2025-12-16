import { createPlane, Drawable } from '../lib/hwoa-rang-gl2'

import FRAGMENT_SHADER from './shaders/light-debug.frag'
import VERTEX_SHADER from './shaders/light-debug.vert'

// const geometry = createSphere({
//   radius: 0.2,
//   widthSegments: 20,
//   heightSegments: 20,
// })

const geometry = createPlane({
  width: 0.5,
  height: 0.5,
})

export default class LightDebug extends Drawable {
  #projectionUBOIndex
  #viewUBOIndex

  set color(v) {
    this.updateUniform('u_color', v)
  }

  constructor(gl) {
    super(gl, VERTEX_SHADER, FRAGMENT_SHADER, geometry)
    const { vertexCount, vertexStride, interleavedArray, indicesArray } =
      geometry

    this.vertexCount = vertexCount

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
    this.setUniform('u_color', {
      type: gl.FLOAT_VEC4,
    })

    this.#projectionUBOIndex = gl.getUniformBlockIndex(
      this.program,
      'Projection',
    )
    this.#viewUBOIndex = gl.getUniformBlockIndex(this.program, 'View')
  }
  render() {
    this.gl.uniformBlockBinding(this.program, this.#projectionUBOIndex, 0)
    this.gl.uniformBlockBinding(this.program, this.#viewUBOIndex, 1)
    this.gl.useProgram(this.program)
    this.gl.bindVertexArray(this.vao)
    this.gl.drawElements(
      this.gl.TRIANGLES,
      this.vertexCount,
      this.gl.UNSIGNED_SHORT,
      0,
    )
    this.gl.bindTexture(this.gl.TEXTURE_2D, null)
    this.gl.bindVertexArray(null)
  }
}
