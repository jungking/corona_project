const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/location","/calldb",{
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};
