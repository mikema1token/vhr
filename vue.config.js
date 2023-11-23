// const { defineConfig } = require('@vue/cli-service')
// const {createProxyMiddleware} = require('http-proxy-middleware')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   devServer:{
//     proxy:{
//       '/login':{
//         target: 'http://127.0.0.1:8080',
//         changeOrigin:true,
//       },
//       ws:true
//     }
//   }
// })
module.exports = {
  devServer: {
    proxy: {
      '/login': {
        target: 'http://localhost:8081',  // 后端API的地址
        changeOrigin: true,
      },
    }
  }
};
