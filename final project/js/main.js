$(document).ready(function () {

    $(".main-menu .nav-item").hover(function () {
        $(this).find(".dropdown-menu").toggle();
    });

    $(".service-item").hover(function () {
        $(this).find(".service-bg-img img").css({"transform": "scale(1.3, 1.3)", "transition": "all 0.5s"});
    }, function(){
        $(this).find(".service-bg-img img").css({"transform": "scale(1, 1)", "transition": "all 0.5s"});
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

    $(".sidebar-menu-items").hover(function () {
        $(this).find(".items-drop").toggle();
    });

    $(".show-more-button").click(function () {
        $(this).css("display", "none");
        $(this).parent().siblings().removeClass("deactive");
    });


    $.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up" aria-hidden="true"></i>'
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

    $('.products-owl-slider').owlCarousel({
        loop:true,
        margin:5,
        nav:true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        dots:false,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4
            }
        }
    });

    $('.review-owl-slider, .customer-owl-slider').owlCarousel({
        nav:true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        dots:false,
        loop:true,
        margin:5,
        
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1
            }
        }
    });
        
    $("#slideproduct").lightSlider({
        item: 1,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,
 
        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////
 
        speed: 400, //ms'
        auto: false,
        loop: false,
        slideEndAnimation: true,
        pause: 2000,
 
        keyPress: false,
        controls: true,
        prevHtml: ["<i class='fa fa-chevron-left'></i>"],
        nextHtml: ["<i class='fa fa-chevron-right'></i>"],
 
        rtl:false,
        adaptiveHeight:false,
 
        vertical:false,
        verticalHeight:500,
        vThumbWidth:100,
 
        thumbItem:5,
        pager: true,
        gallery: true,
        galleryMargin: 5,
        thumbMargin: 3,
        currentPagerPosition: 'middle',
 
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        swipeThreshold: 40,
 
        responsive : [],
 
        onBeforeStart: function (el) {},
        onSliderLoad: function (el) {},
        onBeforeSlide: function (el) {},
        onAfterSlide: function (el) {},
        onBeforeNextSlide: function (el) {},
        onBeforePrevSlide: function (el) {}
    });  


    $(".rateYoCart").rateYo({
        rating: 3,
        fullStar: true,
        starWidth: "15px"
    });

    $(".rateYoFigcaption").rateYo({
        rating: 2,
        fullStar: true,
        starWidth: "13px"
    });

    $(".rateYoReview").rateYo({
        rating: 2,
        fullStar: true,
        starWidth: "20px"
    });

    $(".rateYoWish").rateYo({
        rating: 4,
        fullStar: true,
        starWidth: "20px"
    });

    $(".rateYoCustomer").rateYo({
        rating: 4,
        fullStar: true,
        starWidth: "13px"
    });
    
    $(".rateYoInfo").rateYo({
        rating: 4,
        fullStar: true,
        starWidth: "22px"
    });
    
   /*  $('.hey').circleProgress({
		value: 0.52,
		fill: {
		  gradient: ['#82b1ff', '#82b1ff'] // or color: '#3aeabb', or image: 'http://i.imgur.com/pT0i89v.png'
		},
	}); */
    var canvas1 = document.getElementById("myCanvas1");
    var ctx = canvas1.getContext("2d");
    ctx.strokeStyle="#ffd200";
    ctx.lineWidth=4;
    ctx.beginPath();
    ctx.arc(35,50,30,0,2*Math.PI);
    ctx.stroke();
    var dtx = canvas1.getContext("2d");
    dtx.beginPath();
    dtx.strokeStyle="#82b1ff";
    dtx.lineWidth=4;
    dtx.arc(35,50,30,20,-15);
    dtx.stroke();
    

    var canvas2 = document.getElementById("myCanvas2");
    var atx = canvas2.getContext("2d");
    atx.strokeStyle="#ffd200";
    atx.lineWidth=4;
    atx.beginPath();
    atx.arc(35,50,30,0,2*Math.PI);
    atx.stroke();
    var btx = canvas2.getContext("2d");
    btx.beginPath();
    btx.strokeStyle="#82b1ff";
    btx.lineWidth=4;
    btx.arc(35,50,30,11,2*Math.PI);
    btx.stroke();
    
    var canvas3 = document.getElementById("myCanvas3");
    var etx = canvas3.getContext("2d");
    etx.strokeStyle="#ffd200";
    etx.lineWidth=4;
    etx.beginPath();
    etx.arc(35,50,30,0,2*Math.PI);
    etx.stroke();
    var ftx = canvas3.getContext("2d");
    ftx.beginPath();
    ftx.strokeStyle="#82b1ff";
    ftx.lineWidth=4;
    ftx.arc(35,50,30,12,2*Math.PI);
    ftx.stroke();


    

});