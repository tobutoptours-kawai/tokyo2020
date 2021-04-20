// JavaScript Common File

/* FadeIn Back To Top Button */
$(function() {
  var topBtn = $('.page-top');  
  topBtn.hide();

  /* スクロールが100に達したらボタン表示 */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });

  /* スクロールしてトップ */
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});

/* Ticket List Header Fixed */
$('.ticket-tbl').floatThead({
	position: 'fixed'
});



/* Ticket List Link */
$(function(){
	$('.ticket-list .ticket-tbl tbody tr').hover(
		function(){
      $('td',this).css({ opacity: '.75', cursor: 'pointer'});
		},
		function(){
      $('td',this).css({ opacity: '1', cursor: 'default'});
		}
	);

	$('.ticket-list .ticket-tbl tbody tr').click(function(){
		var tlink = $("a",this).attr('href');
		window.location.href = tlink;
	});
});

