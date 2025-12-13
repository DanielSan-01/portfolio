import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // This must match your GitHub Pages repo name: danielsan-01.github.io/portfolio/
  // It ensures asset URLs are generated correctly for the /portfolio/ subpath.
  base: '/portfolio/',
})
