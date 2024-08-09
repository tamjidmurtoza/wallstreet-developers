(function ($) {
  'use strict';

  /*
  |--------------------------------------------------------------------------
  | Project Name: DocPro
  | Author: DocPro
  | Version: 1.0.0
  |--------------------------------------------------------------------------
  |
  */

  $.exists = function (selector) {
    return $(selector).length > 0;
  };

  // $(window).on('load', function () {
  //   $('.cs_preloader').fadeOut();
  //   $('.cs_preloader_in').delay(150).fadeOut('slow');
  // });

  $(function () {
    // When a cs_feature_item is clicked
    $('.cs_feature_item').click(function () {
      // Get the data-id attribute value
      var projectID = $(this).data('id');

      // Add the class cs_modal to the corresponding element
      $('#' + projectID).addClass('active');
    });
    $('.close_modal, .cs_modal_overlay').click(function () {
      $('.cs_modal').removeClass('active');
    });
    stickyHeader();
    // Slider
    var swiper = new Swiper('.mySwiper', {
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });
  function stickyHeader() {
    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $('.cs_header');
    var headerHeight = $header.outerHeight() + 30;

    $window.scroll(function () {
      var windowTop = $window.scrollTop();

      if (windowTop >= headerHeight) {
        $header.addClass('active');
      } else {
        $header.removeClass('active');
      }

      lastScrollTop = windowTop;
    });
  }
})(jQuery); // End of use strict
