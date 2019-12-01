import request from './utils/request'
export const fetchPostDetail = async function(data = {}) {
  // 请求数据
  return await request({
    method: 'get',
    url: '/post/detail',
    data
  })
}
