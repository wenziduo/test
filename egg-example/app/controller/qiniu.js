'use strict'

const Controller = require('egg').Controller
const qiniu = require('qiniu')

class QiniuController extends Controller {
  async getQiniuToken() {
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
    this.ctx.helper.success(uploadToken)
  }
}

module.exports = QiniuController
