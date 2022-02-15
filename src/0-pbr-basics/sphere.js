import { createProgram, Drawable } from '../lib/hwoa-rang-gl2/dist'

import UBER_SHADER_VERT from './shaders/uberShader.vert'
import UBER_SHADER_FRAG from './shaders/uberShader.frag'

export default class Sphere extends Drawable {
  #projectionUBOIndex
  #viewUBOIndex
  #lightingUBOIndex

  constructor(gl, geometry, defines) {
    super(
      gl,
      UBER_SHADER_VERT,
      UBER_SHADER_FRAG,
      {
        USE_PBR: true,
        PI: Math.PI,
        ...defines,
      },
      'sphere',
    )

    const { vertexCount, vertexStride, interleavedArray, indicesArray } =
      geometry

    this.vertexCount = vertexCount

    const aPosition = gl.getAttribLocation(this.program, 'aPosition')
    const aNormal = gl.getAttribLocation(this.program, 'aNormal')
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

    gl.enableVertexAttribArray(aNormal)
    gl.vertexAttribPointer(
      aNormal,
      3,
      gl.FLOAT,
      false,
      vertexStride * Float32Array.BYTES_PER_ELEMENT,
      3 * Float32Array.BYTES_PER_ELEMENT,
    )

    gl.enableVertexAttribArray(aUv)
    gl.vertexAttribPointer(
      aUv,
      2,
      gl.FLOAT,
      false,
      vertexStride * Float32Array.BYTES_PER_ELEMENT,
      6 * Float32Array.BYTES_PER_ELEMENT,
    )

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indicesArray, gl.STATIC_DRAW)

    this.gl.bindVertexArray(null)

    this.updateUniform('u_worldMatrix', this.worldMatrix)
    this.setUniform('u_albedo', {
      type: gl.FLOAT_VEC3,
      value: new Float32Array([1, 0, 0]),
    })

    this.#projectionUBOIndex = gl.getUniformBlockIndex(
      this.program,
      'Projection',
    )
    this.#viewUBOIndex = gl.getUniformBlockIndex(this.program, 'View')
    this.#lightingUBOIndex = gl.getUniformBlockIndex(this.program, 'Lighting')
  }

  render() {
    this.gl.uniformBlockBinding(this.program, this.#projectionUBOIndex, 0)
    this.gl.uniformBlockBinding(this.program, this.#viewUBOIndex, 1)
    this.gl.uniformBlockBinding(this.program, this.#lightingUBOIndex, 2)
    this.gl.useProgram(this.program)
    this.gl.bindVertexArray(this.vao)
    this.gl.drawElements(
      this.gl.TRIANGLES,
      this.vertexCount,
      this.gl.UNSIGNED_SHORT,
      0,
    )
    this.gl.bindVertexArray(null)
  }
}
