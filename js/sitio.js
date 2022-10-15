new WOW().init();

	var scroll = new SmoothScroll('a[href*="#"]',{
		header: '[data-scroll-header]'
	});
$(window).scroll(function () {

    var nav = $('.encabezado');
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        nav.addClass("fondo-menu");
    } else {
        nav.removeClass("fondo-menu");
    }
});
