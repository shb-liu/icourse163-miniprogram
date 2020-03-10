//pages/index/index.js
//小程序页面读取顺序
Page({
  onLoad: function(){
    console.log('index.js--onLoad--页面加载')
  },
  onShow: function(){
    console.log('index.js--onShow--页面显示')
  },
  onReady: function(){
    console.log('index.js--onReady--页面首次渲染完成')
  },
  onHide: function(){
    console.log('index.js--onHide--页面隐藏')
  },
  onUnload: function(){
    console.log('index.js--onUnload--页面卸载')
  }
})
