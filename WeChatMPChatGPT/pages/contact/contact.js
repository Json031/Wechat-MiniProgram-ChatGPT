// pages/contact/contact.js
const app = getApp();
var inputVal = '';
var msgList = [];
var windowWidth = wx.getSystemInfoSync().windowWidth;
var windowHeight = wx.getSystemInfoSync().windowHeight;
var keyHeight = 0;
const recorderManager = wx.getRecorderManager();
/**
 * @todo 下方通信地址的数据协议需确保一致，否则需调整解析处理
 * The data protocol of the communication address below needs 
 * to be consistent, otherwise the parsing process needs to be adjusted
 */
/**
 * ChatGPT websocket通信地址
 * @todo 替换成你的wss地址 Replace with your wss url
 */
const wssurl = "wss://ai.demo.com";
/**
 * 画图功能http通信地址
 * Drawing function HTTP communication address
 * @todo 替换成你的http地址 Replace with your http url
 */
const drawImgUrl = 'https://ai.demo.com/api/T2I_api';
/**
 * 语音识别http通信地址
 * Speech recognition HTTP communication address
 * @todo 替换成你的http地址 Replace with your http url
 */
const sttUrl = 'https://ai.demo.com/ASR_api';
/**
 * 弃用，已改成wss通信
 * Abandoned, changed to WS communication
 * @todo 替换成你的http地址 Replace with your http url
 */
const gptApiUrl = 'https://ai.demo.com/chatGPT_api'
/**
 * 初始化数据
 */
function initData(that) {
 inputVal = '';
 
 msgList = [
 ]
 that.setData({
  msgList,
  inputVal
 })
}
 
/**
 * 计算msg总高度
 */
// function calScrollHeight(that, keyHeight) {
//  var query = wx.createSelectorQuery();
//  query.select('.scrollMsg').boundingClientRect(function(rect) {
//  }).exec();
// }
 
