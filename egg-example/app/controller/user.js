'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async login() {
    const { ctx } = this;
    const { userKey } = ctx.request.body;
    const data = {
      name: '登录',
      userKey,
    };
    ctx.session.userKey = data.userKey;
    console.log(ctx.session);
    await new Promise(resolve => {
      setTimeout(resolve, 500);
    });
    ctx.body = data;
  }
}

module.exports = HomeController;
