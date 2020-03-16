//index.js
Page({
  calc: function (e) {
    var a = parseFloat(e.detail.value.a);
    var b = parseFloat(e.detail.value.b);
    var c = parseFloat(e.detail.value.c);
    var area;
    if (a + b <= c || a + c <= b || b + c <= a) {
      wx.showToast({
        title: '三角形的两边之和小于第三边！',
        icon: "none",
        duration: 2000,
      });
      this.clear();
      return;
    } else {
      var s = (a + b + c) / 2;
      area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
    }
    this.setData({
      ar: area
    })
  },
  clear:function(){
    this.setData({
      a:'',
      b:'',
      c:'',
      ar:''
    })
  }
})