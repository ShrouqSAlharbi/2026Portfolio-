import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/2026Portfolio-/',
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2020',
    // ParticleField (three.js/r3f/drei) is intentionally large — it's dynamically
    // imported and only fetched on desktop viewports with motion enabled.
    chunkSizeWarningLimit: 900,
  },
})
