/*
 * JavaScript
 */

$(function(){

  // お問い合わせフォーム用
  var formclass = $(".inquiry-form > div").attr('class');

  if(formclass) {
    if(formclass.match(/mw_wp_form_input/) || formclass.match(/mw_wp_form_complete/)) {
      $(".inquiry-contents > article > h1 span",this).addClass("hide");
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