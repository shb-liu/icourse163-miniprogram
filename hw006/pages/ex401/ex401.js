// pages/ex401/ex401.js
var c
Page({
  calc: function(e){
    c= parseInt(e.detail.value.r);
    this.setData({
      m: (c / 6.7086).toFixed(4),
      y: (c / 8.86912).toFixed(4)
    })
  },
  cle: function(){
    this.setData({
      m: "",
      y: ""
    })
  }
})