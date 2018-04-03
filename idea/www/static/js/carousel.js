$(document).ready(function () {
  $('.h-carousel__carousel').css('left', 0);

  if ($(window).width() < 992) {
    var animateElem = $('.scrollmagic-container');
    var scene = new ScrollMagic.Scene({
      duration: 3000,
      offset: $('.h-carousel').height() / 2 + 70,
      triggerElement: '.scrollmagic-container'
    }).setPin('.scrollmagic-container').addTo(controller);
  } else {
    var animateElem = $('.scrollmagic-container');
    var scene = new ScrollMagic.Scene({
      duration: 3000,
      offset: $('.h-carousel').height() / 2 + 70,
      triggerElement: '.scrollmagic-container'
    }).setPin('.scrollmagic-container').addTo(controller);
  }

  var animateElem = $('.h-carousel__carousel');
  var teamWidth = $('.carousel__member').width() * $('.carousel__member').length;
  var scene = new ScrollMagic.Scene({
    duration: 4000,
    offset: $(window).height() / 2,
    triggerElement: '.scrollmagic-container'
  }).setTween('.h-carousel__carousel', {
    left: -teamWidth - 520
  }).addTo(controller);

  var animateElem = $('.h-carousel__timeline');
  var scene = new ScrollMagic.Scene({
    duration: 3000,
    offset: $(window).height() / 2,
    triggerElement: '.scrollmagic-container'
  }).setTween('.h-carousel__timeline__current', {
    width: '100%'
  }).addTo(controller);
});


$(document).on('resize orientationchange', function () {
  if ($('.h-carousel').length) {
    var left = $('.h-carousel').offset().left;

    for (var i = 0; i < $('.carousel__member').length; i++) {
      var memberPosition = $('.carousel__member').eq(i).offset();
      var carouselPosition = $('.h-carousel').offset();

      if (memberPosition.left < left) {
        $('.names__name').css('opacity', 0);
        $('.names__name').eq(i).css('opacity', 1);
      }
      if (carouselPosition.left > left) {
        $('.names__name').css('opacity', 0);
      }
      if (carouselPosition.left < -$('.h-carousel').width()) {
        $('.names__name').css('opacity', 0);
      }
    }
  }
});

var active = 0;
$(document).on('click', '.member__photo', function () {
  var i = $('.member__photo').index(this);
  if (active == 0) {
    active = 1;
    if (i == 0) {
      for (j = 1; j < $('.member__photo').length; j++) {
        var tl = new TimelineMax();
        tl.to($('.member__photo').eq(j), .5, {
          ease: Power3.easeOut,
          x: 520
        }, 0)
      }
      $('.member__about').eq(i).fadeIn();
    }
    if (i > 0) {
      for (j = i; j < $('.member__photo').length; j++) {
        var tl = new TimelineMax();
        tl.to($('.member__photo').eq(j), .5, {
          ease: Power3.easeOut,
          x: 260
        }, 0)
      }
      for (j = i; j >= 0; j = j - 1) {
        var tl = new TimelineMax();
        tl.to($('.member__photo').eq(j), .5, {
          ease: Power3.easeOut,
          x: -260
        }, 0)
      }
      $('.member__about').eq(i).css('left', 'calc(100% - 260px)').fadeIn();
    }
  } else {
    active = 0;
    if (i == 0) {
      for (j = 1; j < $('.member__photo').length; j++) {
        var tl = new TimelineMax();
        tl.to($('.member__photo').eq(j), .5, {
          ease: Power3.easeOut,
          x: 0
        }, 0)
      }
      $('.member__about').fadeOut();
    }
    if (i > 0) {
      for (j = 0; j < $('.member__photo').length; j++) {
        var tl = new TimelineMax();
        tl.to($('.member__photo').eq(j), .5, {
          ease: Power3.easeOut,
          x: 0
        }, 0)
      }
      $('.member__about').fadeOut();
      setTimeout(function(){
        $('.member__about').css('left', '100%');
      }, 500)
    }
  }
})
