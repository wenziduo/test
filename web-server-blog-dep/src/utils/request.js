import axios from 'axios'
import { Message } from 'antd'
var service = axios.create({
  timeout: 5000
})
//添加请求拦截器
service.interceptors.request.use(
  function(config) {
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)
//添加响应拦截器
service.interceptors.response.use(
  function(response) {
    const res = response.data
    if (!res.success) {
      Message({
        Message: res.message,
        type: 'error',
        duration: 5 * 1000
      })
    }
    return response
  },
  function(error) {
    console.log('err' + error)
    Message({
      Message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default axios
