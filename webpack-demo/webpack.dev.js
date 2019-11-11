const common = require('./webpack.common.js')
const merge = require('webpack-merge')
const webpack = require('webpack')

module.exports = merge(common, {
  devtool: 'inline-source-map', // 错误警告具体地址
  devServer: {
    contentBase: './dist',
    port: 8088,
    hot: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev')
    })
  ]
})
