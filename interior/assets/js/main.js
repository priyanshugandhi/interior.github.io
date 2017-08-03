/*
 *****************************************************
 *	CUSTOM JS DOCUMENT                              *
 *	Single window load event                        *
 *   "use strict" mode on                           *
 *****************************************************
 */
$(window).on('load', function() {

    "use strict";

    var countNumber = $(".count-number");
    var preLoader = $('#loading');
    var mixItUp = $('#mixi-box');
    var fancybox = $('.fancybox');
    var acc = document.getElementsByClassName("accordion");

    /*
    ========================================
    Fun Factor / Counter
    ========================================
    */
    countNumber.appear(function() {
        $(this).each(function() {
            var datacount = $(this).attr('data-count');
            $(this).find('.counter').delay(6000).countTo({
                from: 10,
                to: datacount,
                speed: 3000,
                refreshInterval: 50,
            });
        });
    });

    /*
    ========================================
    PreLoader On window Load
    ========================================
    */
    if (preLoader.length) {
        preLoader.fadeOut();
    }


    /*
    ========================================
    Project Filter Setting
    ========================================
    */
    if (mixItUp.length) {
        mixItUp.mixItUp();
    }

    /*
    ========================================
    Fancybox Setting
    ========================================
    */

    if (fancybox.length) {
        fancybox.fancybox();
    }


    /*
    ========================================
    Accordia Setting
    ========================================
    */

    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        }
    }

    //========================================
    // Owl Carousel Setting
    //======================================== 	

    owlCarouselInit();


});


//========================================
// Owl Carousel functions
//======================================== 	

function owlCarouselInit() {

    "use strict";

    var mainSlider = $('#main-slider');
    var testimonial = $('#testimony-slider');
    var partnerSlider = $('#pattern-slider');

    /*
    ========================================
    mainSlider
    ========================================
    */
    mainSlider.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*
    ========================================
    Testimonial
    ========================================
    */

    testimonial.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    /*
    ========================================
    partner Slider
    ========================================
    */

    partnerSlider.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });


}

/*
 *****************************************************
 *	END OF THE JS 									*
 *	DOCUMENT                       					*
 *****************************************************
 */