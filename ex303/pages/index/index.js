//index.js
//获取应用实例
Page({
  data: {
    a: 10,
    b: 20,
    c: 30,
    student:{
      stID: '1234567',
      name: 'Ti',
      birth: '2020-3-10'
    },
    ar: [
      '123', '234', '345'
    ]
  },
  newData: function(){
    this.setData({
      a: 100,
      b: 200,
      c: 300,
      student: {
        stID: '01234567',
        name: 'Tii',
        birth: '20201-3-10'
      },
      ar: [
        '0123', '0234', '0345'
      ]
    })
  }
})