//server.js
var express = require('express')
var next = require('next')

const devProxy = {
  '/api': {
    target: 'http://127.0.0.1:8008', // 目标服务器 host
    pathRewrite: { '^/api': '/' }, // 重写请求，比如我们源访问的是api/login，那么请求会被解析为/www/login
    changeOrigin: true // 默认false，是否需要改变原始主机头为目标URL
  }
}

const port = parseInt(process.env.PORT, 10) || 3000
const env = process.env.NODE_ENV
const dev = env !== 'production'
const app = next({
  dir: '.', // base directory where everything is, could move to src later
  dev
})

const handle = app.getRequestHandler()

let server
app
  .prepare()
  .then(() => {
    server = express()

    // Set up the proxy.
    if (dev && devProxy) {
      const proxyMiddleware = require('http-proxy-middleware')
      Object.keys(devProxy).forEach(function(context) {
        server.use(proxyMiddleware(context, devProxy[context]))
      })
    }

    // Default catch-all handler to allow Next.js to handle all other routes
    server.all('*', (req, res) => {
      req.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      req.headers['X-Requested-With'] = 'XMLHttpRequest'
      handle(req, res)
      // console.log(req.body);
    })

    server.listen(port, err => {
      if (err) {
        throw err
      }
      console.log(`> Ready on port ${port} [${env}]`)
    })
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
  })
