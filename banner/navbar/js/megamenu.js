  $(document).ready(function () {
    "use strict";
    $(".menu > ul > li:has( > ul)").addClass("menu-dropdown-icon");
    $(".menu > ul > li > ul:not(:has(ul))").addClass("normal-sub");
    $(".menu > ul").before('<a href="#" class="menu-mobile" aria-label="menu-mobile"></a>');
    $(".menu > ul > li").hover(
      function (e) {
        if ($(window).width() > 943) {
          $(this).children("ul").fadeIn(150);
          e.preventDefault();
        }
      },
      function (e) {
        if ($(window).width() > 943) {
          $(this).children("ul").fadeOut(150);
          e.preventDefault();
        }
      }
    );
    $(".menu > ul > li").click(function () {
      if ($(window).width() < 943) {
        $(this).children("ul").fadeToggle(150);
      }
    });
    $(".menu-mobile").click(function (e) {
      e.preventDefault();
      $(".mobile-hamburger-menu").toggleClass("active");

      if ($(".mobile-hamburger-menu").hasClass("active")) {
        $("body").css("overflow", "hidden");
      } else {
        $("body").css("overflow", "");
      }
    });
  });
