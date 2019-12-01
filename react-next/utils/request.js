import axios from 'axios'
import { notification } from 'antd'

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
      notification.error({
        message: '错误提示',
        description: res.message
      })
    }
    console.log('response', response)
    return res
  },
  function(error) {
    notification.error({
      message: '错误提示',
      description: '服务错误！'
    })
    return Promise.reject(error)
  }
)

function request({ method = 'get', url, data }) {
  // 判断客户端还是服务端请求数据
  const isServer = typeof window === 'undefined'
  const baseUrl = isServer ? 'http://127.0.0.1:8008' : '/api'
  // 请求数据
  if (method === 'get' || method === 'GET') {
    return service({
      method,
      url: baseUrl + url,
      params: data
    })
  }
  if (method === 'post' || method === 'POST') {
    return service({
      method,
      url: baseUrl + url,
      data
    })
  }
}
export default request
