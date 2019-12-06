'use strict'

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
  }
}
