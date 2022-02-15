import glsl from 'vite-plugin-glsl'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [glsl()],
  build: {
    outDir: 'site/assets/',
    emptyOutDir: false,
    rollupOptions: {
      output: {
        assetFileNames: '/[name][extname]',
        entryFileNames: '[name].js',
      },
      // This is critical: overwrite default .html entry
      input: [
        'src/0-pbr-basics/pbr-basics.js',
        'src/1-textured-pbr/textured-pbr.js',
      ],
    },
  },
})
