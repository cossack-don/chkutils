import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

// @ts-ignore
const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  server:{
    port:3000,
  },
  resolve: {
    alias: {
      // @ts-ignore
      "@":fileURLToPath(new URL('./src',import.meta.url)),
    },
    extensions: ['.mjs', '.js', '.ts', '.json']
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'chkutils',
      formats:['es','cjs'],
      fileName: (format) => {
        if (format === 'es') return 'chkutils.esm.js';
        if (format === 'cjs') return 'chkutils.common.js';
        return 'chkutils.js';
      },
    },
    rollupOptions: {
      // external: ['vue'],
      output: {
        globals: {
          // vue: 'Vue',
        },
      },
    },
  },
})
