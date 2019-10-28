Page({
  data: {
    counter: 0,
    titles: ['衣服', '裤子', '鞋子'],
    currentIndex: 0,
    number: 0
  },
  handleBtnclick() {
    //   this.data.counter++
    //   console.log(this.data.counter)
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleItemClick(e) {
    const index = e.currentTarget.dataset.index
    this.setData({
      currentIndex: index
    })
  },
  increamt() {
    this.setData({
      number: this.data.number + 1
    })
  }
})