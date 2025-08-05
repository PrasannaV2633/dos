(function (e) {
  e.fn.showUp = function (t, n) {
    n = n || {};
    var r = e(t);
    var i = n.down || "navbar-hide";
    var s = n.up || "navbar-show";
    var o = n.btnHideShow || ".btn-hide-show";
    var u = n.offset || 110;
    var a = 0;
    e(window).scroll(function () {
      if (e(this).scrollTop() > u) {
        if (e(this).scrollTop() > a) {
          r.removeClass(s).addClass(i);
        } else {
          r.removeClass(i).addClass(s);
        }
      }
      a = e(this).scrollTop();
    });
    e(o).click(function () {
      if (r.hasClass(i)) {
        r.removeClass(i).addClass(s);
      } else {
        r.removeClass(s).addClass(i);
      }
    });
  };
})(jQuery);
$(document).ready(function () {
  var e = 420;
  var t = 220;
  var n = ".btn-fixed-bottom";
  var r = ".back-to-top";
  $(window).scroll(function () {
    if ($(this).scrollTop() > t) {
      $(n).fadeIn(e);
    } else {
      $(n).fadeOut(e);
    }
  });
  $(r).click(function (t) {
    t.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, e);
    return false;
  });
});
