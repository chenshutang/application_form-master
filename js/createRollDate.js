(function ($) {
  var createRollDate = function (el, beginYear, endYear) {
    var rd = new Rolldate({
      el: el,
      format: "YYYY-MM-DD",
      beginYear: beginYear,
      endYear: endYear,
      minStep: 1,
      trigger: "tap",
      init: function () {
        console.log("插件开始触发");
      },
      moveEnd: function (scroll) {
        console.log("滚动结束");
      },
      confirm: function (date) {
        console.log("确定按钮触发");
        rd.hide();
      },
      cancel: function () {
        console.log("插件运行取消");
        rd.hide();
      },
    });
    $(el).click = function () {
      rd.show();
    };

  }
  $.createRollDate = createRollDate
})(jQuery)