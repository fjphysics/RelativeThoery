import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    assetsInlineLimit: 1024 * 1024, // 将所有小于1MB的资源内联
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  }
})