Page({
    
 /**
  * 页面的初始数据
  */
 data: {
  scrollHeight: '100vh',
  inputBottom: 0,
  ques: '',
  scrollTop:'',
  is_clock:false,
  textEditing:true,
  focus:true,
  socket: null
 },
 
 /**
  * 生命周期函数--监听页面加载
  */
 onLoad: function(options) {
  initData(this);
  this.setData({
　　　　bottomHeight : app.globalData.bottomHeight 
　　})
 },
 
 /**
  * 生命周期函数--监听页面显示
  */
 onShow: function() {
 
 },
 
 /**
  * 页面相关事件处理函数--监听用户下拉动作
  */
 onPullDownRefresh: function() {
 
 },
 
 /**
  * 页面上拉触底事件的处理函数
  */
 onReachBottom: function() {
 
 },
 
 /**
  * 获取聚焦
  */
 focus: function(e) {
  keyHeight = e.detail.height;
  this.setData({
   scrollHeight: (windowHeight - keyHeight) + 'px'
  });
  this.setData({
   toView: 'msg-' + (msgList.length - 1),
   inputBottom: keyHeight + 'px'
  })
  //计算msg高度
  // calScrollHeight(this, keyHeight);
 
 },
 
 //失去聚焦(软键盘消失)
 blur: function(e) {
  this.setData({
   scrollHeight: '100vh',
   inputBottom: 0
  })
  this.setData({
   toView: 'msg-' + (msgList.length - 1)
  })
 
 },
 
 /**
  * 发送点击监听
  */
 sendClick: function(e) {
  msgList.push({
   speaker: 'customer',
   contentType: 'text',
   content: this.data.ques
  })
  msgList.push({
   speaker: 'loading',
   contentType: 'gif',
   content: ""
  })
  inputVal = '';
  this.setData({
   msgList,
   inputVal
  });
  this.pageScrollToBottom()
  var that = this; 
  //画一只白色的猫
  if (this.data.ques.toLowerCase().includes('draw') || this.data.ques.toLowerCase().includes('generate an image') || this.data.ques.includes('画') || this.data.ques.includes('张图')) {
    wx.request({
      url: drawImgUrl,
      method: "GET",
      data:{
          'txt':that.data.ques
      },
      success: function(res) {
          that.refreshMsgList('aiimg', res.data)
          that.pageScrollToBottom()
      },fail:function(res){
          that.refreshMsgList('server', res.errMsg + " Please ensure that the network is available.")
          console.log("fail",res);
          that.pageScrollToBottom()
      }
      })  
      return
  }
  if (this.data.socket == null) {
    //建立socket链接
    this.data.socket = wx.connectSocket({
        url:  wssurl
    , success(res) {
          console.log('res' + res.errMsg)
      }, fail(res) {        
          that.refreshMsgList('server', res.errMsg + " Please ensure that the network is available.")
          console.log("fail",res);
          that.pageScrollToBottom()  
      }            
  })
  
      // onOpen
      this.data.socket.onOpen((res) => {
          wx.sendSocketMessage({
            data: that.data.ques
        })
        })
        // onMessage
        this.data.socket.onMessage((res) => {
          if (msgList[msgList.length - 1].speaker == "loading") {
              that.refreshMsgList('server', res.data)
          } else {
              msgList[msgList.length - 1].content += res.data
              that.setData({
               msgList
              });
          }
          that.pageScrollToBottom()
        })
        // onError
        this.data.socket.onError((err) => {
          console.log('WebSocket 连接失败：', err)
        })
        // onClose
        this.data.socket.onClose((res) => {
          if (res.code != 1000) {
            that.refreshMsgList('server', res.reason + " Please ensure that the network is available.")
            that.pageScrollToBottom()
        }
            console.log('closed')
        })  
  } else {
    wx.sendSocketMessage({
      data: that.data.ques
    })
  }
  //请写一首春游相关的诗
//   wx.request({
//     url: gptApiUrl,
//     method: "GET",
//     data:{
//         'info':this.data.ques
//     },
//     success: function(res) {
//         that.refreshMsgList('server', res.data)
//         that.pageScrollToBottom()
//     },fail:function(res){
//         that.refreshMsgList('server', res.errMsg + " Please ensure that the network is available.")
//         console.log("fail",res);
//         that.pageScrollToBottom()
//     }
//     })
 
 },
   pageScrollToBottom: function() {
    var that = this;
    wx.createSelectorQuery().select('#contentbg').boundingClientRect(function(rect) {
      if (rect){
        that.setData({
          scrollTop: rect.bottom +6000
        })
      }
    }).exec()
  },
  refreshMsgList:function(speaker, res) {
    res = res.replace(/        /g,'\n\r\t');
    if (msgList[msgList.length - 1].speaker == "loading") {
        msgList.splice(msgList.length-1,1);
    }
    msgList.push({
     speaker: speaker,
     contentType: 'text',
     content: res
    })
    inputVal = '';
    this.setData({
     msgList,
     inputVal
    });
  },
 
 /**
  * 退回上一页
  */
 toBackClick: function() {
  wx.navigateBack({})
 },
 changeQues (e) {
     this.setData({
        'ques': e.detail.value
     })
 },
 copyTBL:function(e){
    var self=this;
    wx.setClipboardData({
    data: e.currentTarget.dataset.copytxt,
    success: function(res) {
    }
   });
},
handleRecordStart: function(e) {
    this.setData({
      is_clock:true,//长按时应设置为true，为可发送状态
      startPoint: e.touches[0],//记录触摸点的坐标信息
})
//设置录音参数
    const options = {
      duration: 10000,
      sampleRate: 16000,
      numberOfChannels: 1,
      encodeBitRate: 48000,
      format: 'mp3'
}
//开始录音
    recorderManager.start(options);
  },
  handleRecordStop:function(e){
    recorderManager.stop()//结束录音
     //此时先判断是否需要发送录音
      if (this.data.is_clock == true) {
        this.setData({
          is_clock:false
        })
        var that = this
    //对停止录音进行监控
        recorderManager.onStop((res) => {
      //对录音时长进行判断，少于1s的不进行发送，并做出提示
      if(res.duration<1000){
wx.showToast({
              title: '录音时间太短，请长按录音',
              icon: 'none',
              duration: 1000
            })
}else{
  //进行语音发送
  const {
        tempFilePath
      } = res;// 转换为式分秒
      let second = res.duration / 1000
      let m = parseInt(second / 60 % 60)
      let s = parseInt(second % 60)
       s = (s < 10 && m > 0) ? '0' + s : s
      msgList.push({
       speaker: 'minevoice',
       contentType: 'text',
       content: m > 0 ? (m + ":" + s + "\"") : (s + "\"")
      })
      msgList.push({
       speaker: 'loading',
       contentType: 'gif',
       content: ""
      })
      inputVal = '';
      this.setData({
       msgList,
       inputVal
      });
      this.pageScrollToBottom()
      //上传录制的音频
      wx.uploadFile({
        url: sttUrl,
        filePath: tempFilePath,
        name: 'file',
        success: function(event) {
            that.refreshMsgList('server', event.data)
            that.pageScrollToBottom()
        }, fail: function(event) {
            that.refreshMsgList('server', event.errMsg + " Please ensure that the network is available.")
            console.log("fail",res);
            that.pageScrollToBottom()
        }
      })
}
        })
      }    
  },
  handleTouchMove:function(e){
    //计算距离，当滑动的垂直距离大于25时，则取消发送语音
     if (Math.abs(e.touches[e.touches.length - 1].clientY - this.data.startPoint.clientY)>25){
       this.setData({
         is_clock: false//设置为不发送语音
       })
     }
   },
   changeEditMode:function() {
    this.setData({
        textEditing: !this.data.textEditing
      })
      this.setData({
          focus: this.data.textEditing
        })
   }
 
})