
$(function () {
    let nav = $('#nav, #nav_toggle'),
        introH = $('#intro').innerHeight(),
        scrollOffset = $(window).scrollTop();

    // ! Fixed header
    checkScroll(scrollOffset);
    $(window).on('scroll', function () {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            nav.addClass('fixed');
        } else(
            nav.removeClass('fixed')
        );
    }
});

//  Menu nav toggle
$('#nav_toggle').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $('#nav').toggleClass('active');
});

// Slick slider
$(function () {
    $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        responsive: [{
                breakpoint: 1151,
                settings: {
                    slidesToShow: 3,
					arrows: false
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
					arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
					arrows: false,
                }
            },
			{
                breakpoint: 410,
                settings: {
                    slidesToShow: 1,
					arrows: false
                }
            }
        ]
    });
});

// Init AOS
(function ($) {
	"use strict";

	function aos_init() {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: true
		});
	}
	$(window).on('load', function () {
		aos_init();
	});

})(jQuery);

