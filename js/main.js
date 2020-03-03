(function ($) {
  "use strict";
  var nav = $('nav');
  var navHeight = nav.outerHeight();
  /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });
// Initiate the wowjs animation library
  new WOW().init();
// Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll').on("click", function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNavb',
    offset: navHeight
  });

  
  })(jQuery);