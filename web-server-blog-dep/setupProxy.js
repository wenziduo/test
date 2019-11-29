module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'http://localhost:8090',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/'
      }
      // cookieDomainRewrite: "http://localhost:3000"
    })
  )
}
