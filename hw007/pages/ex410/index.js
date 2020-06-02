// pages/zj/CandidateInforReg/index.js
Page({
  data: {
    getEmail: '',
    getPwd: '',
    getPwdConfirm: ''
  },
  formSubmit: function(e) { //提交表单（点击注册按钮）事件
    if (e.detail.value.email.length == 0 || e.detail.value.password.length == 0) { //判断邮箱和密码输入框内容是否为空。
      this.setData({
        showMsg01: '邮箱或密码不得为空！',
      })
    } else if (e.detail.value.password != e.detail.value.confirm) { //判断密码和确认密码是否一致
      this.setData({
        showMsg02: '两次输入密码不一致！',
        getPwd: '', //清空输入框内容
        getPwdConfirm: ''
      })
    } else {
      wx.navigateTo({ //页面跳转
        url: '../detail/detail',
      })
    }
  },
  inputemail: function(e) { //input组件事件函数
    var email = e.detail.value
    var checkedNum = this.checkEmail(email)
  },

  checkEmail: function(email) { //自定义函数，检查输入的邮箱地址是否满足要求
    let str = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/ //正则表达式
    if (str.test(email)) { //检查正则表达式是否符合邮箱地址要求
      return true
    } else {
      wx.showToast({ //显示消息提示框
        title: '邮箱格式错误',
        icon: 'loading'
      })
      this.setData({
        getEmail: ''
      })
      return false
    }
  }
})