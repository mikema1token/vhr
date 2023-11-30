module.exports = {
  devServer: {
    proxy: {
      '/':{
            target:'http://localhost:8081',
            changeOrigin: true
      }
    }
  }
};
