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
      title: body.title,
      content: body.content,
      createTime: new Date(),
    });
    if (resCreateTitle) {
      ctx.helper.error('创建成功');
    }
  }
}
module.exports = PostService;
