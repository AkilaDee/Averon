import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from 'vite-plugin-prerender'

export default defineConfig({
  plugins: [
    react(),
    prerender({
      staticDir: 'dist',
      routes: [
        '/',
        '/products',
        '/products/ceylon-cinnamon',
        '/products/black-pepper',
        '/products/green-cardamom',
        '/products/cloves',
        '/products/vanilla',
        '/products/nutmeg',
        '/about-us',
        '/contact-us',
        '/quality',
        '/supply-chain',
        '/sourcing-regions',
        '/processing',
        '/certifications',
        '/insights',
        '/insights/alba-grade-cinnamon',
        '/insights/ceylon-cinnamon-vs-cassia',
        '/insights/coumarin-in-cinnamon',
        '/insights/cinnamon-testing',
        '/insights/cinnamon-grading',
        '/insights/ceylon-cinnamon-origin',
      ]
    })
  ],
  build: {
    assetsInlineLimit: 0,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'scroll': ['react-scroll'],
        }
      }
    },
    chunkSizeWarningLimit: 600,
  }
})