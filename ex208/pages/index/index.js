//index.js
//获取应用实例
Page({
  calc: function(e){
    var C,F;
    C = e.detail.value;
    this.setData({
      F: C * 9 / 5+ 32
    })
  }
})