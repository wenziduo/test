'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const data = {
      name: '首页',
    };
    ctx.cookies.get('SESSION_IDs', '666666');
    console.log('ctx.session', ctx.session);
    console.log('ctx.cookie', ctx.cookies.get('SESSION_IDs'));
    // console.log('ctx.cookies', ctx.request);
    await new Promise(resolve => {
      setTimeout(resolve, 500);
    });
    ctx.body = data;
  }
}

module.exports = HomeController;
