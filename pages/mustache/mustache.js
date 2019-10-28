Page({
  data: {
    time: new Date().toLocaleString(),
    isActive: false,
    isShow:true
  },
  handleSwitchColor() {
    this.setData({
      isActive: !this.data.isActive

    })
  },
  handleSwitchShow(){
    this.setData({
      isShow:!this.data.isShow
    })
  },
  onLoad: function(options) {
    setInterval(() => {
      this.setData({
        time: new Date().toLocaleString()
      })
    }, 1000)
  }
})