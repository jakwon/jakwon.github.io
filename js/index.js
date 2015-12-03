$(function(){
  $('.hidden').fadeIn(1500).removeClass('hidden');

  $( '.mobnav' ).click(function(){
    $('.responsive-menu').toggleClass('expand')
  })

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(2000)
    .next()
    .delay(500)
    .fadeIn(2000)
    .end()
    .appendTo('#slideshow');
},  4000);


});