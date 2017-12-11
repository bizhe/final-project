$(document).ready(function () {

    $(".main-menu .nav-item").hover(function () {
        $(this).find(".dropdown-menu").toggle();
    });

    $(".service-item").hover(function () {
        $(this).find(".service-bg-img img").css({"transform": "scale(1.3, 1.3)", "transition": "all 0.5s"});
    }, function(){
        $(this).find(".service-bg-img img").css({"transform": "scale(1, 1)", "transition": "all 0.5s"});
    });

    $.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up" aria-hidden="true"></i>'
    });

    $(".rateYoCart").rateYo({
        rating: 3,
        fullStar: true,
        starWidth: "15px"
    });
    
    $('.first-slider-owl').owlCarousel({
        items: 1,
        mouseDrag: true,
        autoplay: false,
        loop: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                autoHeight: true
            },
            400: {
                items: 1,
                autoHeight: true
            },
            600: {
                items: 1,
                autoHeight: true
            },
            1000: {
                items: 1,
                loop: true,
                autoplay: true,
                autoHeight: true
            }
        }
    });

    $(".rateYoFigcaption").rateYo({
        rating: 2,
        fullStar: true,
        starWidth: "13px"
    });
    
    $('.products-owl-slider').owlCarousel({
        loop:true,
        margin:5,
        nav:true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    $(".figure-hover").hover(function () {
        $(this).css({"transform": "translateY(15px)", "transition": "all 0.5s", "box-shadow": "0 4px 2px -2px rgba(0, 0, 0, .2)"});
        $(this).find(".products-item-img img").css({"transform": "scale(1.1, 1.1)", "transition": "all 0.5s"});
        $(this).find(".view-button").css("opacity", "1");
        $(this).find(".figmain").css("background", "#F5F2ED");
        
    }, function(){
        $(this).css({"transform":  "translateY(0px)", "transition": "all 0.5s", "box-shadow": "none"});
        $(this).find(".products-item-img img").css({"transform": "scale(1, 1)", "transition": "all 0.5s"});
        $(this).find(".view-button").css("opacity", "0");
        $(this).find(".figmain").css("background", "#fff");
        
    });

    $(".details-item").hover(function () {
        $(this).find(".details-icon .main-img").css({"opacity": "0"});
        $(this).find(".details-icon .hover-img").css({"opacity": "1"});
    }, function(){
        $(this).find(".details-icon .main-img").css({"opacity": "1"});
        $(this).find(".details-icon .hover-img").css({"opacity": "0"});
    });

    $(".rateYoReview").rateYo({
        rating: 2,
        fullStar: true,
        starWidth: "20px"
    });
    
    $('.review-owl-slider').owlCarousel({
        nav:true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        dots:false,
        loop:true,
        margin:5,
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

});