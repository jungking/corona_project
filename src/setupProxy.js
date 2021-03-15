const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy(["/","location","/calldb"], { target: "http://localhost:5000" })
  );
};