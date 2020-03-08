//index.js

Page({
  data: {
    imgSrc:"/images/kitty.png",
  },
  //事件处理函数
  tapCat:function(){
    let audio=wx.createInnerAudioContext();
    audio.src="/audios/meow.mp3"
    audio.play();
  }
})
