// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgPath: ''
  },
  handleClick() {
    wx.chooseImage({
      success: (res) => {
        console.log(res)
        const path = res.tempFilePaths
        this.setData({
          imgPath: path
        })
      },
    })
  }
})