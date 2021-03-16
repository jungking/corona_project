const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy(["location","/calldb"], { target: "https://hjlimweb.herokuapp.com/" })
  );
};