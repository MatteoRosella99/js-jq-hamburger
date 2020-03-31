
$('.header-right > a').click(
  function(){
    $('.hamburger-menu').fadeIn(1000);
    $('.header-right > a').fadeOut(500);
    $('.close').fadeIn(1000);
  }
)
$('.close').click(
  function(){
    $('.hamburger-menu').fadeOut(1000);
    $('.close').fadeOut(1000);
    $('.header-right > a').fadeIn(500);
  }
)
