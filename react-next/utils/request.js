import axios from './axios'

function request({ method = 'get', url, data }) {
  // 判断客户端还是服务端请求数据
  const isServer = typeof window === 'undefined'
  const baseUrl = isServer ? 'http://127.0.0.1:8008' : '/api'
  // 请求数据
  return axios({
    method,
    url: baseUrl + url,
    data
  })
}
export default request
