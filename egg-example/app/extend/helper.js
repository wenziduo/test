'use strict'

module.exports = {
  success(data) {
    this.ctx.body = {
      data,
      success: true
    }
  },
  async error(message) {
    this.ctx.body = {
      message,
      success: false
    }
  }
}
