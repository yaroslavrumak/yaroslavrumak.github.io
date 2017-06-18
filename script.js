var i = 0;


//click це клік 
$('.logo').click(function() {
//  if - якщо (умова). == дорівнює, != не дорівнює
  if (i == 0) {
    $('.nav__button').css('margin', '0 auto').fadeIn();
    $('a').css('display', 'block').fadeIn();
    i = 1;
  }
  else {
    $('.nav__button').fadeOut();
    $('a').fadeOut();
    i = 0;    
  }
})