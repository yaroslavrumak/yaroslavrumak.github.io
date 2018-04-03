"use strict";
var current = 1;
var animated = 1;

$(document).ready(function () {
  var tl = new TimelineMax();
  tl.fromTo($('.timeline__current'), 10, {
    ease: Power0.easeNone,
    width: 0
  }, {
    ease: Power0.easeNone,
    width: '100%'
  }, 0)
  setInterval(function () {
    if (animated == 1) {
      $('.frame__current').text('0' + (current + 1))
      var tl = new TimelineMax();
      tl.to($('.h-slider__title'), .5, {
        ease: Power1.easeInOut,
        opacity: 0
      }, 0)
      tl.to($('.h-slider__title').eq(current), .5, {
        ease: Power1.easeInOut,
        opacity: 1
      }, .5)
      tl.to($('.h-slider__slide').eq(current - 1), .5, {
        ease: Power0.easeNone,
        left: '-100%'
      }, 0)
      tl.fromTo($('.timeline__current'), 10, {
        ease: Power0.easeNone,
        width: 0
      }, {
        ease: Power0.easeNone,
        width: '100%'
      }, 0)
      tl.fromTo($('.h-slider__slide').eq(current), .5, {
        ease: Power0.easeNone,
        left: '100%'
      }, {
        ease: Power0.easeNone,
        left: 0
      }, 0)
      current = current + 1;
      if (current == $('.h-slider__slide').length) {
        current = 0;
      }
    }
  }, 10000)
})

$(document).on('click', '.controls__left', function () {
  animated = 0;
  current = current - 1;
  if (current == -1) {
    current = $('.h-slider__slide').length - 1;
  }
  $('.frame__current').text('0' + (current + 1))
  var tl = new TimelineMax();
  tl.to($('.h-slider__title'), .5, {
    ease: Power1.easeInOut,
    opacity: 0
  }, 0)
  tl.to($('.h-slider__title').eq(current), .5, {
    ease: Power1.easeInOut,
    opacity: 1
  }, .5)
  tl.to($('.h-slider__slide').eq(current), .5, {
    ease: Power0.easeNone,
    left: '100%'
  }, 0)
  tl.set($('.timeline__current'), {
    ease: Power0.easeNone,
    width: 0
  }, 0)
  tl.fromTo($('.h-slider__slide').eq(current - 1), .5, {
    ease: Power0.easeNone,
    left: '-100%'
  }, {
    ease: Power0.easeNone,
    left: 0
  }, 0)
  setTimeout(function(){
    animated = 1;
  }, 10000)
})


$(document).on('click', '.controls__right', function () {
  animated = 0;
  current = current + 1;
  if (current == $('.h-slider__slide').length) {
    current = 0;
  }
  $('.frame__current').text('0' + (current + 1))
  var tl = new TimelineMax();
  tl.to($('.h-slider__title'), .5, {
    ease: Power1.easeInOut,
    opacity: 0
  }, 0)
  tl.to($('.h-slider__title').eq(current), .5, {
    ease: Power1.easeInOut,
    opacity: 1
  }, .5)
  tl.to($('.h-slider__slide').eq(current - 1), .5, {
    ease: Power0.easeNone,
    left: '-100%'
  }, 0)
  tl.set($('.timeline__current'), {
    ease: Power0.easeNone,
    width: 0
  }, 0)
  tl.fromTo($('.h-slider__slide').eq(current), .5, {
    ease: Power0.easeNone,
    left: '100%'
  }, {
    ease: Power0.easeNone,
    left: 0
  }, 0)
  setTimeout(function(){
    animated = 1;
  }, 10000)
})
