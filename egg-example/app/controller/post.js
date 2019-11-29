'use strict';

const Controller = require('egg').Controller;

class PostController extends Controller {
  async create() {
    const { ctx } = this;
    await ctx.service.post.create();
  }
}

module.exports = PostController;
