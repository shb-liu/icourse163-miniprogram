//logs.js
Page({
  data: {
    score: 0,
    lv: "不及格"
  },
  gScore: function(e){
    var lv, score = e.detail.value;
    if (score < 0 || score > 100){
      lv = "输入有误"
    }else if(score < 60){
      lv = "不及格"
    }else if(score < 70){
      lv = "及格"
    }else if(score < 80){
      lv = "中等"
    }else if(score < 90){
      lv = "良好"
    }else{
      lv = "优秀"
    }
    this.setData({ //必须要有setData，将lv再赋值给lv
      lv: lv
    })
  }
})