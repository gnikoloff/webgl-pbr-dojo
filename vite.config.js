import { defineConfig, loadEnv } from 'vite'
import glsl from 'vite-plugin-glsl'

import EXAMPLES from './EXAMPLES.json'

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
          : EXAMPLES.map(({ id }, i) => `src/${i}-${id}/${id}.js`),
      },
    },
  })
}
