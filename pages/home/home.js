Page({
  handleToastClick() {
    wx.showToast({
      title: 'this is toast',
      duration: 3000,
      icon: "loading"
    })
  },
  handleModalClick() {
    wx.showModal({
      title: "this is Modal's title",
      content: "this is Modal's content",
      cancelColor: "red",
      cancelText: "返回",
      success(res) {
        if (res.cancel) {
          console.log("用户点击了取消")
        }
        if (res.confirm) {
          console.log("用户点击了确认")
        }
      }
    })
  },
  handleLoadingClick() {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
  },
  handleActionSheetClick(){
    wx.showActionSheet({
      itemList: ['相册','拍摄'],
      itemColor:"red",
      success(res){
        console.log(res)
      }
    })
  }
})