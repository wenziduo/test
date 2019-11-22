import request from './utils/request'
export const fetchTask = (data = {}) => {
  // 请求数据
  return request({
    method: 'get',
    url: '/home',
    data
  })
}
