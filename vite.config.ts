import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

// @ts-ignore
const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  server:{
    port:3000,
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'chkutils',
      fileName: 'chkutils',
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
