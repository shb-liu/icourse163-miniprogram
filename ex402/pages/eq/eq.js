// pages/eq/eq.js
Page({
  calc: function (e) {
    var a = parseFloat(e.detail.value.a);
    var b = parseFloat(e.detail.value.b);
    var c = parseFloat(e.detail.value.c);
    if (b * b - 4 * a * c < 0) {
      this.clear()
      wx.showToast({
        title: '无法计算',
        icon: "none",
        duration: 2000
      })
      return
    } else {
      var reo, ret;
      reo = (-b + Math.sqrt(b * b - 4 * a * c)) / 2
      ret = (-b - Math.sqrt(b * b - 4 * a * c)) / 2
    }
    var ro, rt;
    this.setData({
      ro: reo,
      rt: ret
    })
  },
  clear: function () {
    this.setData({
      a: "",
      b: "",
      c: "",
      ro: "",
      rt: ""
    })
  }
})