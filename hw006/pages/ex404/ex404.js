// pages/ex404/ex404.js
Page({
  data: {
    r: 50,
    g: 100,
    b: 150,
    a: 0.80
  },
  cc: function(e){
    let color = e.currentTarget.dataset.color
    let value = e.detail.value
    this.setData({
      [color]: value
    })
  }
})