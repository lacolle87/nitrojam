import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import compression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression(),
  ],
  server: {
    https: true,
  },
  build: {
    cssCodeSplit: false, // Combine CSS for reduced HTTP requests
  },
});