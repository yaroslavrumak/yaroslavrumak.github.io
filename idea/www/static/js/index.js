"use strict";

$(document).ready(function () {
  var tl = new TimelineMax;
  tl.to($('.loader'), .75, {
    ease: Power3.easeOut,
    top: '-100vh'
  }, .75)

  var controller = new ScrollMagic.Controller();
  $('.h-carousel__carousel').css('left', 0);

  if ($(window).width() < 992) {
    var animateElem = $('.scrollmagic-container');
    var scene = new ScrollMagic.Scene({
      duration: 3000,
      offset: $('.h-carousel').height() / 2 + 140,
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
})

var left = $('.h-carousel').offset().left;

$(document).on('scroll orientationchange', function () {
  left = $('.h-carousel').offset().left;

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
});
