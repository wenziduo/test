'use strict'
const Service = require('egg').Service
class PostService extends Service {
  async create() {
    const { ctx } = this
    const {
      request: { body }
    } = ctx
    const resFindTitle = await ctx.model.Post.findOne({ title: body.title })
    if (resFindTitle) {
      ctx.helper.error('标题重名，请更换')
      return
    }
    console.log('body.classifyId', body.classifyId)
    const resFindClassify = await ctx.model.Classify.findOne({
      _id: body.classifyId
    })
    console.log('body.classifyId', body.classifyId)
    if (!resFindClassify) {
      ctx.helper.error('该类不存在')
      return
    }
    const resCreateTitle = await ctx.model.Post.create({
      ...body,
      createTime: new Date()
    })
    const resCount = await ctx.model.Post.find({
      classifyId: body.classifyId
    }).count()
    await ctx.service.classify.updateCount(
      { classifyId: body.classifyId },
      resCount
    )
    if (resCreateTitle) {
      ctx.helper.success('创建成功')
    }
  }
  async find(params) {
    const { ctx } = this
    const resFind = await ctx.model.Post.find({
      ...params
    })
      .sort({
        createTime: -1
      })
      .limit(5)
    return resFind
  }
  async detail(params) {
    const { ctx } = this
    console.log('params', params)
    const resFindOne = await ctx.model.Post.findOneAndUpdate(
      {
        _id: params._id
      },
      {
        $inc: { watch: 1 }
      },
      {
        new: true
      }
    )
    // console.log('resFindOne.title', resFindOne.title)
    const classifyFindOne = await ctx.model.Classify.findOne({
      _id: resFindOne.classifyId
    })
    // console.log('classifyFindOne', classifyFindOne)
    if (!resFindOne) {
      ctx.header.error('文章id不正确')
      return
    }
    resFindOne.classifyData = classifyFindOne
    // 上一篇和下一篇
    const prevData = await ctx.model.Post.find(
      {
        createTime: { $gte: resFindOne.createTime },
        classifyId: resFindOne.classifyId
      },
      {
        _id: 1,
        title: 1,
        text: 1,
        imgUrl: 1
      }
    )
      .sort({ createTime: 1 })
      .limit(2)
    console.log('prevData', prevData)
    const nextData = await ctx.model.Post.find(
      {
        createTime: { $lte: resFindOne.createTime },
        classifyId: resFindOne.classifyId
      },
      {
        _id: 1,
        title: 1,
        text: 1,
        imgUrl: 1
      }
    )
      .sort({ createTime: -1 })
      .limit(2)
    // 猜你喜欢
    const guessData = await ctx.model.Post.find(
      {
        _id: {
          $nin: [
            resFindOne._id,
            prevData.length === 2 ? prevData[1]._id : resFindOne._id,
            nextData.length === 2 ? nextData[1]._id : resFindOne._id
          ]
        },
        classifyId: resFindOne.classifyId
      },
      {
        _id: 1,
        title: 1,
        text: 1,
        imgUrl: 1
      }
    )
      .sort({ watch: -1 })
      .limit(8)
    resFindOne.prevData = prevData.filter((item, index) => index > 0)
    resFindOne.nextData = nextData.filter((item, index) => index > 0)
    resFindOne.guessData = guessData
    return resFindOne
  }
}
module.exports = PostService
