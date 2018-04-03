"use strict";

$(document).ready(function () {
  var tl = new TimelineMax;
  tl.to($('.loader'), .75, {
    ease: Power3.easeOut,
    top: '-100vh'
  }, .75)

  var menuStatus = 0;

  $(document).on('click', '.menu-button', function () {
    if (menuStatus == 0) {
      $('body').css('overflow', 'hidden')
      var tl = new TimelineMax();
      $('.m-box__inner').css('display', 'block');
      tl.to($('.m-box__inner'), .5, {
        ease: Power3.easeOut,
        opacity: 1,
        scale: 1
      }, 0);
      tl.to($('.a-side__social'), .5, {
        ease: Power3.easeOut,
        opacity: 0
      }, 0);
      tl.to($('.b-menu-hidden'), .5, {
        ease: Power3.easeOut,
        opacity: 0
      }, 0);
      tl.to($('.st0'), .5, {
        ease: Power3.easeOut,
        fill: "#000"
      }, 0)
      tl.to($('.menu-button__arrow'), .5, {
        ease: Power3.easeOut,
        background: "#000"
      }, 0)
      tl.to($('#arrow-top'), .5, {
        ease: Power3.easeOut,
        rotation: 45,
        y: 8
      }, 0)
      tl.to($('#arrow-bottom'), .5, {
        ease: Power3.easeOut,
        rotation: -45,
        y: 0
      }, 0)
      tl.to($('#arrow-middle'), .5, {
        ease: Power3.easeOut,
        opacity: 0
      }, 0)
      setTimeout(function () {
        $('.a-side__social').css('display', 'none');
        $('.b-menu-hidden').css('display', 'none');
      }, 500)
      menuStatus = 1;
    } else {
      $('body').css('overflow-y', 'auto')
      $('.a-side__social').css('display', 'block');
      $('.b-menu-hidden').css('display', 'block');
      $('.nav__search').css('display', 'flex');
      var tl = new TimelineMax();
      tl.to($('.m-box__inner'), .5, {
        ease: Power3.easeOut,
        opacity: 0,
        scale: .5
      }, 0)
      tl.to($('.a-side__social'), .5, {
        ease: Power3.easeOut,
        opacity: 1
      }, 0)
      tl.to($('.b-menu-hidden'), .5, {
        ease: Power3.easeOut,
        opacity: 1
      }, 0)
      tl.to($('.st0'), .5, {
        ease: Power3.easeOut,
        fill: "#fff"
      }, 0)
      tl.to($('.menu-button__arrow'), .5, {
        ease: Power3.easeOut,
        background: "#fff"
      }, 0)
      tl.to($('#arrow-top'), .5, {
        ease: Power3.easeOut,
        rotation: 0,
        y: 0
      }, 0)
      tl.to($('#arrow-bottom'), .5, {
        ease: Power3.easeOut,
        rotation: 0,
        y: 0
      }, 0)
      tl.to($('#arrow-middle'), .5, {
        ease: Power3.easeOut,
        opacity: 1
      }, 0)
      setTimeout(function () {
        $('.m-box__inner').css('display', 'none');
      }, 500)
      menuStatus = 0;
    }
  })

  $(document).on('click', '.m-box__container a, .a-side__logo', function (event) {
    event.preventDefault();
    var tl = new TimelineMax;
    var url = $(this).attr("href");
    window.history.pushState({
      path: url
    }, "", url)
    $.ajax({
      url: url,
      success: function (e) {
        var t = $(e).filter("title").text();
        document.title = t;
      }
    })
    $('.a-side__social').css('display', 'block');
    $('.b-menu-hidden').css('display', 'block');
    $('.nav__search').css('display', 'flex');
    $('.loader').css('display', 'flex');
    tl.set($('.loader'), {
      top: '100vh'
    }, 0)
    tl.to($('.loader'), .75, {
      ease: Power3.easeOut,
      top: 0
    }, 0)
    tl.set($('.loader'), {
      ease: Power3.easeOut,
      top: 0,
      opacity: 0,
      scale: 1
    }, 1.51)
    tl.set($('.m-box__inner'), {
      opacity: 0,
      scale: .5
    }, .75)
    tl.to($('.a-side__social'), .5, {
      ease: Power3.easeOut,
      opacity: 1
    }, 0)
    tl.to($('.b-menu-hidden'), .5, {
      ease: Power3.easeOut,
      opacity: 1
    }, 0)
    tl.to($('.st0'), .5, {
      ease: Power3.easeOut,
      fill: '#ffffff'
    }, 0)
    tl.to($('.menu-button__arrow'), .5, {
      ease: Power3.easeOut,
      background: "#fff"
    }, 0)
    tl.to($('#arrow-top'), .5, {
      ease: Power3.easeOut,
      rotation: 0,
      y: 0
    }, 0)
    tl.to($('#arrow-bottom'), .5, {
      ease: Power3.easeOut,
      rotation: 0,
      y: 0
    }, 0)
    tl.to($('#arrow-middle'), .5, {
      ease: Power3.easeOut,
      opacity: 1
    }, 0)
    menuStatus = 0;
    setTimeout(function () {
      window.location = url;
      $('.m-box__inner').css('display', 'none');
    }, 750)
  });
})
