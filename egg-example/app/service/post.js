'use strict';
const Service = require('egg').Service;
class PostService extends Service {
  async create() {
    const { ctx } = this;
    const {
      request: { body },
    } = ctx;
    const resFindTitle = await ctx.model.Post.findOne({ title: body.title });
    if (resFindTitle) {
      ctx.helper.error('标题重名，请更换');
      return;
    }
    console.log('body.classifyId', body.classifyId);
    const resFindClassify = await ctx.model.Classify.findOne({
      _id: body.classifyId,
    });
    console.log('body.classifyId', body.classifyId);
    if (!resFindClassify) {
      ctx.helper.error('该类不存在');
      return;
    }
    const resCreateTitle = await ctx.model.Post.create({
      ...body,
      createTime: new Date(),
    });
    const resCount = await ctx.model.Post.find({
      classifyId: body.classifyId,
    }).count();
    await ctx.service.classify.updateCount(
      { classifyId: body.classifyId },
      resCount
    );
    if (resCreateTitle) {
      ctx.helper.success('创建成功');
    }
  }
  async find(params) {
    const { ctx } = this;
    const resFind = await ctx.model.Post.find({
      ...params,
    }).sort({
      createTime: -1,
    });
    return resFind;
  }
  async detail(params) {
    const { ctx } = this;
    console.log('params', params);
    const resFindOne = await ctx.model.Post.findOneAndUpdate(
      params,
      {
        $inc: { watch: 1 },
      },
      {
        new: true,
      }
    );
    console.log('resFindOne.title', resFindOne.title);
    const classifyFindOne = await ctx.model.Classify.findOne({
      _id: resFindOne.classifyId,
    });
    console.log('classifyFindOne', classifyFindOne);
    if (!resFindOne) {
      ctx.header.error('文章id不正确');
      return;
    }
    resFindOne.classifyData = classifyFindOne;
    return resFindOne;
  }
}
module.exports = PostService;
