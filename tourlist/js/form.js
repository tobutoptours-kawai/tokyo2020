$(function() {
	/*if ($('.privacy_check').prop("checked")) {
        $('.submit_confirm').prop("disabled", false);
    } else {
        $('.submit_confirm').prop("disabled", true);
    }*/
	$(document).ready(function() {
		/*$('.submit_btn').prop("disabled", true);*/
        if ($('#pri_check-1').prop("checked")) {
            $('.submit_btn').prop("disabled", false);
        } else {
            $('.submit_btn').prop("disabled", true);
            $('[name="submit"]').prop("disabled", false);
        }
	});
	$("#pri_check-1").change(function() {
    //$(".submit_confirm").toggle();
	if ($(this).prop("checked")) {
		$('.submit_btn').prop("disabled", false);
	} else {
		$('.submit_btn').prop("disabled", true);
	}
  });
});