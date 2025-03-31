import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/caroAM22.github.io/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
