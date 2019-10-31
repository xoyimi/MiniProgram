Page({
 data:{
   title:"hahah"
 },
  handlePushProfile(){
    wx.navigateTo({
      url: '/pages/profile/profile?key=value',
    })
    // wx.redirectTo({
    //   url: '',
    // })
  }
})