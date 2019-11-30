'use strict';

const Controller = require('egg').Controller;

class PostController extends Controller {
  async create() {
    const { ctx } = this;
    await ctx.service.post.create();
  }
  async find() {
    const { ctx } = this;
    const params = ctx.request.query;
    const res = await ctx.service.post.find(params);
    ctx.helper.success(res);
  }
  async detail() {
    const { ctx } = this;
    const params = ctx.request.query;
    const res = await ctx.service.post.detail(params);
    ctx.helper.success(res);
  }
}

module.exports = PostController;
