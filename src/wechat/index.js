
import axios from 'axios'
import Qs from 'qs'
const wx = require('weixin-js-sdk')

const [
    DEFAULT_TITLE,
    DEFAULT_LINK,
    DEFAULT_IMGURL,
    DEFAULT_DESC
] = [
    '河南广播电视台——广播微博矩阵',
    'http://www.hndt.com/h5/hndt/weibo/index.html',
    'http://www.hndt.com/res/logo_300.png',
    '河南广播，最新的内容资讯及时看，最新的电台声波及时听！'
]


let configData = {
    url: window.location.href.split('#')[0],
    jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'chooseImage',
        'previewImage',
        'startRecord', 
        'playVoice', 
        'stopRecord', 
        'downloadVoice',
        'uploadVoice',
        'stopVoice'
    ]
}

axios.post('https://a.weixin.hndt.com/at/sign',Qs.stringify({url:configData.url})).then((res) => {
    let data = res.data
    wx.config({
        debug: false, 
        appId: data.appId, 
        timestamp: data.timestamp,
        nonceStr: data.nonceStr, 
        signature: data.signature,
        jsApiList: configData.jsApiList
    });
})


wx.ready(function() {
    wx.onMenuShareTimeline({
    title:DEFAULT_TITLE, 
    link: DEFAULT_LINK, 
    imgUrl: DEFAULT_IMGURL, 
    success: function() {
        
    },
    cancel: function() {
        
    }
    });
    wx.onMenuShareAppMessage({
        title:DEFAULT_TITLE,
        link: DEFAULT_LINK, 
        imgUrl: DEFAULT_IMGURL, 
        desc: DEFAULT_DESC, 
        type: '', 
        dataUrl: '', 
        success: function() {
            
        },
        cancel: function() {
            
        }
    });
})



