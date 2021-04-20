/* JavaScript Common File */

/* Home Page Slide Function */
$('.top_slide').slick({
    dots: false,
    speed: 1000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
});

/*************************
    スマホ用メニュー
    *************************/
$(".drawer").drawer();


/* Tour List Link */
$(function(){
	$('.tour-list-table tbody tr').hover(
		function(){
			$('td',this).css({ background: '#b5ebff', cursor: 'pointer'});
		},
		function(){
			$('td',this).css({ background: '#e8f9ff', cursor: 'default'});
		}
	);

	$('.tour-list-table tbody tr').click(function(){
		var tlink = $("a",this).attr('href');
		window.location.href = tlink;
	});
});

/* Airline Link */
function pupup_modeless(url) {
	var newWin = window.open(
		url, // 移動先
		"pop", // ターゲット名
		"width=420, height=300" // ウィンドウサイズ指定
	);
	newWin.focus();
}


/* Fellow List */
$(function(){
	$(".fellow-list > h3.sw").on("click", function() {
		$(this).next().slideToggle();

		if($("i",this).attr("class")=="fa fa-caret-square-o-down"){
			$("i",this).removeClass("fa fa-caret-square-o-down").addClass("fa fa-times");
		}else{
			$("i",this).removeClass("fa fa-times").addClass("fa fa-caret-square-o-down");
		}
	});
});

