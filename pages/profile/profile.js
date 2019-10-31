// pages/profile/profile.js
Page({
  onLoad: function(options) {
    console.log(options)
  },
  onUnload: () => {
    const pages = getCurrentPages()
    console.log(pages)
    const home = pages[pages.length - 2]
    home.setData({
      title: "hehehe"
    })
  },
  handleBack() {
    wx.navigateBack({

    })
  }
})