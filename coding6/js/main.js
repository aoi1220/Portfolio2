//下から表示させる要素を指定
let $pagetop = $('.top-return');

$(window).on( 'scroll', function () {
  //スクロール位置を取得
  if ( $(this).scrollTop() > 700 ) {
    $pagetop.removeClass('is-show');
  } else {
    $pagetop.addClass('is-show');
  }
  if ( $(this).scrollTop() > 1300 ) {
      $pagetop.addClass('is-white');
  } else {
    $pagetop.removeClass('is-white');
  }
  if ( $(this).scrollTop() > 2640 ) {
      $pagetop.removeClass('is-white');
  }
  /*--------------------------------------*/
  /* responsive
  /*--------------------------------------*/
  if (window.matchMedia('(max-width: 950px)').matches) {
    //スマホ処理
    if ( $(this).scrollTop() > 1580 ) {
        $pagetop.addClass('is-white');
    } else {
      $pagetop.removeClass('is-white');
    }
    if ( $(this).scrollTop() > 4020 ) {
        $pagetop.removeClass('is-white');
    }
}
  if (window.matchMedia('(max-width: 600px)').matches) {
    //スマホ処理
    if ( $(this).scrollTop() > 1400 ) {
        $pagetop.addClass('is-white');
    } else {
      $pagetop.removeClass('is-white');
    }
    if ( $(this).scrollTop() > 3850 ) {
        $pagetop.removeClass('is-white');
    }
}
});

$(function(){
  $('.btn-trigger').click(function(){
      $('.bar1').toggleClass('close1');
      $('.bar2').toggleClass('close2');
      $('.bar3').toggleClass('close3');
      $('.site-logo').toggleClass('logo-trigger');

      $('.hamburger-menu').toggleClass('open');
      $('body').toggleClass('scroll-lock');
  })
})

