// pages/fly/fly.js
Page({

  /**
   * Page initial data
   */
  data: {
    
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.popup1 = this.selectComponent("#popup");
    this.popup2 = this.selectComponent("#popup1");
    this.popup3 = this.selectComponent("#popup2");
    this.popup4 = this.selectComponent("#popup3");
    this.popup5 = this.selectComponent("#popup4");
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  showPopup1() {
    
    this.popup1.showPopup();
    
  },
  showPopup2() {
    
    this.popup2.showPopup();
    
  },
  showPopup3() {
    
    this.popup3.showPopup();
    
  },
  showPopup4() {
    
    this.popup4.showPopup();
    
  },
  showPopup5() {
    
    this.popup5.showPopup();
    
  },
 
  //取消事件
  _error1() {
    // this.popup1.hidePopup();
    
    this.triggerEvent("error")
  },
  //确认事件
  _success1() {
    wx.redirectTo({       
      url: '../../pages/imge/imge?name=无扰看电影&money=30'    
      })
    // this.popup1.hidePopup();
    this.triggerEvent("error")
  },
  //取消事件
  _error2() {
    // this.popup1.hidePopup();
    
    this.triggerEvent("error")
  },
  //确认事件
  _success2() {
    wx.redirectTo({       
      url: '../../pages/imge/imge?name=无扰去健身&money=30'    
      })
    // this.popup1.hidePopup();
    this.triggerEvent("error")
  },
  //取消事件
  _error3() {
    // this.popup1.hidePopup();
    
    this.triggerEvent("error")
  },
  //确认事件
  _success3() {
    wx.redirectTo({       
      url: '../../pages/imge/imge?name=无扰睡jiojio&money=50'    
      })
    // this.popup1.hidePopup();
    this.triggerEvent("error")
  },
  //取消事件
  _error4() {
    // this.popup1.hidePopup();
    
    this.triggerEvent("error")
  },
  //确认事件
  _success4() {
    wx.redirectTo({       
      url: '../../pages/imge/imge?name=无扰兄弟时间&money=50'    
      })
    // this.popup1.hidePopup();
    this.triggerEvent("error")
  },
  //取消事件
  _error5() {
    // this.popup1.hidePopup();
    
    this.triggerEvent("error")
  },
  //确认事件
  _success5() {
    wx.redirectTo({       
      url: '../../pages/imge/imge?name=无扰自由活动&money=100'    
      })
    // this.popup1.hidePopup();
    this.triggerEvent("error")
  }
})
