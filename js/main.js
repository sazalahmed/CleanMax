$(function () {

    "use strict";


    //======menu fix js======   
    if ($('.main_menu').offset() != undefined) {
        var navoff = $('.main_menu').offset().top;
        $(window).scroll(function () {
            var scrolling = $(this).scrollTop();

            if (scrolling > navoff) {
                $('.main_menu').addClass('menu_fix');
            } else {
                $('.main_menu').removeClass('menu_fix');
            }
        });
    }

    //=======SELECT JS====== 
    $('#select_js').niceSelect();
    $('#select_js2').niceSelect();
    $('#select_js3').niceSelect();
    $('#select_js4').niceSelect();


    //=========counter js=========   
    $('.counter').countUp();


    //*=======STICKY SIDEBAR====== 
    $("#sticky_sidebar").stickit({
        top: 95,
    })

    //=======CATEGORY SLIDER====== 
    $('.category_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    //=======FEATURED SERVICE====== 
    $('.featured_service').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });



    //=======TESTIMONIAL SLIDER====== 
    $('.testi_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    });







});
