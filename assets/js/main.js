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
  });
})(jQuery); // End of use strict
