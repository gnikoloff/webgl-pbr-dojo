module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'site/assets': 'assets' })
  eleventyConfig.addPassthroughCopy('src/_redirects')
  global.filters = eleventyConfig.javascriptFunctions // magic happens here
  eleventyConfig.setPugOptions({
    // and here
    globals: ['filters'],
  })
  return {
    dir: {
      input: 'site',
      output: 'docs',
      layouts: '_layouts',
    },
    pathPrefix: '/webgl-pbr-dojo',
    passthroughFileCopy: true,
  }
}
