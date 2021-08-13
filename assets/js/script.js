/* (function($) {
    'use strict' */


/*
========================================
    Preloader
========================================
*/
/* $(window).on('load', function() {
    $('#preloader').delay(200).fadeOut('slow');
    $('body').delay(200).css({
        'overflow': 'visible'
    });
}); */


/* responsive menu  */

jQuery(document).ready(function() {
    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991",
        meanRevealPosition: "right",
    });
});


/* ===============================================
        AddClass menu js
   ===============================================
*/

$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".navigation-area").addClass("shrinkheader");
    } else {
        $(".navigation-area").removeClass("shrinkheader");
    }
});



/* 
=====================================================
    Start active menu
======================================================
*/

var sections = jQuery('section'),
    nav = jQuery('nav'),
    nav_height = nav.outerHeight();

jQuery(window).on('scroll', function() {
    var cur_pos = jQuery(this).scrollTop();

    sections.each(function() {
        var top = jQuery(this).offset().top - nav_height,
            bottom = top + jQuery(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');

            jQuery(this).addClass('active');
            nav.find('a[href="#' + jQuery(this).attr('id') + '"]').addClass('active');
        }
    });
});


/* 
========================================
    slick slide
========================================
*/

/* Prom */

$('.visited-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    dots: false,
    nextArrow: '<i class="las la-long-arrow-alt-right"></i>',
    prevArrow: '<i class="las la-long-arrow-alt-left"></i>',
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                arrows: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            }
        },
    ]
});

/* Feature */


$('.feature-detail-right-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.feature-details-slider',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    swipeToSlide: false,
});
$('.feature-details-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
    asNavFor: '.feature-detail-right-slider',
    dots: false,
    arrows: false,
    nextArrow: '<i class="las la-long-arrow-alt-right"></i>',
    prevArrow: '<i class="las la-long-arrow-alt-left"></i>',
    focusOnSelect: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
});

/* Feature Details Ads */

$('.feature-details-ad-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: true,
    nextArrow: '<i class="las la-long-arrow-alt-right"></i>',
    prevArrow: '<i class="las la-long-arrow-alt-left"></i>',
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
});


/*
========================================
    Select
========================================
*/

$(document).ready(function() {
    $('select').niceSelect();
});

/* 
========================================
    tab
========================================
*/

$('.tabs li').click(function() {
    var tab_id = $(this).attr('data-tab');

    $('.tabs li').removeClass('active');
    $('.tab-content').removeClass('active');

    $(this).addClass('active');
    $("#" + tab_id).addClass('active');
});



/*
========================================
Scroll to top
========================================
*/

/* function scrollToTop() {
    var $scrollUp = $('#scroll-top'),
        $lastScrollTop = 0,
        $window = $(window);

    $window.on('scroll', function() {
        var st = $(this).scrollTop();
        if (st > $lastScrollTop) {
            $scrollUp.removeClass('show');
        } else {
            if ($window.scrollTop() > 200) {
                $scrollUp.addClass('show');
            } else {
                $scrollUp.removeClass('show');
            }
        }
        $lastScrollTop = st;
    });

    $scrollUp.on('click', function(evt) {
        $('html, body').animate({ scrollTop: 0 }, 600);
        evt.preventDefault();
    });
}
scrollToTop(); */



/* 
========================================
    Wow Animation
========================================
*/

new WOW().init();



/* 
========================================
    console error Avoid
========================================
*/
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


/* })(jQuery); */