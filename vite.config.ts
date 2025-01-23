import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 8080,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});