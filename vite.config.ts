import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/FlixReact/',
   build: {
    outDir: 'build'   // 👈 gera a pasta "build" em vez de "dist"
  }
})
