import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/The-Effects-of-Diet-on-Obesity/',
  build: {
    outDir: 'dist'
  }
})
