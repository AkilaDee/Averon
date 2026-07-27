import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePrerender from 'vite-plugin-prerender'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    vitePrerender({
      // Path to your build output directory
      staticDir: path.join(__dirname, 'dist'),
      
      // Exact routes flagged by your SEO tool
      routes: [
        '/contact-us',
        '/products/ceylon-cinnamon',
        '/products/black-pepper',
        '/products/cardamom',
        '/products/cloves',
        '/products/vanilla',
        '/products/nutmeg'
      ],
      
      // Uses Puppeteer headless browser to render the React Helmet tags at build time
      renderer: new vitePrerender.PuppeteerRenderer({
        headless: true,
        // Optional delay configuration if your bundle takes a second to paint components
        renderAfterTime: 5000, 
      }),
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