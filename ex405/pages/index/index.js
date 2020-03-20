//index.js
Page({
  data: {
    background: ['bc-red', 'bc-green', 'bc-blue'],
    indicatorDots: true,
    autoplay: false,
    circular: false,
    vertical: false,
    interval: 2000,
    duration: 500,
  },
  changeIndicatorDots: function(e){
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e){
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  changeCircular: function(e){
    this.setData({
      circular: !this.data.circular
    })
  },
  changeVertical: function(e){
    this.setData({
      vertical: !this.data.vertical
    })
  }
})
