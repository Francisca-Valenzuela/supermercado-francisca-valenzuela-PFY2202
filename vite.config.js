import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// En producción (GitHub Pages) el sitio vive bajo /nombre-del-repositorio/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/supermercado-francisca-valenzuela-PFY2202/' : '/',
  plugins: [react(), tailwindcss()],
}));