// pages/zj/MultiMedia/image/image.js

Page({
  data: {
    src: '../image/testImage.png', //图片路径
    imgArray: [
      { //图片显示模式及文字说明数组
        mode: 'aspectFit',
        text: 'aspectFit：保持纵横比缩放图片，使图片完整的显示出来'
      }, {
        mode: 'widthFix',
        text: 'widthFix：保持纵横比缩放图片，宽度完全显示出来'
      },{
        mode: 'scaleToFill',
        text: 'scaleToFill：不保持纵横比缩放图片，使图片拉伸适应'
      }, {
        mode: 'aspectFill',
        text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
      }, {
        mode: 'top',
        text: 'top：不缩放图片，只显示图片的顶部区域'
      }, {
        mode: 'bottom',
        text: 'bottom：不缩放图片，只显示图片的底部区域'
      }, {
        mode: 'center',
        text: 'center：不缩放图片，只显示图片的中间区域'
      }, {
        mode: 'left',
        text: 'left：不缩放图片，只显示图片的左边区域'
      }, {
        mode: 'right',
        text: 'right：不缩放图片，只显示图片的右边区域'
      }, {
        mode: 'top left',
        text: 'top left：不缩放图片，只显示图片的左上边区域'
      }, {
        mode: 'top right',
        text: 'top right：不缩放图片，只显示图片的右上边区域'
      }, {
        mode: 'bottom left',
        text: 'bottom left：不缩放图片，只显示图片的左下边区域'
      }, {
        mode: 'bottom right',
        text: 'bottom right：不缩放图片，只显示图片的右下边区域'
      }
    ]
  }
})