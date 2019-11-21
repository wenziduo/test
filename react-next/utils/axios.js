//lib/axios.js
import axios from 'axios'
import NProgress from 'nprogress'

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.withCredentials = true
axios.defaults.timeout = 5000

//请求之前
axios.interceptors.request.use(config => {
  if (process.broswer) NProgress.start() //加一个loading
  return config
})

//
axios.interceptors.response.use(
  response => {
    // console.log('-------axiosResponse---------')
    if (process.broswer) NProgress.done()
    return response
  },
  error => {
    // console.log('-------axiosError---------:');
    // console.log(error.response.status==401)
    if (process.broswer) NProgress.done()
    if (error.response && error.response.status == 401) {
      window.location.href = '/login' //登录失效跳转
    }
    return Promise.reject(error)
  }
)

export default axios
