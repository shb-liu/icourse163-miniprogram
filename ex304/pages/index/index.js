//index.js
//获取应用实例
const app = getApp()
var indexMsg = 'index.js变量'
var util = require('../util/util.js')
function indexFunc(){
  return 'index.js函数'
}

Page({
  data: {
    msg1: app.globalMsg,
    msg2: app.globalFunc(),
    msg3: indexMsg,
    msg4: indexFunc(),
    msg5: util.utilMsg,
    msg6: util.utilFunc()
  }
})
