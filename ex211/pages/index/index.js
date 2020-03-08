//index.js
//获取应用实例
var start, end, sum;
Page({
  startNum: function(e){
    start = parseInt(e.detail.value);
  },

  endNum: function(e){
    end = parseInt(e.detail.value);
  },

  calc: function(){
    sum = 0;
    for (var i = start; i <=end; i++){
      sum = sum + i;
    }
    this.setData({
      sum: sum
    })
  },
})