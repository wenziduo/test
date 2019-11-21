'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    const data = {
      name: '首页',
    };
    await new Promise(resolve => {
      setTimeout(resolve, 500);
    });
    ctx.body = data;
  }
}

module.exports = HomeController;
