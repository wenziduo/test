import request from './utils/request'
export const fetchPostDetail = (data = {}) => {
  // 请求数据
  return request({
    method: 'get',
    url: '/post/detail',
    data
  })
}
