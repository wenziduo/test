'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const data = {
      name: '首页',
    };
    await new Promise(resolve => {
      setTimeout(resolve, 3000);
    });
    await ctx.render('home', data);
  }
}

module.exports = HomeController;
