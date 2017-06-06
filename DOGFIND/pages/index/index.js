// index.js
//获取应用实例
// var app = getApp()

var util = require('../../utils/util.js')
// var formatLocation = util.formatLocation
// Page({
//   // data: {
//   //   motto: 'Hello World',
//   //   userInfo: {}
//   // },
//   // //事件处理函数
//   // bindViewTap: function () {
//   //   wx.navigateTo({
//   //     url: '../logs/logs'
//   //   })
//   // },
//   // onLoad: function () {
//   //   console.log('onLoad')
//   //   var that = this
//   //   //调用应用实例的方法获取全局数据
//   //   app.getUserInfo(function (userInfo) {
//   //     //更新数据
//   //     that.setData({
//   //       userInfo: userInfo
//   //     })
//   //   })
//   // }
//   data: {
//     hasLocation: false,

//   },
//   getLocation: function () {
//     var that = this
//     wx.getLocation({
//       success: function (res) {

//         wx.openLocation({
//           latitude: '' + res.latitude,
//           longitude: '' + res.longitude,
//         })

//         // console.log(res)
//         // that.setData({
//         //   hasLocation: true,
//         //   location: formatLocation(res.longitude, res.latitude)
//         // })
//       }
//     })
//   },
//   clear: function () {
//     this.setData({
//       hasLocation: false
//     })
//   }
// })


// Page({
//   data: {

//   },
//   onLoad: function (options) {
//     console.log('onLoad')
//     // Do some initialize when page load.
//   },
//   onReady: function () {
//     console.log('onReady')
//     // Do something when page ready.
//   },
//   onShow: function () {
//     console.log('onShow')
//     // Do something when page show.

//     wx.getLocation({
//       type: 'gcj02', //返回可以用于wx.openLocation的经纬度
//       success: function (res) {
//         var latitude = res.latitude
//         var longitude = res.longitude
//         wx.openLocation({
//           latitude: latitude,
//           longitude: longitude,
//           scale: 28
//         })
//       }
//     })
//   },
//   onHide: function () {
//     console.log('onHide')
//     // Do something when page hide.
//   },
//   onUnload: function () {
//     console.log('onUnload')
//     // Do something when page close.
//   },
//   onPullDownRefresh: function () {
//     console.log('onPullDownRefresh')
//     // Do something when pull down
//   },
//   // Event handler.
//   viewTap: function () {
//     console.log('viewTap')
//     this.setData({
//       text: 'Set some data for updating view.'
//     })
//   }
// })





// Page({
//   onReady: function (e) {
//     // 使用 wx.createMapContext 获取 map 上下文
//     this.mapCtx = wx.createMapContext('myMap')
//   },
//   getCenterLocation: function () {
//     this.mapCtx.getCenterLocation({
//       success: function (res) {
//         console.log(res.longitude)
//         console.log(res.latitude)
//       }
//     })
//   },
//   moveToLocation: function () {
//     this.mapCtx.moveToLocation()
//   },
//   translateMarker: function () {
//     this.mapCtx.translateMarker({
//       markerId: 0,
//       autoRotate: true,
//       duration: 1000,
//       destination: {
//         latitude: 23.10229,
//         longitude: 113.3345211,
//       }
//     })
//   },
//   includePoints: function () {
//     this.mapCtx.includePoints({
//       padding: [10],
//       points: [{
//         latitude: 23.10229,
//         longitude: 113.3345211,
//       }, {
//         latitude: 23.00229,
//         longitude: 113.3345211,
//       }]
//     })
//   }
// })


Page({
  data: {
    motto: '搜索中....',
    markers: [],
    // polyline: [{
    //   points: [{
    //     longitude: 113.3245211,
    //     latitude: 23.10229
    //   }, {
    //     longitude: 113.324520,
    //     latitude: 23.21229
    //   }],
    //   color: "#FF0000DD",
    //   width: 2,
    //   dottedLine: true
    // }],
    controls: [{
      id: 1,
      iconPath: '../../../image/green_tri.png',
      position: {
        left: 300,
        top: 500,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('map')
  },
  onShow: function () {
    console.log('onShow')
    // Do something when page show.
    var that = this
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        that.mapCtx.moveToLocation()
        var latitude = res.latitude
        var longitude = res.longitude
        console.log(latitude)
        var markimg = "../../image/dog.jpg"
        that.setData({
        
          markers: [{
            iconPath: markimg,
            id: 0,
            latitude: latitude,
            longitude: longitude,
            width: 50,
            height: 50
          }, {
              iconPath: markimg,
            id: 0,
            latitude: latitude - 0.001,
            longitude: longitude - 0.001,
            width: 50,
            height: 50
          }, {
              iconPath: markimg,
            id: 0,
            latitude: latitude + 0.001,
            longitude: longitude + 0.001,
            width: 50,
            height: 50
          }, {
              iconPath: markimg,
            id: 0,
            latitude: latitude,
            longitude: longitude + 0.001,
            width: 50,
            height: 50
          }, {
              iconPath: markimg,
            id: 0,
            latitude: latitude + 0.001,
            longitude: longitude,
            width: 50,
            height: 50
          }],
          motto: '你的附近有5条狗'
        })
       
      }
    })
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log('ss')
  },
  controltap(e) {
    console.log(e.controlId)
  }
})

function formatLocation(longitude, latitude) {
  if (typeof longitude === 'string' && typeof latitude === 'string') {
    longitude = parseFloat(longitude)
    latitude = parseFloat(latitude)
  }

  longitude = longitude.toFixed(2)
  latitude = latitude.toFixed(2)

  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.')
  }
}
