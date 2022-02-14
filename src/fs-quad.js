import { Drawable } from './lib/hwoa-rang-gl2/dist'

const VS = `#version 300 es
  uniform mat4 projectionViewMatrix;
  uniform mat4 u_worldMatrix;
  in vec4 aPosition;
  in vec2 aUv;
  out vec2 vUv;
  void main () {
    gl_Position = projectionViewMatrix * u_worldMatrix * aPosition;
    vUv = aUv;
  }
`

const FS = `#version 300 es
  precision highp float;
  uniform sampler2D u_diffuse;
  in vec2 vUv;
  out vec4 finalColor;
  void main () {
    vec4 diffuseColor = texture(u_diffuse, vUv);
    diffuseColor.rgb = diffuseColor.rgb / (diffuseColor.rgb + vec3(1.0));
    diffuseColor.rgb = pow(diffuseColor.rgb, vec3(1.0/2.2)); 
    finalColor = diffuseColor;
  }
`

export default class FullscreenQuad extends Drawable {
  constructor(gl, geometry, defines) {
    super(gl, VS, FS, defines)
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
  }

  render() {
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
