import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '~bootstrap': fileURLToPath(new URL('node_modules/bootstrap', import.meta.url)),
      // '~bootstrap': fileURLToPath(__dirname, 'node_modules/bootstrap'),
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
