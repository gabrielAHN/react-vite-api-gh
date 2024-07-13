// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const apiUrl = process.env.PROD_API_URL

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target:  apiUrl,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})