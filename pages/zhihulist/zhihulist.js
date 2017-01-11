var util = require('../../utils/util.js')
Page({
  data: {
    stories: []
  },
  onLoad: function () {
    // 请求精选数据
    var that = this;
    util.AJAX("news/latest", function (res) {
      var data = res.data;
      // {
      // "images":Array[1],
      // "type":0,
      // "id":9138396,
      // "ga_prefix":"011016",
      // "title":"今年 CES 上发布的这个小玩意，把你和未来拉得更近了"
      //}
      var storiestitle = [];
      var ss = data.stories;
      for (var i = 0, len = ss.length; i < len; i++) {
        storiestitle.push(ss[i].title);
        console.log(ss[i].title)
      }

      that.setData({
       // stories: storiestitle
       stories:data.stories
      });
    });

  }
})
