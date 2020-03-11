//index.js
Page({
  //data: {
  //  color: 'red',
  //  length: 15
  //},
  changeColor: function(e){
    this.setData({
      color: e.detail.value
    })
  },
  changeLength: function(e){
    this.setData({
      length: e.detail.value
    })
  }
})
