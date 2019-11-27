/* eslint-disable */
const withCss = require('@zeit/next-css')

module.exports = withCss({
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals)
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader'
      })
    }
    // config.module.rules.push({
    //   test: /.mdx/,
    //   use: [
    //     options.defaultLoaders.babel,
    //     {
    //       loader: '@mdx-js/loader',
    //       options: pluginOptions.options
    //     }
    //   ]
    // })
    config.module.rules.push({
      test: /\.md$/,
      loader: 'rh-markdown-react-loader',
      options: {
        className: 'doc',
        mdRule: 'default'
      }
    })
    return config
  }
})
