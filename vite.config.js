import { defineConfig, loadEnv } from 'vite'
import glsl from 'vite-plugin-glsl'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    plugins: [glsl()],
    assetsInclude: ['**/*.hdr', '**/*.ktx', '**/*.dds'],
    build: {
      assetsInlineLimit: 0,
      outDir: 'docs/',
      emptyOutDir: false,
      rollupOptions: {
        output: {
          assetFileNames: '[name][extname]',
          entryFileNames: '[name].js',
        },
        input: 'index.html',
      },
    },
  })
}
