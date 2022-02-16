import { defineConfig, loadEnv } from 'vite'
import glsl from 'vite-plugin-glsl'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    plugins: [glsl()],
    assetsInclude: ['**/*.hdr'],
    build: {
      assetsInlineLimit: 0,
      outDir: 'site/assets/',
      emptyOutDir: false,
      rollupOptions: {
        output: {
          assetFileNames: '[name][extname]',
          entryFileNames: '[name].js',
        },
        input: process.env.DEV
          ? ''
          : [
              'src/0-pbr-basics/pbr-basics.js',
              'src/1-textured-pbr/textured-pbr.js',
              'src/2-ibl-irradiance-conversion/ibl-irradiance-conversion.js',
            ],
      },
    },
  })
}
