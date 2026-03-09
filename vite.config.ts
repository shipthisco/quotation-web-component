import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/loader.ts',
      name: 'QWC',
      formats: ['iife'],
      fileName: () => 'qwc.js'
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    }
  }
});