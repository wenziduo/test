'use strict';

const Controller = require('egg').Controller;

class ClassifyController extends Controller {
  async create() {
    const { ctx } = this;
    await ctx.service.classify.create();
  }
  async find() {
    const { ctx } = this;
    await ctx.service.classify.find();
  }
}

module.exports = ClassifyController;
