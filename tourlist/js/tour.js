/*
 * JavaScript
 */

$(function(){

  // お申し込みフォーム用
  $('#mw_wp_form_mw-wp-form-383 select option[value=""]').html('選択してください');

  var formclass = $("#mw_wp_form_mw-wp-form-383").attr('class');

  if(formclass) {

    if(formclass.match(/mw_wp_form_confirm/) || formclass.match(/mw_wp_form_complete/)) {
      $("#tour-detail",this).addClass("hide");
      $("#course-duration",this).addClass("hide");
      $("#course-schedule",this).addClass("hide");
      $("#course-hotel",this).addClass("hide");
      $("#course-price",this).addClass("hide");
    }

    var formwrap = $(".inquiry-form > div").attr('class');
    
    if(formwrap.match(/mw_wp_form_confirm/)) {
      $(".tour-detail-header > h1 span",this).removeClass("hide");
      $(".fellow-list > table",this).addClass("block");
      $(".fellow-list > h3",this).removeClass("sw");
      $(".fellow-list > h3 i",this).addClass("hide");
    }
    
  }

});

/*
 *
 *
 * JavaScript End
 *
 *
 */