// pages/ex403/ex403.js
Page({
  data: {
    mS: '25px'
  },
  cbC: function(e){
    var text = [];
    var mb = '';
    var mi = '';
    var mu = '';
    text = e.detail.value;
    for (var i = 0; i < text.length; i++){
      if (text[i] == 'iB'){
        mb = 'bold';
      }
      if (text[i] == 'iI'){
        mi = 'italic';
      }
      if (text[i] == 'iU'){
        mu = 'underline';
      }
    }
    this.setData({
      mB: mb,
      mI: mi,
      mU: mu,
    })
  },
  rC: function(e){
    this.setData({
      mS: e.detail.value
    })
  }
})