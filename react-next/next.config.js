module.exports = (phase, { defaultConfig }) => {
  return {
    distDir: 'build',
    // useFileSystemPublicRoutes: false // 禁止服务端文件路由
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
      // Perform customizations to webpack config
      // Important: return the modified config
      return config
    },
    webpackDevMiddleware: config => {
      // Perform customizations to webpack dev middleware config
      // Important: return the modified config
      return config
    }
  }
}
