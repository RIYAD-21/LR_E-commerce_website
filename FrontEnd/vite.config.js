import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:2103', // Adjust the target to your backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'dist', // Output directory for the build
    rollupOptions: {
      input: {
        main: 'src/main.jsx', // Main entry point for your React app
      },
    },
  },
  base: './', // Base URL for the application
})
