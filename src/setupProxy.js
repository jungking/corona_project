const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/api/**', { target: 'https://hjlimweb.herokuapp.com' }));
    app.use(proxy('/otherApi/**', { target: 'https://hjlimweb.herokuapp.com' }));
};