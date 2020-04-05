//index.js

function Person(name, sex, birthPlace, birthDay, height, weight){
  this.name = name,
  this.sex = sex;
  this.birthPlace = birthPlace;
  this.birthDay = birthDay;
  this.height = height;
  this.weight = weight;
}

Page({
  data: {
    flag: true,
    gender: ["男", "女"]
  },

  nameInput: function(e){
    this.name = e.detail.value
  },
  pickerSex: function (e){
    this.sex = this.data.gender[e.detail.value]
    this.setData({
      sex: this.sex
    })
  },
  pickerRegion: function(e){
    this.birthPlace = e.detail.value
    this.setData({
      birthPlace: this.birthPlace
    })
  },
  pickerDate: function(e){
    this.birthDay = e.detail.value
    this.setData({
      birthDay: this.birthDay
    })
  },
  heightInput: function(e){
    this.height = e.detail.value
  },
  weightInput: function(e){
    this.weight = e.detail.value
  },

  showMessage: function(e){
    var p = new Person(this.name, this.sex, this.birthPlace, this.birthDay, this.height, this.weight)
    this.setData({
      flag:false,
      person: p
    })
  }
})