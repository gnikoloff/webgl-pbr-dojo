import { Drawable } from '../lib/hwoa-rang-gl2/dist'

import UBER_SHADER_VERT from './shaders/uberShader.vert'
import UBER_SHADER_FRAG from './shaders/uberShader.frag'

export default class Label extends Drawable {
  #texture

  #projectionUBOIndex
  #viewUBOIndex

  static createTextCanvas(text) {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    canvas.width = 1024
    canvas.height = 128

    const paddingLeft = 20
    const paddingRight = 10

    const fontSize = 100
    ctx.font = `${fontSize}px Helvetica`
    ctx.fillStyle = '#fff'
    ctx.textBaseline = 'middle'

    ctx.fillText(text, paddingLeft, canvas.height / 2)

    const { width: textWidth } = ctx.measureText(text)

    const lineOffsetX = paddingLeft + textWidth + 40

    ctx.strokeStyle = '#fff'
    ctx.lineWidth = 5
    ctx.beginPath()
    ctx.moveTo(lineOffsetX, canvas.height / 2)
    ctx.lineTo(canvas.width - paddingRight, canvas.height / 2)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(canvas.width - paddingRight, canvas.height / 2)
    ctx.lineTo(canvas.width - paddingRight - 40, canvas.height / 2 + 30)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(canvas.width - paddingRight, canvas.height / 2)
    ctx.lineTo(canvas.width - paddingRight - 40, canvas.height / 2 - 30)
    ctx.stroke()

    return canvas
  }

  constructor(gl, text, geometry, defines) {
    super(gl, UBER_SHADER_VERT, UBER_SHADER_FRAG, {
      PI: Math.PI,
      USE_DIFFUSE_ONLY: true,
      ...defines,
    })
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
    this.setUniform('u_diffuse', {
      type: gl.INT,
      value: 0,
    })

    const canvasTexture = Label.createTextCanvas(text)
    this.#texture = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, this.#texture)
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      canvasTexture.width,
      canvasTexture.height,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      canvasTexture,
    )
    gl.generateMipmap(gl.TEXTURE_2D)
    gl.bindTexture(gl.TEXTURE_2D, null)

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
    this.gl.activeTexture(this.gl.TEXTURE0)
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.#texture)
    this.gl.drawElements(
      this.gl.TRIANGLES,
      this.vertexCount,
      this.gl.UNSIGNED_SHORT,
      0,
    )
    this.gl.bindVertexArray(null)
  }
}
