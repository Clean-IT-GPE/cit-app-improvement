export default {
  server: {
    proxy: {
      '/resize-image': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/resize-image/, '')
      }
    }
  }
};