// pages/zj/MultiMedia/audio/audio.js
Page({
  data: {
    poster: 'http://p1.music.126.net/ZOkr1NI-WGGRuc5-G_7-CA==/109951164332837488.jpg?param=300y300', //音频封面的图片资源地址
    name: 'MOM',
    author: '蜡笔小心',
    src: 'http://m7.music.126.net/20200405232949/1f140e0e7933a4813c9e28c48a5ecea3/ymusic/515d/0159/0052/f7f6e631b063359b4fdd7889d9d73977.mp3',
  },

  onLoad: function (options) {
    // 页面初始化, options为页面跳转所带来的参数
    this.audioCtx = wx.createAudioContext('myAudio')  //创建音频上下文
  },
  audioPlay: function () {
    this.audioCtx.play()  //播放音频
  },
  audioPause: function () {
    this.audioCtx.pause()  //暂停播放
  },
  audio14: function () {
    this.audioCtx.seek(14)  //播放位置移动到14秒
  },
  audioStart: function () {
    this.audioCtx.seek(0)   //播放位置移动到开始
  }  
})