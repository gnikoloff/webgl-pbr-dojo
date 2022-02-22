import { createProgram, Drawable } from '../lib/hwoa-rang-gl2/dist'

export default class Sphere extends Drawable {
  #projectionUBOIndex
  #viewUBOIndex
  #lightingUBOIndex
  #postFXUBOIndex

  // IBL textures
  irradianceMapTexture
  prefilterMapTexture
  brdfLutTexture

  // PBR textures
  albedoMap
  normalMap
  metallicMap
  roughnessMap
  aoMap

  constructor(gl, geometry, vsShader, fsShader, defines) {
    const newDefines = {
      PI: Math.PI,
      USE_NORMAL: true,
      USE_WORLD_POS: true,
      USE_PBR: true,
      MAX_REFLECTION_LOD: 4,
      ...defines,
    }
    super(gl, vsShader, fsShader, newDefines, 'sphere')

    const { vertexCount, vertexStride, interleavedArray, indicesArray } =
      geometry

    this.vertexCount = vertexCount

    const aPosition = gl.getAttribLocation(this.program, 'aPosition')
    const aNormal = gl.getAttribLocation(this.program, 'aNormal')

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

    if (defines.USE_PBR_TEXTURES) {
      const aUv = gl.getAttribLocation(this.program, 'aUv')
      gl.enableVertexAttribArray(aUv)
      gl.vertexAttribPointer(
        aUv,
        2,
        gl.FLOAT,
        false,
        vertexStride * Float32Array.BYTES_PER_ELEMENT,
        6 * Float32Array.BYTES_PER_ELEMENT,
      )
    }

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indicesArray, gl.STATIC_DRAW)

    this.gl.bindVertexArray(null)

    this.updateUniform('u_worldMatrix', this.worldMatrix)

    this.setUniform('u_irradianceMap', {
      type: gl.INT,
      value: 0,
    })
    this.setUniform('u_prefilterMap', {
      type: gl.INT,
      value: 1,
    })
    this.setUniform('u_brdfLUT', {
      type: gl.INT,
      value: 2,
    })
    if (defines.USE_PBR_TEXTURES) {
      this.setUniform('u_albedoMap', { type: gl.INT, value: 3 })
      this.setUniform('u_normalMap', { type: gl.INT, value: 4 })
      this.setUniform('u_metallicMap', { type: gl.INT, value: 5 })
      this.setUniform('u_roughnessMap', { type: gl.INT, value: 6 })
      this.setUniform('u_aoMap', { type: gl.INT, value: 7 })
    } else {
      this.setUniform('u_albedo', {
        type: gl.FLOAT_VEC3,
        value: new Float32Array([1, 1, 1]),
      })
    }

    this.#projectionUBOIndex = gl.getUniformBlockIndex(
      this.program,
      'Projection',
    )
    this.#viewUBOIndex = gl.getUniformBlockIndex(this.program, 'View')
    this.#lightingUBOIndex = gl.getUniformBlockIndex(this.program, 'Lighting')
    this.#postFXUBOIndex = gl.getUniformBlockIndex(this.program, 'PostFX')
  }

  render() {
    if (!this.visible) {
      return
    }
    this.gl.uniformBlockBinding(this.program, this.#projectionUBOIndex, 0)
    this.gl.uniformBlockBinding(this.program, this.#viewUBOIndex, 1)
    this.gl.uniformBlockBinding(this.program, this.#lightingUBOIndex, 2)
    this.gl.uniformBlockBinding(this.program, this.#postFXUBOIndex, 3)
    this.gl.useProgram(this.program)

    // bind IBL textures
    if (this.irradianceMapTexture) {
      this.gl.activeTexture(this.gl.TEXTURE0)
      this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, this.irradianceMapTexture)
    }
    if (this.prefilterMapTexture) {
      this.gl.activeTexture(this.gl.TEXTURE1)
      this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, this.prefilterMapTexture)
    }
    if (this.brdfLutTexture) {
      this.gl.activeTexture(this.gl.TEXTURE2)
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.brdfLutTexture)
    }

    // bind PBR textures
    if (this.albedoMap) {
      this.gl.activeTexture(this.gl.TEXTURE3)
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.albedoMap)
    }

    if (this.normalMap) {
      this.gl.activeTexture(this.gl.TEXTURE4)
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.normalMap)
    }
    if (this.metallicMap) {
      this.gl.activeTexture(this.gl.TEXTURE5)
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.metallicMap)
    }
    if (this.roughnessMap) {
      this.gl.activeTexture(this.gl.TEXTURE6)
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.roughnessMap)
    }
    if (this.aoMap) {
      this.gl.activeTexture(this.gl.TEXTURE7)
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.aoMap)
    }

    this.gl.bindVertexArray(this.vao)
    this.gl.drawElements(
      this.gl.TRIANGLES,
      this.vertexCount,
      this.gl.UNSIGNED_SHORT,
      0,
    )

    this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, null)

    this.gl.bindVertexArray(null)
  }
}
