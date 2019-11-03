// pages/home/childCpn/x-tab-control/x-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick(event) {
      // 1.设置最新的currentindex
      this.setData({
        currentIndex: event.currentTarget.dataset.index
      })
      // 2.发出事件
      const data = {index:this.data.currentIndex}
      this.triggerEvent("tabClick",data,{} )
    }
  }
})