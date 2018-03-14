"use strict";

var tl = new TimelineMax();
var h = 0;


$('.on-button').click(function () {
  $('.start-page').css("display", "none")
  $('.main-box').css("display", "block")
  $('.on-button').css("display", "none")
  $('.off-button').css("display", "block")
  setTimeout(function () {
    h = 1;
  }, 500)
});

if (h == 0) {
  $(document).keypress(function (e) {
    if (e.which == 13) {
      $('.start-page').css("display", "none")
      $('.main-box').css("display", "block")
    }
    setTimeout(function () {
      h = 1;
    }, 500)
  });
}
TweenLite.set($('.slot-name'), {
  transformPerspective: 500
});

tl.set($('.slot-name').eq(0), {
  rotationX: 25
});
tl.set($('.slot-name').eq(2), {
  rotationX: -25
});

$('.button-circle').click(function () {
  var tl = new TimelineMax();

  tl.to($('.button'), .25, {
    ease: Power4.easeOut,
    y: 50,
    scaleY: -.5,
    scaleX: .8,
    transformOrigin: "50% 100%"
  }, 0)
  tl.to($('.button'), .25, {
    ease: Power4.easeOut,
    y: 0,
    scale: 1,
    transformOrigin: "50% 100%"
  }, .25)
	tl.to($('.button-circle'), .25, {
    ease: Power4.easeOut,
    y: 320,
    transformOrigin: "50% 50%"
  }, 0)
  tl.to($('.button-circle'), .25, {
    ease: Power4.easeOut,
    y: 0,
    transformOrigin: "50% 50%"
  }, .25)
  tl.to($('.button__shape'), .25, {
    ease: Power4.easeOut,
    y: 30,
    scaleY: .5,
    transformOrigin: "50% 100%"
  }, 0)
  tl.to($('.button__shape'), .25, {
    ease: Power4.easeOut,
    y: 0,
    scaleY: 1,
    transformOrigin: "50% 100%"
  }, .25)
  tl.to($('.button__bottom'), .25, {
    ease: Power4.easeOut,
    y: -70,
    scaleY: -.5,
    transformOrigin: "50% 0%"
  }, 0)
  tl.to($('.button__bottom'), .25, {
    ease: Power4.easeOut,
    y: 0,
    scaleY: 1,
    transformOrigin: "50% 0%"
  }, .25)

  var i = $('.slot-name').length;
  var a;
  tl.set($('.slot-container__column'), {
    y: 0,
    webkitFilter: "blur(" + .5 + "px)"
  }, 0);
  tl.to($('.slot-container__column'), 2.5, {
    ease: Circ.easeOut,
    y: -90 * (i - 1) - 5,
    webkitFilter: "blur(" + .5 + "px)"
  }, 0);
  tl.to($('.slot-container__column'), .2, {
    ease: Power2.easeIn,
    y: -90 * (i - 1),
    webkitFilter: "blur(" + 0 + "px)"
  }, 2.5);
  setTimeout(function () {
    $('.slot-name').eq(i - 1).css('filter', 'blur(0.45px)');
    $('.slot-name').eq(i - 3).css('filter', 'blur(0.45px)');
  }, 2000)

  for (a = 0; a < (i - 1); a++) {
    setTimeout(function () {
      tl = new TimelineMax();
      tl.to($('.slot-name').eq(a), .005, {
        ease: Power3.easeOut,
        rotationX: 25
      }, 0);
      tl.to($('.slot-name').eq(a + 1), .005, {
        ease: Power3.easeOut,
        rotationX: 0
      }, 0);
      tl.to($('.slot-name').eq(a + 2), .005, {
        ease: Power3.easeOut,
        rotationX: -25,
        webkitFilter: "blur(0.25px)"
      }, 0);
    }, 2000 / i);
  };

  var i = $('.slot-name1').length;
  var a;
  tl.set($('.slot-container__column1'), {
    y: 0,
    webkitFilter: "blur(" + .5 + "px)"
  }, 0);
  tl.to($('.slot-container__column1'), 3, {
    ease: Circ.easeOut,
    y: -90 * (i - 1) - 5,
    webkitFilter: "blur(" + .5 + "px)"
  }, 0);
  tl.to($('.slot-container__column1'), .2, {
    ease: Power2.easeIn,
    y: -90 * (i - 1),
    webkitFilter: "blur(" + 0 + "px)"
  }, 3);
  setTimeout(function () {
    $('.slot-name1').eq(i - 1).css('filter', 'blur(0.45px)');
    $('.slot-name1').eq(i - 3).css('filter', 'blur(0.45px)');
  }, 2000)

  for (a = 0; a < (i - 1); a++) {
    setTimeout(function () {
      tl = new TimelineMax();
      tl.to($('.slot-name1').eq(a), .005, {
        ease: Power3.easeOut,
        rotationX: 25
      }, 0);
      tl.to($('.slot-name1').eq(a + 1), .005, {
        ease: Power3.easeOut,
        rotationX: 0
      }, 0);
      tl.to($('.slot-name1').eq(a + 2), .005, {
        ease: Power3.easeOut,
        rotationX: -25,
        webkitFilter: "blur(0.25px)"
      }, 0);
    }, 2000 / i);
  };

  var i = $('.slot-name2').length;
  var a;
  tl.set($('.slot-container__column2'), {
    y: 0,
    webkitFilter: "blur(" + .5 + "px)"
  }, 0);
  tl.to($('.slot-container__column2'), 3.5, {
    ease: Circ.easeOut,
    y: -90 * (i - 1) - 5,
    webkitFilter: "blur(" + .5 + "px)"
  }, 0);
  tl.to($('.slot-container__column2'), .2, {
    ease: Power2.easeIn,
    y: -90 * (i - 1),
    webkitFilter: "blur(" + 0 + "px)"
  }, 3.5);
  setTimeout(function () {
    $('.slot-name2').eq(i - 1).css('filter', 'blur(0.45px)');
    $('.slot-name2').eq(i - 3).css('filter', 'blur(0.45px)');
  }, 2000)

  for (a = 0; a < (i - 1); a++) {
    setTimeout(function () {
      tl = new TimelineMax();
      tl.to($('.slot-name2').eq(a), .005, {
        ease: Power3.easeOut,
        rotationX: 25
      }, 0);
      tl.to($('.slot-name2').eq(a + 1), .005, {
        ease: Power3.easeOut,
        rotationX: 0
      }, 0);
      tl.to($('.slot-name2').eq(a + 2), .005, {
        ease: Power3.easeOut,
        rotationX: -25,
        webkitFilter: "blur(0.25px)"
      }, 0);
    }, 2000 / i);
  };

  var i = $('.slot-name3').length;
  var a;
  tl.set($('.slot-container__column3'), {
    y: 0,
    webkitFilter: "blur(" + .5 + "px)"
  }, 0);
  tl.to($('.slot-container__column3'), 4, {
    ease: Circ.easeOut,
    y: -90 * (i - 1) - 5,
    webkitFilter: "blur(" + .5 + "px)"
  }, 0);
  tl.to($('.slot-container__column3'), .2, {
    ease: Power2.easeIn,
    y: -90 * (i - 1),
    webkitFilter: "blur(" + 0 + "px)"
  }, 4);
  setTimeout(function () {
    $('.slot-name3').eq(i - 1).css('filter', 'blur(0.45px)');
    $('.slot-name3').eq(i - 3).css('filter', 'blur(0.45px)');
  }, 2000)

  for (a = 0; a < (i - 1); a++) {
    setTimeout(function () {
      tl = new TimelineMax();
      tl.to($('.slot-name3').eq(a), .005, {
        ease: Power3.easeOut,
        rotationX: 25
      }, 0);
      tl.to($('.slot-name3').eq(a + 1), .005, {
        ease: Power3.easeOut,
        rotationX: 0
      }, 0);
      tl.to($('.slot-name3').eq(a + 2), .005, {
        ease: Power3.easeOut,
        rotationX: -25,
        webkitFilter: "blur(0.25px)"
      }, 0);
    }, 2000 / i);
  };

  var i = $('.slot-name4').length;
  var a;
  tl.set($('.slot-container__column4'), {
    y: 0,
    webkitFilter: "blur(" + .5 + "px)"
  }, 0);
  tl.to($('.slot-container__column4'), 4.5, {
    ease: Circ.easeOut,
    y: -90 * (i - 1) - 5,
    webkitFilter: "blur(" + .5 + "px)"
  }, 0);
  tl.to($('.slot-container__column4'), .2, {
    ease: Power2.easeIn,
    y: -90 * (i - 1),
    webkitFilter: "blur(" + 0 + "px)"
  }, 4.5);
  setTimeout(function () {
    $('.slot-name4').eq(i - 1).css('filter', 'blur(0.45px)');
    $('.slot-name4').eq(i - 3).css('filter', 'blur(0.45px)');
  }, 2000)

  for (a = 0; a < (i - 1); a++) {
    setTimeout(function () {
      tl = new TimelineMax();
      tl.to($('.slot-name4').eq(a), .005, {
        ease: Power3.easeOut,
        rotationX: 25
      }, 0);
      tl.to($('.slot-name4').eq(a + 1), .005, {
        ease: Power3.easeOut,
        rotationX: 0
      }, 0);
      tl.to($('.slot-name4').eq(a + 2), .005, {
        ease: Power3.easeOut,
        rotationX: -25,
        webkitFilter: "blur(0.25px)"
      }, 0);
    }, 2000 / i);
  };

  var i = $('.slot-name5').length;
  var a;
  tl.set($('.slot-container__column5'), {
    y: 0,
    webkitFilter: "blur(" + .5 + "px)"
  }, 0);
  tl.to($('.slot-container__column5'), 5, {
    ease: Circ.easeOut,
    y: -90 * (i - 1) - 5,
    webkitFilter: "blur(" + .5 + "px)"
  }, 0);
  tl.to($('.slot-container__column5'), .2, {
    ease: Power2.easeIn,
    y: -90 * (i - 1),
    webkitFilter: "blur(" + 0 + "px)"
  }, 5);
  setTimeout(function () {
    $('.slot-name5').eq(i - 1).css('filter', 'blur(0.45px)');
    $('.slot-name5').eq(i - 3).css('filter', 'blur(0.45px)');
  }, 2000)

  for (a = 0; a < (i - 1); a++) {
    setTimeout(function () {
      tl = new TimelineMax();
      tl.to($('.slot-name6').eq(a), .005, {
        ease: Power3.easeOut,
        rotationX: 25
      }, 0);
      tl.to($('.slot-name5').eq(a + 1), .005, {
        ease: Power3.easeOut,
        rotationX: 0
      }, 0);
      tl.to($('.slot-name5').eq(a + 2), .005, {
        ease: Power3.easeOut,
        rotationX: -25,
        webkitFilter: "blur(0.25px)"
      }, 0);
    }, 2000 / i);
  };

  var i = $('.slot-name6').length;
  var a;
  tl.set($('.slot-container__column6'), {
    y: 0,
    webkitFilter: "blur(" + .5 + "px)"
  }, 0);
  tl.to($('.slot-container__column6'), 5.5, {
    ease: Circ.easeOut,
    y: -90 * (i - 1) - 5,
    webkitFilter: "blur(" + .5 + "px)"
  }, 0);
  tl.to($('.slot-container__column6'), .2, {
    ease: Power2.easeIn,
    y: -90 * (i - 1),
    webkitFilter: "blur(" + 0 + "px)"
  }, 5.5);
  setTimeout(function () {
    $('.slot-name6').eq(i - 1).css('filter', 'blur(0.45px)');
    $('.slot-name6').eq(i - 3).css('filter', 'blur(0.45px)');
  }, 2000)

  for (a = 0; a < (i - 1); a++) {
    setTimeout(function () {
      tl = new TimelineMax();
      tl.to($('.slot-name6').eq(a), .005, {
        ease: Power3.easeOut,
        rotationX: 25
      }, 0);
      tl.to($('.slot-name6').eq(a + 1), .005, {
        ease: Power3.easeOut,
        rotationX: 0
      }, 0);
      tl.to($('.slot-name6').eq(a + 2), .005, {
        ease: Power3.easeOut,
        rotationX: -25,
        webkitFilter: "blur(0.25px)"
      }, 0);
    }, 2000 / i);
  };
});

