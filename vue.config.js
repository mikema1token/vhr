
module.exports = {
  devServer: {
    proxy: {
      '/login': {
        target: 'http://localhost:8081',  // 后端API的地址
        changeOrigin: true,
      },
      '/logout': {
        target: 'http://localhost:8081',  // 后端API的地址
        changeOrigin: true,
      },
    }
  }
};
