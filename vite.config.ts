import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ckm1/' ,
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
