'use strict';
const Service = require('egg').Service;
class ClassifyService extends Service {
  async create() {
    const { ctx } = this;
    const {
      request: { body },
    } = ctx;
    const resFind = await ctx.model.Classify.findOne({
      title: body.title,
    });
    if (resFind) {
      ctx.helper.error('该类别名重名');
      return;
    }
    const resCreate = await ctx.model.Classify.create({
      title: body.title,
    });
    if (resCreate) {
      ctx.helper.success('新建成功');
    }
  }
  async find() {
    const { ctx } = this;
    const {
      request: { query },
    } = ctx;
    const resFind = await ctx.model.Classify.find();
    if (resFind) {
      ctx.helper.success(resFind);
    }
  }
  async updateCount(params, count) {
    const { ctx } = this;
    const resFind = await ctx.model.Classify.updateOne(
      { ...params },
      { $set: { count } }
    );
    return resFind;
  }
}
module.exports = ClassifyService;
