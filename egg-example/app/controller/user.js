'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async login() {
    const { ctx } = this;
    const data = ctx.request.body;
    ctx.session = data;
    // console.log(ctx.session);
    await new Promise(resolve => {
      setTimeout(resolve, 500);
    });
    ctx.body = data;
  }
}

module.exports = HomeController;
