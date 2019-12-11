'use strict'

const Controller = require('egg').Controller

class ClassifyController extends Controller {
  async create() {
    const { ctx } = this
    await ctx.service.classify.create()
  }
  async find() {
    const { ctx } = this
    await ctx.service.classify.find()
  }
  async update() {
    const { ctx } = this
    const params = ctx.request.body
    const resUpdate = await ctx.service.classify.update(params)
    if (resUpdate) {
      ctx.helper.success('修改成功')
    }
  }
  async delete() {
    const { ctx } = this
    const params = ctx.request.body
    const resDel = await ctx.service.classify.delete(params)
    console.log('resDel.deletedCount', resDel)
    if (resDel && resDel.deletedCount) {
      ctx.helper.success('成功删除')
    } else if (resDel && !resDel.deletedCount) {
      ctx.helper.error('删除失败')
    }
  }
  async update() {
    const { ctx } = this
    const resCreate = await ctx.service.classify.update()
    if (resCreate) {
      ctx.helper.success('新建成功')
    }
  }
}

module.exports = ClassifyController
