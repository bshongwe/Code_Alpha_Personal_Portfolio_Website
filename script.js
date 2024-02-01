// 1.Type-writer Effect Container Controller
$(document).ready(function(){
    $(window).scroll(function(){
        // 1.0.1: Sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // 1.0.2: Scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // 1.2: Slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // 1.2.1: Removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // 1.2.2: Applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // 1.3: Toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // 1.4: Typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Full Stack Dev", "Back End Dev", "Front End Dev", "Sound Engineer", "n Agronomist", "Consultant"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Full Stack Dev", "Back End Dev", "Front End Dev", "Sound Engineer", "n Agronomist", "Consultant"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // 1.5: Owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
