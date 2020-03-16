//index.js
var c;
Page({
  calc: function(e){
    c = parseInt(e.detail.value.ip);
    this.setData({
      m: (c / 6.7086).toFixed(4),
      y: (c / 8.86912).toFixed(4),
      g: (c / 0.85474).toFixed(4),
      o: (c / 7.56751).toFixed(4), 
      h: (c / 0.00594).toFixed(4),
      r: (c / 0.06021).toFixed(4),
    })
  },
  reset: function(){
    this.setData({
      m: "",
      y: "",
      g: "",
      o: "",
      h: "",
      r: ""
    })
  }
})
