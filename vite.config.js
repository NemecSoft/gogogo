import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/gogogo/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
