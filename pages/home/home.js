import {
  getMultiData,
  getGoodsData
} from "../../service/home.js"
Page({
  data: {
    banners: [],
    recommends: [],
    types: ['pop', 'new', 'sell'],
    titles: ['流行', '新款', '精选'],
    goods: {
      pop: {
        page: 0,
        list: []
      },
      new: {
        page: 0,
        list: []
      },
      sell: {
        page: 0,
        list: []
      }
    },
    currentType: 'pop',
    isShow: false,
    isTabShow: false,
    imgScrollTop: 0
  },
  onLoad() {
    // 请求轮播图、推荐数据
    this._getMultiData();
    //请求商品数据
    this._getGoodsData('pop');
    this._getGoodsData('new');
    this._getGoodsData('sell');
  },

  //---------------网络请求函数------------
  _getMultiData() {
    getMultiData().then(res => {
      //取出轮播图和推荐数据
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      //将banners和recommends放到data中
      this.setData({
        banners,
        recommends
      })
    })
  },
  _getGoodsData(type) {
    //1.获取页码
    const page = this.data.goods[type].page + 1
    //2.发送网络请求
    getGoodsData(type, page).then(res => {
      //2.1 取出数据
      const list = res.data.data.list;
      const oldList = this.data.goods[type].list
      oldList.push(...list)
      //2.2将数据设置到对应的type中
      const typeKey = `goods.${type}.list`;
      const pageKey = `goods.${type}.page`;
      this.setData({
        [typeKey]: oldList,
        [pageKey]: page
      })
    })
  },

  //----------------事件监听函数-------------------
  handleTabClick(event) {
    //取出当前tab的index
    const index = event.detail.index;
    //设置currentType
    this.setData({
      currentType: this.data.types[index]
    })
  },
  //页面滚动到底部 上拉请求加载更多
  onReachBottom() {
    this._getGoodsData(this.data.currentType);
  },
  //popular图片加载完成
  handleImgLoad() {
    //获取图片高度 
    wx.createSelectorQuery().select("#tab-control").boundingClientRect(rect => {
      this.data.imgScrollTop = rect.top
    }).exec();
  },

  onPageScroll(option) {
    const flag1 = option.scrollTop >= 500
    //不建议频繁调用.setData() 所以外面先做一个判断
    if (flag1 != this.data.isShow) {
      this.setData({
        isShow: flag1
      })
    }
    //修改isTabShow
    const flag2 = option.scrollTop > this.data.imgScrollTop
    if (flag2 != this.data.isTabShow) {
      this.setData({
        isTabShow: flag2
      })
    }
  }
})