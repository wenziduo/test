'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this
    const data = {
      name: '首页66'
    }
    await new Promise(resolve => {
      setTimeout(resolve, 500)
    })
    ctx.body = data
  }
  async work() {
    const { ctx, app } = this
    const session = await ctx.helper.getSession()
    // console.log('session', session)
    // Operations inside the transaction
    try {
      await ctx.model.Classify.updateOne(
        { _id: '5de0e67a4a25dc3d242b809c' },
        { title: 'test' },
        { session }
      )
      await ctx.model.Classify.updateOne(
        { _id: '5de0e67a4a25dc3d242b809c3' },
        { title: 'test2' },
        { session }
      )
      await ctx.model.Classify.updateOne(
        { _id: '5de0e67a4a25dc3d242b809c' },
        { title: 'test3' },
        { session }
      )
      // 提交事务
      console.log('事务提交')
      await session.commitTransaction()
    } catch (err) {
      // 事务回滚
      console.log('事务回滚')
      await session.abortTransaction()
      throw err
    } finally {
      console.log('事务结束')
      await session.endSession()
    }
    console.log('事务成功')
    ctx.helper.success('成功')
  }
}

module.exports = HomeController
