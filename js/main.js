$(document).ready(function(){
    // тык по иконке гамбургера откроет меню
    $(".nav-icon").click(function(){
        $(".full-nav").addClass("open");
    });
    // тык по крестику закроет меню
    $(".nav-close").click(function(){
        $(".full-nav").removeClass("open");
    });
    // липкое меню
    $(window).scroll(function() {
        var sc = $(window).scrollTop();
            if( sc > 100){
                $(".nav").addClass("sticky");
            }else{
                $(".nav").removeClass("sticky");
            }
    });
    // слайдер в шапке
        $('.bxslider').bxSlider({
            mode: 'horizontal',
            moveSlides:1,
            slideMargin: 40,
            infiniteLoop:true,
            minSlides:1,
            maxSlides:1,
            speed:1200,
        });

    // слайдер секции team 
        if($(".swiper-container").hasClass("team-member-slider")){
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: '3',
                allowTouchMove: true,
                loop:true,
                centeredSlides: true,
                slideToclickedslide:true,
                effect: 'coverflow',
                grabCursor: true,
                autoplay:false,
                navigation:{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                coverflowEffect: {
                    rotate:0,
                    stretch:100,
                    depth: 200,
                    modifier: 1,
                    slideShadows:true,
                },
                /*брэкпоинт который ломают swiper с костылем в секции team
                breakpoints: {
                    767: {
                        slidesPerView: 1,
                        centeredSlides: false,
                        effect: 'slide',
                    }
                }*/
                
            });
        }


    // слайдер в секции work
    $("#work").magnificPopup({
        delegate:'a',
        type: 'image',
        gallery:{
            enabled:true
        }
    });

    // слайдер в секции news 
    $("#news-slider").owlCarousel({
        items:3, 
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[1000,2],
        itemsMobile:[599,1],
        pagination:false,
        paginationText:false,
        autoPlay:true,
    });
    // countUp для секции numbers + team
    $('.count').counterUp({
        delay: 10,
        time: 4000
    });

});

$(function(){
    $("#clients-list").owlCarousel({
        items:6,
        autoPlay:false,
        smartSpeed:700,
        loop:true,
        autoPlayHoverPause:true,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },

            400:{
                items:3
            },

            768:{
                items:6
            },
        }
    });
});