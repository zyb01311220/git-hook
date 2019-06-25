import axios from 'axios'
import {
  Message
} from 'element-ui'
import api from './api'
import {getCookie} from '../utils'
import router from '../router'

const http = axios.create({
  baseURL: api.URL(),
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  },
  responseType: 'json',
  // withCredentials: true // 跨域请求带cookie
})

// //拦截器，预处理request
http.interceptors.request.use(config => {
  let AUTH_TOKEN = (function() {
      var r = getCookie('accessTokenExpireTime');
      let nowTime = new Date().getTime();
      if (nowTime >= parseInt(r)) {
        Message.error(`用户失效，请重新登录`)
        router.push('/login')
      } else {
          return getCookie("Token");
      }
  })();
     
  if (AUTH_TOKEN) {
      config.headers.Token = AUTH_TOKEN;
  }
  return config;
})

http.interceptors.response.use(

  res => {
    res && (res.code === 20000 || res.status && res.status.code === 20000)
    return res.data
  }, error => {
    Message.error(`请求出错了!`)
    Promise.reject(error)
  }
)

const CONFIG = {
  full: true
}

http.getFull = (url, config) => {
  config = Object.assign({}, config, CONFIG, {
    url,
    method: 'get'
  })
}

http.postFull = (url, data, config) => {
  config = Object.assign({}, config, ONFIG, {
    url,
    data,
    method: 'post'
  })
}

http.all = axios.all
http.spread = axios.spread

export default http
