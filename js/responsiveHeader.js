// jQuery

// Responsive fixed header
// Calculate the height of .header-fixed and apply it as a margin-top to to #main-content on load and resize.
$(document).ready(function() {
	$.resizeContentHeight = function(){
		$('#main-content').css("margin-top", $(".header-fixed").height());
		$('.carousel-inner').css("height", $(window).height()-$(".header-fixed").height());
	}
$(window).load(function() {
    $.resizeContentHeight();
});
$(window).resize(function() {
    $.resizeContentHeight();
});
});
// Resize logo and header on scroll
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 400) {
        $(".logo").addClass("logo-resize");
		$("#nav-row").removeClass(".row-padded");
    }
     if (scroll <= 400) {
        $(".logo").removeClass("logo-resize");
		$("#nav-row").addClass(".row-padded");
    }
});