$(document).keypress(function (e) {
  if ((e.which == 13) && (h == 1)) {
    var tl = new TimelineMax();

  	tl.to($('.button'), .25, {
			ease: Power4.easeOut,
			y: 50,
			scaleY: -.5,
			scaleX: .8,
			transformOrigin: "50% 100%"
		}, 0)
		tl.to($('.button'), .25, {
			ease: Power4.easeOut,
			y: 0,
			scale: 1,
			transformOrigin: "50% 100%"
		}, .25)
		tl.to($('.button-circle'), .25, {
			ease: Power4.easeOut,
			y: 320,
			transformOrigin: "50% 50%"
		}, 0)
		tl.to($('.button-circle'), .25, {
			ease: Power4.easeOut,
			y: 0,
			transformOrigin: "50% 50%"
		}, .25)
    tl.to($('.button__shape'), .25, {
      ease: Power4.easeOut,
      y: 30,
      scaleY: .5,
      transformOrigin: "50% 100%"
    }, 0)
    tl.to($('.button__shape'), .25, {
      ease: Power4.easeOut,
      y: 0,
      scaleY: 1,
      transformOrigin: "50% 100%"
    }, .25)
    tl.to($('.button__bottom'), .25, {
      ease: Power4.easeOut,
      y: -70,
      scaleY: -.5,
      transformOrigin: "50% 0%"
    }, 0)
    tl.to($('.button__bottom'), .25, {
      ease: Power4.easeOut,
      y: 0,
      scaleY: 1,
      transformOrigin: "50% 0%"
    }, .25)

    var i = $('.slot-name').length;
    var a;
    tl.set($('.slot-container__column'), {
      y: 0,
      webkitFilter: "blur(" + .5 + "px)"
    }, 0);
    tl.to($('.slot-container__column'), 2, {
      ease: Circ.easeOut,
      y: -90 * (i - 1) - 5,
      webkitFilter: "blur(" + .5 + "px)"
    }, 0);
    tl.to($('.slot-container__column'), .2, {
      ease: Power2.easeIn,
      y: -90 * (i - 1),
      webkitFilter: "blur(" + 0 + "px)"
    }, 2);
    setTimeout(function () {
      $('.slot-name').eq(i - 1).css('filter', 'blur(0.45px)');
      $('.slot-name').eq(i - 3).css('filter', 'blur(0.45px)');
    }, 2000)

    for (a = 0; a < (i - 1); a++) {
      setTimeout(function () {
        tl = new TimelineMax();
        tl.to($('.slot-name').eq(a), .005, {
          ease: Power3.easeOut,
          rotationX: 25
        }, 0);
        tl.to($('.slot-name').eq(a + 1), .005, {
          ease: Power3.easeOut,
          rotationX: 0
        }, 0);
        tl.to($('.slot-name').eq(a + 2), .005, {
          ease: Power3.easeOut,
          rotationX: -25,
          webkitFilter: "blur(0.25px)"
        }, 0);
      }, 2000 / i);
    };

    var i = $('.slot-name1').length;
    var a;
    tl.set($('.slot-container__column1'), {
      y: 0,
      webkitFilter: "blur(" + .5 + "px)"
    }, 0);
    tl.to($('.slot-container__column1'), 3, {
      ease: Circ.easeOut,
      y: -90 * (i - 1) - 5,
      webkitFilter: "blur(" + .5 + "px)"
    }, 0);
    tl.to($('.slot-container__column1'), .2, {
      ease: Power2.easeIn,
      y: -90 * (i - 1),
      webkitFilter: "blur(" + 0 + "px)"
    }, 3);
    setTimeout(function () {
      $('.slot-name1').eq(i - 1).css('filter', 'blur(0.45px)');
      $('.slot-name1').eq(i - 3).css('filter', 'blur(0.45px)');
    }, 2000)

    for (a = 0; a < (i - 1); a++) {
      setTimeout(function () {
        tl = new TimelineMax();
        tl.to($('.slot-name1').eq(a), .005, {
          ease: Power3.easeOut,
          rotationX: 25
        }, 0);
        tl.to($('.slot-name1').eq(a + 1), .005, {
          ease: Power3.easeOut,
          rotationX: 0
        }, 0);
        tl.to($('.slot-name1').eq(a + 2), .005, {
          ease: Power3.easeOut,
          rotationX: -25,
          webkitFilter: "blur(0.25px)"
        }, 0);
      }, 2000 / i);
    };

    var i = $('.slot-name2').length;
    var a;
    tl.set($('.slot-container__column2'), {
      y: 0,
      webkitFilter: "blur(" + .5 + "px)"
    }, 0);
    tl.to($('.slot-container__column2'), 3.5, {
      ease: Circ.easeOut,
      y: -90 * (i - 1) - 5,
      webkitFilter: "blur(" + .5 + "px)"
    }, 0);
    tl.to($('.slot-container__column2'), .2, {
      ease: Power2.easeIn,
      y: -90 * (i - 1),
      webkitFilter: "blur(" + 0 + "px)"
    }, 3.5);
    setTimeout(function () {
      $('.slot-name2').eq(i - 1).css('filter', 'blur(0.45px)');
      $('.slot-name2').eq(i - 3).css('filter', 'blur(0.45px)');
    }, 2000)

    for (a = 0; a < (i - 1); a++) {
      setTimeout(function () {
        tl = new TimelineMax();
        tl.to($('.slot-name2').eq(a), .005, {
          ease: Power3.easeOut,
          rotationX: 25
        }, 0);
        tl.to($('.slot-name2').eq(a + 1), .005, {
          ease: Power3.easeOut,
          rotationX: 0
        }, 0);
        tl.to($('.slot-name2').eq(a + 2), .005, {
          ease: Power3.easeOut,
          rotationX: -25,
          webkitFilter: "blur(0.25px)"
        }, 0);
      }, 2000 / i);
    };

    var i = $('.slot-name3').length;
    var a;
    tl.set($('.slot-container__column3'), {
      y: 0,
      webkitFilter: "blur(" + .5 + "px)"
    }, 0);
    tl.to($('.slot-container__column3'), 4, {
      ease: Circ.easeOut,
      y: -90 * (i - 1) - 5,
      webkitFilter: "blur(" + .5 + "px)"
    }, 0);
    tl.to($('.slot-container__column3'), .2, {
      ease: Power2.easeIn,
      y: -90 * (i - 1),
      webkitFilter: "blur(" + 0 + "px)"
    }, 4);
    setTimeout(function () {
      $('.slot-name3').eq(i - 1).css('filter', 'blur(0.45px)');
      $('.slot-name3').eq(i - 3).css('filter', 'blur(0.45px)');
    }, 2000)

    for (a = 0; a < (i - 1); a++) {
      setTimeout(function () {
        tl = new TimelineMax();
        tl.to($('.slot-name3').eq(a), .005, {
          ease: Power3.easeOut,
          rotationX: 25
        }, 0);
        tl.to($('.slot-name3').eq(a + 1), .005, {
          ease: Power3.easeOut,
          rotationX: 0
        }, 0);
        tl.to($('.slot-name3').eq(a + 2), .005, {
          ease: Power3.easeOut,
          rotationX: -25,
          webkitFilter: "blur(0.25px)"
        }, 0);
      }, 2000 / i);
    };

    var i = $('.slot-name4').length;
    var a;
    tl.set($('.slot-container__column4'), {
      y: 0,
      webkitFilter: "blur(" + .5 + "px)"
    }, 0);
    tl.to($('.slot-container__column4'), 4.5, {
      ease: Circ.easeOut,
      y: -90 * (i - 1) - 5,
      webkitFilter: "blur(" + .5 + "px)"
    }, 0);
    tl.to($('.slot-container__column4'), .2, {
      ease: Power2.easeIn,
      y: -90 * (i - 1),
      webkitFilter: "blur(" + 0 + "px)"
    }, 4.5);
    setTimeout(function () {
      $('.slot-name4').eq(i - 1).css('filter', 'blur(0.45px)');
      $('.slot-name4').eq(i - 3).css('filter', 'blur(0.45px)');
    }, 2000)

    for (a = 0; a < (i - 1); a++) {
      setTimeout(function () {
        tl = new TimelineMax();
        tl.to($('.slot-name4').eq(a), .005, {
          ease: Power3.easeOut,
          rotationX: 25
        }, 0);
        tl.to($('.slot-name4').eq(a + 1), .005, {
          ease: Power3.easeOut,
          rotationX: 0
        }, 0);
        tl.to($('.slot-name4').eq(a + 2), .005, {
          ease: Power3.easeOut,
          rotationX: -25,
          webkitFilter: "blur(0.25px)"
        }, 0);
      }, 2000 / i);
    };

    var i = $('.slot-name5').length;
    var a;
    tl.set($('.slot-container__column5'), {
      y: 0,
      webkitFilter: "blur(" + .5 + "px)"
    }, 0);
    tl.to($('.slot-container__column5'), 5, {
      ease: Circ.easeOut,
      y: -90 * (i - 1) - 5,
      webkitFilter: "blur(" + .5 + "px)"
    }, 0);
    tl.to($('.slot-container__column5'), .2, {
      ease: Power2.easeIn,
      y: -90 * (i - 1),
      webkitFilter: "blur(" + 0 + "px)"
    }, 5);
    setTimeout(function () {
      $('.slot-name5').eq(i - 1).css('filter', 'blur(0.45px)');
      $('.slot-name5').eq(i - 3).css('filter', 'blur(0.45px)');
    }, 2000)

    for (a = 0; a < (i - 1); a++) {
      setTimeout(function () {
        tl = new TimelineMax();
        tl.to($('.slot-name6').eq(a), .005, {
          ease: Power3.easeOut,
          rotationX: 25
        }, 0);
        tl.to($('.slot-name5').eq(a + 1), .005, {
          ease: Power3.easeOut,
          rotationX: 0
        }, 0);
        tl.to($('.slot-name5').eq(a + 2), .005, {
          ease: Power3.easeOut,
          rotationX: -25,
          webkitFilter: "blur(0.25px)"
        }, 0);
      }, 2000 / i);
    };

    var i = $('.slot-name6').length;
    var a;
    tl.set($('.slot-container__column6'), {
      y: 0,
      webkitFilter: "blur(" + .5 + "px)"
    }, 0);
    tl.to($('.slot-container__column6'), 5.5, {
      ease: Circ.easeOut,
      y: -90 * (i - 1) - 5,
      webkitFilter: "blur(" + .5 + "px)"
    }, 0);
    tl.to($('.slot-container__column6'), .2, {
      ease: Power2.easeIn,
      y: -90 * (i - 1),
      webkitFilter: "blur(" + 0 + "px)"
    }, 5.5);
    setTimeout(function () {
      $('.slot-name6').eq(i - 1).css('filter', 'blur(0.45px)');
      $('.slot-name6').eq(i - 3).css('filter', 'blur(0.45px)');
    }, 2000)

    for (a = 0; a < (i - 1); a++) {
      setTimeout(function () {
        tl = new TimelineMax();
        tl.to($('.slot-name6').eq(a), .005, {
          ease: Power3.easeOut,
          rotationX: 25
        }, 0);
        tl.to($('.slot-name6').eq(a + 1), .005, {
          ease: Power3.easeOut,
          rotationX: 0
        }, 0);
        tl.to($('.slot-name6').eq(a + 2), .005, {
          ease: Power3.easeOut,
          rotationX: -25,
          webkitFilter: "blur(0.25px)"
        }, 0);
      }, 2000 / i);
    };
  };
});