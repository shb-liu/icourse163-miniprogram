// pages/zj/CandidateInforReg/detail/detail.js

Page({
  data: {
    array: [
      '第一场15:00', 
      '第二场16:20', 
      '第三场17:40'
    ]
  },

  formSubmit: function (e) {
    var name = e.detail.value.name;  //获取姓名输入框内容
    var id = e.detail.value.id; //获取学号输入框内容
    var time=e.detail.value.time; //获取考试场次序号及时间
    wx.showModal({  //显示模态对话框
      title: '确认信息',
      content: e.detail.value.name + "同学，你的学号是："+id+"，你选择的场次是："+this.data.array[time]+",请确认信息！",
      success: function (res) {  //wx.showModal接口调用成功的回调函数
        if (res.confirm) {
          wx.showModal({
            title: '信息确认',
            content: '你的考场信息已经确认！',
          })
          wx.navigateTo({  //页面跳转
            url: '../index/index',
          })
        } else {
          console.log('用户点击取消')
        }
      }
    })
  },

  chooseTime: function (e) {
    var index = e.detail.value  //获得picker组件选项下标
    this.setData({
      index: index
    })
  }
}) 