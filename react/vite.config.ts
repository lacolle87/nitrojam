import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    compression(),
  ],
  server: {
    https: true, // false for local dev
  },
  build: {
    cssCodeSplit: false, // Combine CSS for reduced HTTP requests
  },
});