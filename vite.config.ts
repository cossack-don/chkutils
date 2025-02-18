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
      "@":fileURLToPath(new URL('./src',import.meta.url)),
    },
    extensions: ['.mjs', '.js', '.ts', '.json']  // Добавляем поддержку расширения .ts
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'chkutils',
      fileName: 'chkutils',
      formats:['es']
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
