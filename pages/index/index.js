// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    status: '',
    wifiNearby: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const self = this
    wx.getNetworkType({
      success: function (res) {
        // 返回网络类型, 有效值：
        // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
        const networkType = res.networkType
        console.log(111111, networkType)
        // 当网络环境为wifi时，获取Wi-Fi信息
        if (networkType === 'wifi') {
          console.log('获取Wi-Fi信息')
          wx.getConnectedWifi({
            success: function (res) {
              console.log(res)
              self.setData({
                name: res.wifi.SSID,
                status: true
              })
            }
          })
        }
      }
    })
    wx.startWifi({
      success: function (res) {
        console.log(222, res)
        wx.getWifiList({
          success: function (res) {
            wx.onGetWifiList(
              function (res) {
                console.log(333, res)
              }
            )  
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})