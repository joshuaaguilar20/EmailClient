const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(proxy('/api/*', { target: 'https://boilerplate2018.herokuapp.com' }))
  app.use(proxy('/auth/google', { target: 'https://boilerplate2018.herokuapp.com' }))
}



