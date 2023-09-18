$(function(){
    $(window).on( "scroll", function() {
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
  // slide-up script
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
});
    // typing text animation script
    $(".typing").typed({
        strings: ["Web Deverloper.", "YouTeber.","POS System.","Software Deverloper.","Video Editer.","Freelancer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
