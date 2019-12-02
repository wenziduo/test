import request from './utils/request'
// 请求文章详情数据
export const fetchPostDetail = async function(data = {}) {
  return await request({
    method: 'get',
    url: '/post/detail',
    data
  })
}
// 请求文章列表
export const fetchPostList = async function(data = {}) {
  return await request({
    method: 'get',
    url: '/post/find',
    data
  })
}
// 请求分类数据
export const fetchClassifyList = async function(data = {}) {
  return await request({
    method: 'get',
    url: '/classify/find',
    data
  })
}
