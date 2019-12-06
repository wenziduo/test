'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/home', controller.home.index)
  router.post('/user/login', controller.user.login)
  router.get('/classify/find', controller.classify.find) // 查找分类
  router.post('/classify/create', controller.classify.create) // 创建分类
  router.post('/post/create', controller.post.create) // 创建文章
  router.get('/post/find', controller.post.find) // 文章列表
  router.get('/post/detail', controller.post.detail) // 文章详情
  router.get('/qiniu/getQiniuToken', controller.qiniu.getQiniuToken) // 文获取七牛token
}
