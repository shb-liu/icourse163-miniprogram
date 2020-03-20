//index.js
Page({
  data: {
    r: 50,
    g: 100,
    b: 150,
    a: 50
  },
  colorChanging: function(e){
    let color = e.currentTarget.dataset.color
    let value = e.detail.value;
    console.log(color, value)
    this.setData({
      [color]: value
    })
  }
})
