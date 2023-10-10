const {createProxyMiddleware} = require('http-proxy-middleware');
const proxy = {
  target: 'https://layout.solvintech.ru/nuxt/',
  changeOrigin: true,
}
module.exports = function (app) {
  app.use(
    '/api/',
    createProxyMiddleware(proxy)
  );
}