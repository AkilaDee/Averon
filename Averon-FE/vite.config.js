import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import VitePrerender from 'vite-plugin-prerender'

export default defineConfig({
  plugins: [
    react(),
    VitePrerender({
      // Matches your production build output directory
      staticDir: path.join(__dirname, 'dist'),
      
      // List all application routes you want compiled into raw HTML files
      routes: [
        '/', 
        '/products',
        '/quality',
        '/insights',
        '/about-us',
        '/contact-us',
        '/products/ceylon-cinnamon',
        '/products/black-pepper',
        '/products/cloves',
        '/products/green-cardamom',
        '/products/vanilla',
        '/products/nutmeg',
        '/insights/alba-grade-cinnamon',
        '/insights/ceylon-cinnamon-vs-cassia',
        '/insights/coumarin-in-cinnamon',
        '/insights/cinnamon-testing',
        '/insights/cinnamon-grading',
        '/insights/ceylon-cinnamon-origin',
        '/sourcing-regions',
        '/supply-chain',
        '/processing', 
        '/certifications'
      ],
      
      // Minify settings to keep file sizes clean for crawlers
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true,
      },
    }),
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