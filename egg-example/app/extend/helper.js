'use strict'
const qiniu = require('qiniu')

module.exports = {
  success(data) {
    this.ctx.body = {
      data,
      success: true
    }
  },
  error(message) {
    this.ctx.body = {
      message,
      success: false
    }
  },
  getQiniuToken() {
    let mac = new qiniu.auth.digest.Mac(
      this.app.config.qiniuyun.accessKey,
      this.app.config.qiniuyun.secretKey
    )
    let options = {
      scope: this.app.config.qiniuyun.bucket,
      expires: 3600 * 24
    }
    let putPolicy = new qiniu.rs.PutPolicy(options)
    let uploadToken = putPolicy.uploadToken(mac)
    return uploadToken
  }
}
