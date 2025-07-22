import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/streaming-dashboard/', // ⚠️ usa el nombre de tu repo si lo subirás a GitHub Pages
  plugins: [react()],
});
