$(function(){
    var setImg = '#photo';
    var fadeSpeed = 1600;
    var switchDelay = 5000;

    $(setImg).children('img').css({opacity:'0'});
    $(setImg + ' img:first').stop().animate({opacity:'1',zIndex:'20'},fadeSpeed);

    setInterval(function(){
        $(setImg + ' :first-child').animate({opacity:'0'},fadeSpeed).next('img').animate({opacity:'1'},fadeSpeed).end().appendTo(setImg);
    },switchDelay);
});

$(function(){
    $('.btn-trigger').click(function(){
        $('.bar1').toggleClass('close1');
        $('.bar2').toggleClass('close2');
        $('.bar3').toggleClass('close3');
        $('.hamburger-menu').toggleClass('open');
    })
})

$(function (){
    $(window).on("scroll", function(){
      const trigger = $('.reasion-about1');
      
      $(trigger).each(function(){
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        let triggerTop = $(this).offset().top;

        if(scroll > triggerTop - windowHeight / 1){
           $(this).removeClass("is-show");
        };
    })
    const trigger2 = $('.reasion-about2');

    $(trigger2).each(function(){
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        let triggerTop = $(this).offset().top;

        if(scroll > triggerTop - windowHeight / 1){
           $(this).removeClass("is-show2");
        };
    })

    const trigger3 = $('.voice-about-inner');

    $(trigger3).each(function(){
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        let triggerTop = $(this).offset().top;

        if(scroll > triggerTop - windowHeight / 1.6){
           $(this).addClass("balloon");
           $(this).removeClass("is-show3");
        };
    })
  })
});