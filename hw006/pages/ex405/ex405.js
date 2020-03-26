// pages/ex405/ex405.js
Page({
  data: {
    bg: ['bgr', 'bgg', 'bgb'],
    id: false,
    ap: true,
    cc: true,
    vt: false,
    it: 2,
    dr: 500
  },
  cid: function(e){
    this.setData({
      id: !this.data.id
    })
  },
  cap: function(e){
    this.setData({
      ap: !this.data.ap
    })
  },
  ccc: function(e){
    this.setData({
      cc: !this.data.cc
    })
  },
  cvt: function(e){
    this.setData({
      vt: !this.data.vt
    })
  },
  cit: function(e){
    this.setData({
      it: e.detail.value
    })
  }
})