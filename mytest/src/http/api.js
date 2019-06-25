const api = {
  env: process.env.NODE_ENV,
  testURL: "http://l-zcgdev10.dev.cn2.corp.agrant.cn:9402/",
  pubURL: "http://l-zcgtest10.dev.cn2.corp.agrant.cn:9208",
  URL: function () {
    return this.env === 'production' ? this.pubURL : this.testURL
  }
}
export default api
