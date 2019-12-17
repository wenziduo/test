'use strict'
const Service = require('egg').Service
class ClassifyService extends Service {
  async create() {
    const { ctx } = this
    const {
      request: { body }
    } = ctx
    const resFind = await ctx.model.Classify.findOne({
      title: body.title
    })
    if (resFind) {
      ctx.helper.error('该类别名重名')
      return
    }
    const resCreate = await ctx.model.Classify.create({
      title: body.title
    })
    if (resCreate) {
      ctx.helper.success('新建成功')
    }
  }
  async find() {
    const { ctx } = this
    const {
      request: { query }
    } = ctx
    const resFind = await ctx.model.Classify.find().sort({ _id: -1 })
    if (resFind) {
      ctx.helper.success(resFind)
    }
  }
  async update(params) {
    const { ctx } = this
    const {
      request: { body }
    } = ctx
    const resFind = await ctx.model.Classify.findOne({
      title: body.title,
      _id: {
        $ne: body._id
      }
    })
    if (resFind) {
      ctx.helper.error('该类别名重名')
      return
    }
    const resCreate = await ctx.model.Classify.updateOne({
      ...params
    })
    return resCreate
  }
  async delete(params) {
    const { ctx } = this
    const postArray = await ctx.service.post.find({
      classifyId: params._id
    })
    if (postArray.length > 0) {
      ctx.helper.error('请先删除该分类下的文章！')
      return
    }
    const resDel = await ctx.model.Classify.deleteOne({
      _id: params._id
    })
    return resDel
  }
  async updateCount(params, count) {
    const { ctx } = this
    const resFind = await ctx.model.Classify.updateOne(
      { ...params },
      { $set: { count } }
    )
    return resFind
  }
}
module.exports = ClassifyService
