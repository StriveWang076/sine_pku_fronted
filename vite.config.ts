import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/sine_pku_fronted/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
