let _extension

export function getAnisotropicFilteringExtension(gl) {
  if (_extension == null) {
    _extension =
      gl.getExtension('EXT_texture_filter_anisotropic') ||
      gl.getExtension('MOZ_EXT_texture_filter_anisotropic') ||
      gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic')
  }
  return _extension
}
