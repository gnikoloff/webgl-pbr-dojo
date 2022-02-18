import {
  createPlane,
  Drawable,
  OrthographicCamera,
} from '../lib/hwoa-rang-gl2/dist'

let _geo
let _orthoCamera

export default class BRDFIntegrationPlane extends Drawable {
  constructor(gl, width, height, vsSource, fsSource, defines = {}) {
    super(gl, vsSource, fsSource, {
      PI: Math.PI,
      USE_UNIQUE_PROJECTION_VIEW_MATRIX: true,
      USE_UV: true,
      ...defines,
    })

    if (!_geo) {
      _geo = createPlane({ width, height })
      _orthoCamera = new OrthographicCamera(
        -width / 2,
        width / 2,
        height / 2,
        -height / 2,
        0,
        2,
      )
      _orthoCamera.position = [0, 0, 1]
      _orthoCamera.lookAt = [0, 0, 0]
      _orthoCamera.updateProjectionViewMatrix()
    }

    const { vertexCount, vertexStride, interleavedArray, indicesArray } = _geo

    this.vertexCount = vertexCount

    const aPosition = gl.getAttribLocation(this.program, 'aPosition')
    const aUv = gl.getAttribLocation(this.program, 'aUv')

    const interleavedBuffer = gl.createBuffer()
    const indexBuffer = gl.createBuffer()

    gl.bindVertexArray(this.vao)

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
    this.setUniform('u_projectionViewMatrix', {
      type: gl.FLOAT_MAT4,
    })
  }

  render() {
    this.gl.useProgram(this.program)
    this.updateUniform(
      'u_projectionViewMatrix',
      _orthoCamera.projectionViewMatrix,
    )
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
