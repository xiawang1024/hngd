import axios from "axios";
import Qs from "qs";
const wx = require("weixin-js-sdk");

const [DEFAULT_TITLE, DEFAULT_LINK, DEFAULT_IMGURL, DEFAULT_DESC] = [
  "河南广播电视台微信矩阵",
  "http://www.hndt.com/h5/hngd/weixin/index.html",
  "http://www.hndt.com/h5/hngd/hngd-logo.jpg",
  "《河南广播电视台》微信公众号是河南广电外宣窗口、服务窗口。"
];

let configData = {
  url: window.location.href.split("#")[0],
  jsApiList: [
    "onMenuShareTimeline",
    "onMenuShareAppMessage",
    "chooseImage",
    "previewImage",
    "startRecord",
    "playVoice",
    "stopRecord",
    "downloadVoice",
    "uploadVoice",
    "stopVoice"
  ]
};

axios
  .post(
    "https://a.weixin.hndt.com/boom/at/sign",
    Qs.stringify({ url: configData.url })
  )
  .then(res => {
    let data = res.data;
    wx.config({
      debug: false,
      appId: data.appId,
      timestamp: data.timestamp,
      nonceStr: data.nonceStr,
      signature: data.signature,
      jsApiList: configData.jsApiList
    });
  });

wx.ready(function() {
  wx.onMenuShareTimeline({
    title: DEFAULT_TITLE,
    link: DEFAULT_LINK,
    imgUrl: DEFAULT_IMGURL,
    success: function() {},
    cancel: function() {}
  });
  wx.onMenuShareAppMessage({
    title: DEFAULT_TITLE,
    link: DEFAULT_LINK,
    imgUrl: DEFAULT_IMGURL,
    desc: DEFAULT_DESC,
    type: "",
    dataUrl: "",
    success: function() {},
    cancel: function() {}
  });
});
