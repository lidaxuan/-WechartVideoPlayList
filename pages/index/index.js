//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    videoPlay: null,
    dataList: [],
  },
  onLoad: function () {
    this.getData();
    wx.hideShareMenu();
  },
  // 点击cover播放，其它视频结束
  videoPlay: function (e) {
    var _index = e.currentTarget.dataset.id
    this.setData({
      _index: _index
    })
    //停止正在播放的视频
    var videoContextPrev = wx.createVideoContext(_index+"")
    videoContextPrev.stop();

    setTimeout(function () {
      //将点击视频进行播放
      var videoContext = wx.createVideoContext(_index + "")
      videoContext.play();
    }, 500)
  },
  // 模拟数据加载
  getData: function () {
    
    this.setData({
      dataList: [{ "id": 6193654, "title": "东西不是随便捡的😂😂😂", "content": "https://vd3.bdstatic.com/mda-ik893hv2pn0e6icz/mda-ik893hv2pn0e6icz.mp4", "cover": "http://pic.rmb.bdstatic.com/mvideo/cde67c41211d7a46c1fb87138935b912" }, { "id": 6193715, "title": "女儿让这位站着睡觉的叔叔坐下来，他却说他裤子脏", "content": "https://vd4.bdstatic.com/mda-ikaj5wrax5hhat0x/mda-ikaj5wrax5hhat0x.mp4", "cover": "http://pic.rmb.bdstatic.com/mvideo/90ffc39a988814ee6ddb563bd65627cd.jpg" }, { "id": 6193729, "title": "大师画的栩栩如生，长见识了……", "content": "https://vd3.bdstatic.com/mda-ik2qi39hidvchxa4/mda-ik2qi39hidvchxa4.mp4", "cover": "http://pic.rmb.bdstatic.com/mvideo/175dcae5e199448798aff444b8b672f4" }, { "id": 6193504, "title": "高手啊。居然能听出来反了。😂😂", "content": "https://vd3.bdstatic.com/mda-ik612hibuvsh1y00/mda-ik612hibuvsh1y00.mp4", "cover": "http://pic.rmb.bdstatic.com/mvideo/caf3df828a3d03c49c28e27f79c93416" }, { "id": 6193932, "title": "就算你是开宝马的，当你回到父母身边，你照样要义无反顾解决他们的问题😂", "content": "https://vd3.bdstatic.com/mda-ik7z53vapnv0x0cq/mda-ik7z53vapnv0x0cq.mp4", "cover": "http://pic.rmb.bdstatic.com/mvideo/891bdb85cfa665e8689462971c5a89e3" }, { "id": 6193576, "title": "到底谁模仿的谁", "content": "https://vd4.bdstatic.com/mda-ik7jyzzq1vvjfqjr/mda-ik7jyzzq1vvjfqjr.mp4", "cover": "http://pic.rmb.bdstatic.com/mvideo/486fc076283e9aa0234ea056f6e8721d.jpg" }, { "id": 6193803, "title": "这样是不是可以证明平行四边形与三角形的面积相等？？？", "content": "https://vd3.bdstatic.com/mda-ik9r462613sh3zgq/mda-ik9r462613sh3zgq.mp4", "cover": "http://pic.rmb.bdstatic.com/mvideo/1b0095e399038fccc650877bfc7d9297.jpg" }, { "id": 6193883, "title": "隐形门！😂😂😂", "content": "https://vd3.bdstatic.com/mda-ik6254k2dwqi75zr/mda-ik6254k2dwqi75zr.mp4", "cover": "http://pic.rmb.bdstatic.com/mvideo/70a0790d49998653eb2deb1cadfbdf93" }, { "id": 6193586, "title": "奶奶年轻时没有穿过高跟鞋。爷爷用竹子给他做了一双高跟鞋。", "content": "https://vd3.bdstatic.com/mda-ik7ttupvie4s7v4r/mda-ik7ttupvie4s7v4r.mp4", "cover": "http://pic.rmb.bdstatic.com/mvideo/d6bc26f7a6af464a270c78567cefb14d.jpg" }, { "id": 6193639, "title": "周冬雨的弟弟周冬瓜 妹妹周东西", "content": "https://vd4.bdstatic.com/mda-ijwedhfai80dc5qu/mda-ijwedhfai80dc5qu.mp4", "cover": "http://pic.rmb.bdstatic.com/mvideo/a3058df458032c4da9d775f6fea5b9ef" }]
    });

  }
})