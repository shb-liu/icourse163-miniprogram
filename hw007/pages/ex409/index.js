// pages/zj/MultiMedia/video/video.js
function getRandomColor() { //获取随机颜色函数
  let rgb = [] //定义存放RGB三种颜色值分量的数组
  for (let i = 0; i < 3; ++i) { //创建3个2位16进制随机数（1种随机颜色）
    let color = Math.floor(Math.random() * 256).toString(16) //产生0-255之间的16进制随机数
    color = color.length == 1 ? '0' + color : color //将1位16进制数变为2位
    rgb.push(color) //将2位16进制随机数加入数组
  }
  return '#' + rgb.join('') //将3个数组元素连接成颜色值字符串并返回
}

Page({
  data: {
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }
    ]
  },

  onLoad: function(options) {    
    this.videoCtx = wx.createVideoContext('myVideo')//创建视频上下文
  },

  inputBlur: function(e) { //input组件失去焦点事件函数
    this.inputValue = e.detail.value //获取输入框中的数据
  },

  sendDanmu: function() { //button组件点击事件函数
    this.videoCtx.sendDanmu({ //发送弹幕
      text: this.inputValue, //弹幕文本
      color: getRandomColor() //弹幕文本颜色
    })
  }
})