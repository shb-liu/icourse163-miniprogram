//index.js
//获取应用实例
Page({
  createColor: function(){
    var color = [];
    var letters = "0123456789ABCDEF";
    for (var i = 0; i < 3; i++){
      var c = "#";
      for (var j = 0; j < 6; j++){
        c += letters[Math.floor(Math.random() * 16)]
      }
      color.push(c);
    }
    console.log(color);
    this.setData({
      color1: color[0],
      color2: color[1],
      color3: color[2],
    })
  },

  onLoad: function(){
    this.createColor();
    setInterval(() => {
      this.createColor();
    },5000)
  },

  changeColor: function(){
    this.createColor();
  }
})
