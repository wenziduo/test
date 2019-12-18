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
  },
  // 获取session，回滚事务
  async getSession(
    opt = {
      readConcern: { level: 'snapshot' },
      writeConcern: { w: 'majority' }
    }
  ) {
    const { mongoose } = this.app
    const session = await mongoose.startSession(opt)
    await session.startTransaction()
    return session
  }
}
