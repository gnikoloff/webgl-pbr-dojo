import { TextureLoader } from '../lib/hwoa-rang-gl2'

let _supportedCompressedTexFormats

const loadCorrectCompressedTexture = async (gl, textureFormatURLS) => {
  if (!_supportedCompressedTexFormats) {
    _supportedCompressedTexFormats = TextureLoader.getSupportedFormats(gl)
  }

  let texFormat
  let missingTexFormat
  if (_supportedCompressedTexFormats.s3tc) {
    texFormat = textureFormatURLS.s3tc
    missingTexFormat = 's3tc'
  } else if (_supportedCompressedTexFormats.astc) {
    texFormat = textureFormatURLS.astc
    missingTexFormat = 'astc'
  } else if (_supportedCompressedTexFormats.etc1) {
    texFormat = textureFormatURLS.etc1
    missingTexFormat = 'etc1'
  } else if (_supportedCompressedTexFormats.etc2) {
    texFormat = textureFormatURLS.etc2
    missingTexFormat = 'etc2'
  } else if (_supportedCompressedTexFormats.pvrtc) {
    texFormat = textureFormatURLS.pvrtc
    missingTexFormat = 'pvrtc'
  }

  if (!texFormat) {
    console.log(textureFormatURLS)
    throw new Error(
      `missing correct format ${
        missingTexFormat ? `for ${missingTexFormat}` : ''
      }`,
    )
  }

  const texData = await TextureLoader.loadCompressed(texFormat)

  const texture = gl.createTexture()
  gl.bindTexture(gl.TEXTURE_2D, texture)
  for (const [i, mip] of texData.mipmaps.entries()) {
    gl.compressedTexImage2D(
      gl.TEXTURE_2D,
      i,
      texData.format,
      mip.width,
      mip.height,
      0,
      mip.data,
    )
  }
  if (texData.mipmapCount > 1) {
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
    gl.texParameteri(
      gl.TEXTURE_2D,
      gl.TEXTURE_MIN_FILTER,
      gl.LINEAR_MIPMAP_LINEAR,
    )
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  } else {
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  }
  return texture
}

export default loadCorrectCompressedTexture
