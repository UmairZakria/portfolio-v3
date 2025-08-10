import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {}
  },
  plugins: [tailwindcss(),react()],
  resolve: {
    alias: {
      'gsap/SplitText': path.resolve(__dirname, 'src/gsap-dummies/SplitText.js'),
      'gsap/ScrambleTextPlugin': path.resolve(__dirname, 'src/gsap-dummies/ScrambleTextPlugin.js'),
      'gsap/InertiaPlugin': path.resolve(__dirname, 'src/gsap-dummies/InertiaPlugin.js'),
    },
  },
})
