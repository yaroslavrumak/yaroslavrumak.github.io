/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var controller = new ScrollMagic.Controller();

$('.h-carousel__carousel').css('left', 0);

$(document).ready(function () {
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
});

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

/***/ })
/******/ ]);
//# sourceMappingURL=76ab9570434d39cf5ecc.js.map