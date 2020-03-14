//index.js
Page({
  data: {
    score: 0    
  },
  gScore: function(e){
    this.setData({
      score: e.detail.value
    })
  }
})