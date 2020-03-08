//index.js
//获取应用实例
var time = 0;
var timeID;

Page({
  data: {
    time: time,
  },

  start: function() {
    timeID = setInterval(() => {
      this.setData({
        time: time++
      })
    }, 1000)
    /*  timeID = setInterval(() => {
        this.timer()
      },1000)*/
  },

  stop: function(){
    clearInterval(timeID)
  },

/*  timer: function() {
    //console.log(time)
    this.setData({
      time: time++
    })
    //console.log(time)
  },
*/
})