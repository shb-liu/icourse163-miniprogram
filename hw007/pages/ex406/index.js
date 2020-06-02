/*index.js*/

function Person(name, sex, birthPlace, birthDay, height, weight) { //定义构造函数，用于创建对象
  this.name = name; //将函数参数赋值给对象属性
  this.sex = sex;
  this.birthPlace = birthPlace;
  this.birthDay = birthDay;
  this.height = height;
  this.weight = weight;
}

Page({
  data: { //初始数据
    flag: true, //个人信息显示标记，开始不显示
    gender: ["男", "女"]
  },

  nameInput: function(e) { //姓名input组件输入事件函数
    this.name = e.detail.value //获取input组件value值
  },
  pickerSex: function(e) { //性别picker组件事件函数
    this.sex = this.data.gender[e.detail.value] //获取性别
    this.setData({
      sex: this.sex //选择完成后在视图层picker组件后面显示性别
    })
  },
  pickerRegion: function(e) { //地区picker组件事件函数
    this.birthPlace = e.detail.value; //获取籍贯
    this.setData({
      birthPlace: this.birthPlace //选择完成后在视图层picker组件后面显示籍贯
    })
  },
  pickerDate: function(e) { //日期picker组件事件函数
    this.birthDay = e.detail.value //获取生日
    this.setData({
      birthDay: this.birthDay //选择完成后在视图层picker组件后面显示生日
    })
  },
  heightInput: function(e) { //身高input组件输入事件函数
    this.height = e.detail.value //获取身高
  },
  weightInput: function(e) { //体重input组件输入事件函数
    this.weight = e.detail.value //获取体重
  },

  showMessage: function(e) { //button组件事件函数   
    var p = new Person(this.name, this.sex, this.birthPlace, this.birthDay, this.height, this.weight) //利用构造函数创建对象
    this.setData({
      flag: false, //设置显示
      person: p //对象赋值
    })
  }
})