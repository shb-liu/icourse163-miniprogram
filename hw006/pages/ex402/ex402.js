// pages/ex402/ex402.js
Page({
  calc: function (e) {
    var a = parseFloat(e.detail.value.a);
    var b = parseFloat(e.detail.value.b);
    var c = parseFloat(e.detail.value.c);
    var ar;
    if (a + b <= c || a + c <= b || b + c <= a) {
      wx.showToast({
        title: '三角形的两边之和小于等于第三边，无法形成三角形',
        icon: "none",
        duration: 2000,
      })
      this.clear();
      return;
    } else {
      var l = (a + b +c) / 2;
      ar = Math.sqrt(l * (l - a) * (l - b) * (l - c))
    }
    this.setData({
      s: ar
    })
  },
  clear: function(){
    this.setData({
      a: "",
      b: "",
      c: "",
      s: ""
    })
  }
})