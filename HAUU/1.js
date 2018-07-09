/*!
 * VERSION: beta 1.27
 * DATE: 2012-07-27
 * JavaScript (ActionScript 3 and 2 also available)
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * Copyright (c) 2008-2012, GreenSock. All rights reserved. 
 * This work is subject to the terms in http://www.greensock.com/terms_of_use.html or for 
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
//(window._gsQueue || (window._gsQueue = [])).push(function () {
//  _gsDefine("easing.Back", ["easing.Ease"], function (g) {
//    var c = window.com.greensock._class,
//      b = function (a, l) {
//        var b = c("easing." + a, function () {}, !0),
//          d = b.prototype = new g;
//        d.constructor = b;
//        d.getRatio = l;
//        return b
//      },
//      h = function (a, l) {
//        var b = c("easing." + a, function (a) {
//            this._p1 = a || 0 === a ? a : 1.70158;
//            this._p2 = 1.525 * this._p1
//          }, !0),
//          d = b.prototype = new g;
//        d.constructor = b;
//        d.getRatio = l;
//        d.config = function (a) {
//          return new b(a)
//        };
//        return b
//      },
//      n = h("BackOut", function (a) {
//        return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
//      }),
//      o = h("BackIn", function (a) {
//        return a * a * ((this._p1 + 1) * a - this._p1)
//      }),
//      h = h("BackInOut", function (a) {
//        return 1 > (a *= 2) ? 0.5 * a * a * ((this._p2 + 1) * a - this._p2) : 0.5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
//      }),
//      p = b("BounceOut", function (a) {
//        return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
//      }),
//      q = b("BounceIn", function (a) {
//        return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : a < 2 / 2.75 ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) : a < 2.5 / 2.75 ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375)
//      }),
//      r = b("BounceInOut", function (a) {
//        var b = 0.5 > a,
//          a = b ? 1 - 2 * a : 2 * a - 1,
//          a = a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
//        return b ? 0.5 * (1 - a) : 0.5 * a + 0.5
//      }),
//      s = b("CircOut", function (a) {
//        return Math.sqrt(1 - (a -= 1) * a)
//      }),
//      t = b("CircIn", function (a) {
//        return -(Math.sqrt(1 - a * a) - 1)
//      }),
//      u = b("CircInOut", function (a) {
//        return 1 > (a *= 2) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
//      }),
//      i = 2 * Math.PI,
//      j = function (a, b, e) {
//        var d = c("easing." + a, function (a, b) {
//            this._p1 = a || 1;
//            this._p2 = b || e;
//            this._p3 = this._p2 / i * (Math.asin(1 / this._p1) || 0)
//          }, !0),
//          a = d.prototype = new g;
//        a.constructor = d;
//        a.getRatio = b;
//        a.config = function (a, b) {
//          return new d(a, b)
//        };
//        return d
//      },
//      v = j("ElasticOut", function (a) {
//        return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * i / this._p2) + 1
//      }, 0.3),
//      w = j("ElasticIn", function (a) {
//        return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * i / this._p2))
//      }, 0.3),
//      j = j("ElasticInOut", function (a) {
//        return 1 > (a *= 2) ? -0.5 * this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * i / this._p2) : 0.5 * this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * i / this._p2) + 1
//      }, 0.45),
//      x = b("ExpoOut", function (a) {
//        return 1 - Math.pow(2, -10 * a)
//      }),
//      y = b("ExpoIn", function (a) {
//        return Math.pow(2, 10 * (a - 1)) - 0.001
//      }),
//      z = b("ExpoInOut", function (a) {
//        return 1 > (a *= 2) ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * (2 - Math.pow(2, -10 * (a - 1)))
//      }),
//      m = Math.PI / 2,
//      A = b("SineOut", function (a) {
//        return Math.sin(a * m)
//      }),
//      B = b("SineIn", function (a) {
//        return -Math.cos(a * m) + 1
//      }),
//      b = b("SineInOut", function (a) {
//        return -0.5 * (Math.cos(Math.PI * a) - 1)
//      }),
//      f = c("easing.SlowMo", function (a, b, c) {
//        null == a ? a = 0.7 : 1 < a && (a = 1);
//        this._p = 1 != a ? b || 0 === b ? b : 0.7 : 0;
//        this._p1 = (1 - a) / 2;
//        this._p2 = a;
//        this._p3 = this._p1 + this._p2;
//        this._calcEnd = !0 === c
//      }, !0),
//      e = f.prototype = new g;
//    e.constructor = f;
//    e.getRatio = function (a) {
//      var b = a + (0.5 - a) * this._p;
//      return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
//    };
//    f.ease = new f(0.7, 0.7);
//    e.config = f.config = function (a, b, c) {
//      return new f(a, b, c)
//    };
//    var k = c("easing.SteppedEase", function (a) {
//        a = a || 1;
//        this._p1 = 1 / a;
//        this._p2 = a + 1
//      }, !0),
//      e = k.prototype = new g;
//    e.constructor = k;
//    e.getRatio = function (a) {
//      0 > a ? a = 0 : 1 <= a && (a = 0.999999999);
//      return (this._p2 * a >> 0) * this._p1
//    };
//    e.config = k.config = function (a) {
//      return new k(a)
//    };
//    c("easing.Bounce", {
//      easeOut: new p,
//      easeIn: new q,
//      easeInOut: new r
//    }, !0);
//    c("easing.Circ", {
//      easeOut: new s,
//      easeIn: new t,
//      easeInOut: new u
//    }, !0);
//    c("easing.Elastic", {
//      easeOut: new v,
//      easeIn: new w,
//      easeInOut: new j
//    }, !0);
//    c("easing.Expo", {
//      easeOut: new x,
//      easeIn: new y,
//      easeInOut: new z
//    }, !0);
//    c("easing.Sine", {
//      easeOut: new A,
//      easeIn: new B,
//      easeInOut: new b
//    }, !0);
//    return {
//      easeOut: new n,
//      easeIn: new o,
//      easeInOut: new h
//    }
//  }, !0)
//});
//window._gsDefine && _gsQueue.pop()();

function setMenu() {
 
  var n0roll = document.getElementById("n0roll");
  var n1roll = document.getElementById("n1roll");
  var n2roll = document.getElementById("n2roll");
  var n3roll = document.getElementById("n3roll");
  var n4roll = document.getElementById("n4roll");
  var n5roll = document.getElementById("n5roll");
  var n6roll = document.getElementById("n6roll");
  var n7roll = document.getElementById("n7roll");
  var n8roll = document.getElementById("n8roll");
  var n9roll = document.getElementById("n9roll");
  var n10roll = document.getElementById("n10roll");
  var n11roll = document.getElementById("n11roll");
  var n12roll = document.getElementById("n12roll");
  if (!isTouch) {
    
    $(n0roll).bind("mouseover", mouseOver1_2);
    $(n0roll).bind("mouseout", mouseOut_2);
    $(n0roll).bind("click", click1R);
    
    $(n1roll).bind("mouseover", mouseOver2_2);
    $(n1roll).bind("mouseout", mouseOut_2);
    $(n1roll).bind("click", click2R);
    
    $(n2roll).bind("mouseover", mouseOver3_2);
    $(n2roll).bind("mouseout", mouseOut_2);
    $(n2roll).bind("click", click3R);
    
    $(n3roll).bind("mouseover", mouseOver4_2);
    $(n3roll).bind("mouseout", mouseOut_2);
    $(n3roll).bind("click", click4R);
    
    $(n4roll).bind("mouseover", mouseOver5_2);
    $(n4roll).bind("mouseout", mouseOut_2);
    $(n4roll).bind("click", click5R);
    
    $(n5roll).bind("mouseover", mouseOver6_2);
    $(n5roll).bind("mouseout", mouseOut_2);
    $(n5roll).bind("click", click6R);
    
    $(n6roll).bind("mouseover", mouseOver7_2);
    $(n6roll).bind("mouseout", mouseOut_2);
    $(n6roll).bind("click", click7R);
    
    $(n7roll).bind("mouseover", mouseOver8_2);
    $(n7roll).bind("mouseout", mouseOut_2);
    $(n7roll).bind("click", click8R);
    
    $(n8roll).bind("mouseover", mouseOver9_2);
    $(n8roll).bind("mouseout", mouseOut_2);
    $(n8roll).bind("click", click9R);
    
    $(n9roll).bind("mouseover", mouseOver10_2);
    $(n9roll).bind("mouseout", mouseOut_2);
    $(n9roll).bind("click", click10R);
    
    $(n10roll).bind("mouseover", mouseOver11_2);
    $(n10roll).bind("mouseout", mouseOut_2);
    $(n10roll).bind("click", click11R);
    
    $(n11roll).bind("mouseover", mouseOver12_2);
    $(n11roll).bind("mouseout", mouseOut_2);
    $(n11roll).bind("click", click12R);
    
    $(n12roll).bind("mouseover", mouseOver13_2);
    $(n12roll).bind("mouseout", mouseOut_2);
    $(n12roll).bind("click", click13R);
    
  
  } 
}


function click1R(e) {
  if (e != null) e.preventDefault();
  BMSite.currentScrollY = 0;
  var currentSiteOld = BMSite.currentSiteScroll;
  BMSite.currentSite = 0;
  setHashSilently(BMSite.sitesArray[BMSite.currentSite]);

  var dist = Math.abs(BMSite.currentSite - currentSiteOld);
  if (dist == 0) dist = 0.5;
  var tl = new TimelineLite;
  var pos = BMSite.currentSite - currentSiteOld > 0 ? -1 : 1;
  if (dist == 1) tl.to(window, dist * 1.5, {
    scrollTo: {
      y: BMSite.currentScrollY + pos * 200 * BMSite.siteScale
    },
    ease: SlowMo.ease,
    onUpdate: scrollSpecialUseRight
  });
  tl.to(window, dist * 0.5, {
    scrollTo: {
      y: BMSite.currentScrollY
    },
    ease: Power4.easeOut,
    onUpdate: scrollSpecialUseRight
  });
}

function click2R(e) {
  if (e != null) e.preventDefault();
  BMSite.currentScrollY = 1600 * BMSite.siteScale;
  var currentSiteOld = BMSite.currentSiteScroll;
  BMSite.currentSite = 1;
  setHashSilently(BMSite.sitesArray[BMSite.currentSite]);

  var dist = Math.abs(BMSite.currentSite - currentSiteOld);
  if (dist == 0) dist = 0.5;
  var tl = new TimelineLite;
  var pos = BMSite.currentSite - currentSiteOld > 0 ? -1 : 1;
  if (dist == 1) tl.to(window, dist * 1.5, {
    scrollTo: {
      y: BMSite.currentScrollY +
        pos * 200 * BMSite.siteScale
    },
    ease: SlowMo.ease,
    onUpdate: scrollSpecialUseRight
  });
  tl.to(window, dist * 0.5, {
    scrollTo: {
      y: BMSite.currentScrollY
    },
    ease: Power4.easeOut,
    onUpdate: scrollSpecialUseRight
  });
}

function click3R(e) {
  if (e != null) e.preventDefault();
  BMSite.currentScrollY = 3140 * BMSite.siteScale;
  var currentSiteOld = BMSite.currentSiteScroll;
  BMSite.currentSite = 2;
  setHashSilently(BMSite.sitesArray[BMSite.currentSite]);

  var dist = Math.abs(BMSite.currentSite - currentSiteOld);
  if (dist == 0) dist = 0.5;
  var tl = new TimelineLite;
  var pos = BMSite.currentSite - currentSiteOld > 0 ? -1 : 1;
  if (dist == 1) tl.to(window, dist * 1.5, {
    scrollTo: {
      y: BMSite.currentScrollY +
        pos * 200 * BMSite.siteScale
    },
    ease: SlowMo.ease,
    onUpdate: scrollSpecialUseRight
  });
  tl.to(window, dist * 0.5, {
    scrollTo: {
      y: BMSite.currentScrollY
    },
    ease: Power4.easeOut,
    onUpdate: scrollSpecialUseRight
  });
}

function click4R(e) {
  if (e != null) e.preventDefault();
  BMSite.currentScrollY = 4690 * BMSite.siteScale;
  var currentSiteOld = BMSite.currentSiteScroll;
  BMSite.currentSite = 3;
  setHashSilently(BMSite.sitesArray[BMSite.currentSite]);

  var dist = Math.abs(BMSite.currentSite - currentSiteOld);
  if (dist == 0) dist = 0.5;
  var tl = new TimelineLite;
  var pos = BMSite.currentSite - currentSiteOld > 0 ? -1 : 1;
  if (dist == 1) tl.to(window, dist * 1.5, {
    scrollTo: {
      y: BMSite.currentScrollY +
        pos * 200 * BMSite.siteScale
    },
    ease: SlowMo.ease,
    onUpdate: scrollSpecialUseRight
  });
  tl.to(window, dist * 0.5, {
    scrollTo: {
      y: BMSite.currentScrollY
    },
    ease: Power4.easeOut,
    onUpdate: scrollSpecialUseRight
  });
}

function click5R(e) {
  if (e != null) e.preventDefault();
  BMSite.currentScrollY = 6216 * BMSite.siteScale;
  var currentSiteOld = BMSite.currentSiteScroll;
  BMSite.currentSite = 4;
  setHashSilently(BMSite.sitesArray[BMSite.currentSite]);

  var dist = Math.abs(BMSite.currentSite - currentSiteOld);
  if (dist == 0) dist = 0.5;
  var tl = new TimelineLite;
  var pos = BMSite.currentSite - currentSiteOld > 0 ? -1 : 1;
  if (dist == 1) tl.to(window, dist * 1.5, {
    scrollTo: {
      y: BMSite.currentScrollY +
        pos * 200 * BMSite.siteScale
    },
    ease: SlowMo.ease,
    onUpdate: scrollSpecialUseRight
  });
  tl.to(window, dist * 0.5, {
    scrollTo: {
      y: BMSite.currentScrollY
    },
    ease: Power4.easeOut,
    onUpdate: scrollSpecialUseRight
  });
}

function click6R(e) {
  if (e != null) e.preventDefault();
  BMSite.currentScrollY = 7306 * BMSite.siteScale;
  var currentSiteOld = BMSite.currentSiteScroll;
  BMSite.currentSite = 5;
  setHashSilently(BMSite.sitesArray[BMSite.currentSite]);
 
  var dist = Math.abs(BMSite.currentSite - currentSiteOld);
  if (dist == 0) dist = 0.5;
  TweenLite.to(window, 0.5 * dist, {
    scrollTo: {
      y: BMSite.currentScrollY
    },
    overwrite: "all",
    ease: Power4.easeOut,
    onUpdate: scrollSpecialUseRight
  });
}

function click7R(e) {
  if (e != null) e.preventDefault();
  BMSite.currentScrollY = 8806 * BMSite.siteScale;
  var currentSiteOld = BMSite.currentSiteScroll;
  BMSite.currentSite = 6;
  setHashSilently(BMSite.sitesArray[BMSite.currentSite]);

  var dist = Math.abs(BMSite.currentSite - currentSiteOld);
  if (dist == 0) dist = 0.5;
  TweenLite.to(window, 0.5 * dist, {
    scrollTo: {
      y: BMSite.currentScrollY
    },
    overwrite: "all",
    ease: Power4.easeOut,
    onUpdate: scrollSpecialUseRight
  });
}

function click8R(e) {
  if (e != null) e.preventDefault();
  BMSite.currentScrollY = 10306 * BMSite.siteScale;
  var currentSiteOld = BMSite.currentSiteScroll;
  BMSite.currentSite = 7;
  setHashSilently(BMSite.sitesArray[BMSite.currentSite]);

  var dist = Math.abs(BMSite.currentSite - currentSiteOld);
  if (dist == 0) dist = 0.5;
  TweenLite.to(window, 0.5 * dist, {
    scrollTo: {
      y: BMSite.currentScrollY
    },
    overwrite: "all",
    ease: Power4.easeOut,
    onUpdate: scrollSpecialUseRight
  });
}

function click9R(e) {
  if (e != null) e.preventDefault();
  BMSite.currentScrollY = 11806 * BMSite.siteScale;
  var currentSiteOld = BMSite.currentSiteScroll;
  BMSite.currentSite = 8;
  setHashSilently(BMSite.sitesArray[BMSite.currentSite]);

  var dist = Math.abs(BMSite.currentSite - currentSiteOld);
  if (dist == 0) dist = 0.5;
  TweenLite.to(window, 0.5 * dist, {
    scrollTo: {
      y: BMSite.currentScrollY
    },
    overwrite: "all",
    ease: Power4.easeOut,
    onUpdate: scrollSpecialUseRight
  });
}

function click10R(e) {
  if (e != null) e.preventDefault();
  BMSite.currentScrollY = 13306 * BMSite.siteScale;
  var currentSiteOld = BMSite.currentSiteScroll;
  BMSite.currentSite = 9;
  setHashSilently(BMSite.sitesArray[BMSite.currentSite]);

  var dist = Math.abs(BMSite.currentSite - currentSiteOld);
  if (dist == 0) dist = 0.5;
  TweenLite.to(window, 0.5 * dist, {
    scrollTo: {
      y: BMSite.currentScrollY
    },
    overwrite: "all",
    ease: Power4.easeOut,
    onUpdate: scrollSpecialUseRight
  });
}

function click11R(e) {
  if (e != null) e.preventDefault();
  BMSite.currentScrollY = 14806 * BMSite.siteScale;
  var currentSiteOld = BMSite.currentSiteScroll;
  BMSite.currentSite = 10;
  setHashSilently(BMSite.sitesArray[BMSite.currentSite]);

  var dist = Math.abs(BMSite.currentSite - currentSiteOld);
  if (dist == 0) dist = 0.5;
  TweenLite.to(window, 0.5 * dist, {
    scrollTo: {
      y: BMSite.currentScrollY
    },
    overwrite: "all",
    ease: Power4.easeOut,
    onUpdate: scrollSpecialUseRight
  });
}

function click12R(e) {
  if (e != null) e.preventDefault();
  BMSite.currentScrollY = 16306 * BMSite.siteScale;
  var currentSiteOld = BMSite.currentSiteScroll;
  BMSite.currentSite = 11;
  setHashSilently(BMSite.sitesArray[BMSite.currentSite]);

  var dist = Math.abs(BMSite.currentSite - currentSiteOld);
  if (dist == 0) dist = 0.5;
  TweenLite.to(window, 0.5 * dist, {
    scrollTo: {
      y: BMSite.currentScrollY
    },
    overwrite: "all",
    ease: Power4.easeOut,
    onUpdate: scrollSpecialUseRight
  });
}



//
//function mouseOut_2(e) {
//  switch (BMSite.currentSite) {
//    case 0:
//      TweenLite.to(naviNumbersH, 0.3, {
//        css: {
//          "top": 0
//        },
//        ease: Sine.easeOut,
//        overwrite: "all"
//      });
//      TweenLite.to(naviNumbers, 0.2, {
//        css: {
//          "top": 0
//        },
//        ease: Sine.easeOut,
//        overwrite: "all"
//      });
//      if (canvasNaviObj)
//        if (canvasNaviObj.mask1) {
//          TweenLite.to(canvasNaviObj.mask1, 0.4, {
//            y: 0,
//            ease: Sine.easeNone,
//            overwrite: "all"
//          });
//          TweenLite.to(canvasNaviObj.mask2, 0.4, {
//            y: 0,
//            ease: Sine.easeNone,
//            overwrite: "all",
//            onUpdate: function () {
//              updateRightNavi()
//            }
//          })
//        }
//      break;
//    case 1:
//      TweenLite.to(naviNumbersH, 0.3, {
//        css: {
//          "top": 41 *
//            BMSite.siteScale
//        },
//        ease: Sine.easeOut,
//        overwrite: "all"
//      });
//      TweenLite.to(naviNumbers, 0.2, {
//        css: {
//          "top": -41 * BMSite.siteScale
//        },
//        ease: Sine.easeOut,
//        overwrite: "all"
//      });
//      if (canvasNaviObj)
//        if (canvasNaviObj.mask1) {
//          TweenLite.to(canvasNaviObj.mask1, 0.4, {
//            y: 42,
//            ease: Sine.easeNone,
//            overwrite: "all"
//          });
//          TweenLite.to(canvasNaviObj.mask2, 0.4, {
//            y: 42,
//            ease: Sine.easeNone,
//            overwrite: "all",
//            onUpdate: function () {
//              updateRightNavi()
//            }
//          })
//        }
//      break;
//    case 2:
//      TweenLite.to(naviNumbersH, 0.3, {
//        css: {
//          "top": 83 * BMSite.siteScale
//        },
//        ease: Sine.easeOut,
//        overwrite: "all"
//      });
//      TweenLite.to(naviNumbers, 0.2, {
//        css: {
//          "top": -83 * BMSite.siteScale
//        },
//        ease: Sine.easeOut,
//        overwrite: "all"
//      });
//      if (canvasNaviObj)
//        if (canvasNaviObj.mask1) {
//          TweenLite.to(canvasNaviObj.mask1, 0.4, {
//            y: 84,
//            ease: Sine.easeNone,
//            overwrite: "all"
//          });
//          TweenLite.to(canvasNaviObj.mask2, 0.4, {
//            y: 84,
//            ease: Sine.easeNone,
//            overwrite: "all",
//            onUpdate: function () {
//              updateRightNavi()
//            }
//          })
//        }
//      break;
//    case 3:
//      TweenLite.to(naviNumbersH, 0.3, {
//        css: {
//          "top": 125 * BMSite.siteScale
//        },
//        ease: Sine.easeOut,
//        overwrite: "all"
//      });
//      TweenLite.to(naviNumbers, 0.2, {
//        css: {
//          "top": -125 * BMSite.siteScale
//        },
//        ease: Sine.easeOut,
//        overwrite: "all"
//      });
//      if (canvasNaviObj)
//        if (canvasNaviObj.mask1) {
//          TweenLite.to(canvasNaviObj.mask1, 0.4, {
//            y: 126,
//            ease: Sine.easeNone,
//            overwrite: "all"
//          });
//          TweenLite.to(canvasNaviObj.mask2, 0.4, {
//            y: 126,
//            ease: Sine.easeNone,
//            overwrite: "all",
//            onUpdate: function () {
//              updateRightNavi()
//            }
//          })
//        }
//      break;
//    case 4:
//      TweenLite.to(naviNumbersH, 0.3, {
//        css: {
//          "top": 167 * BMSite.siteScale
//        },
//        ease: Sine.easeOut,
//        overwrite: "all"
//      });
//      TweenLite.to(naviNumbers, 0.2, {
//        css: {
//          "top": -167 * BMSite.siteScale
//        },
//        ease: Sine.easeOut,
//        overwrite: "all"
//      });
//      if (canvasNaviObj)
//        if (canvasNaviObj.mask1) {
//          TweenLite.to(canvasNaviObj.mask1,
//            0.4, {
//              y: 168,
//              ease: Sine.easeNone,
//              overwrite: "all"
//            });
//          TweenLite.to(canvasNaviObj.mask2, 0.4, {
//            y: 168,
//            ease: Sine.easeNone,
//            overwrite: "all",
//            onUpdate: function () {
//              updateRightNavi()
//            }
//          })
//        }
//      break;
//    case 5:
//      TweenLite.to(naviNumbersH, 0.3, {
//        css: {
//          "top": 209 * BMSite.siteScale
//        },
//        ease: Sine.easeOut,
//        overwrite: "all"
//      });
//      TweenLite.to(naviNumbers, 0.2, {
//        css: {
//          "top": -209 * BMSite.siteScale
//        },
//        ease: Sine.easeOut,
//        overwrite: "all"
//      });
//      if (canvasNaviObj)
//        if (canvasNaviObj.mask1) {
//          TweenLite.to(canvasNaviObj.mask1, 0.4, {
//            y: 210,
//            ease: Sine.easeNone,
//            overwrite: "all"
//          });
//          TweenLite.to(canvasNaviObj.mask2, 0.4, {
//            y: 210,
//            ease: Sine.easeNone,
//            overwrite: "all",
//            onUpdate: function () {
//              updateRightNavi()
//            }
//          })
//        }
//      break
//  }
//}
//
//
//
//function mouseOver1_2(e) {
//  TweenLite.to(naviNumbersH, 0.3, {
//    css: {
//      "top": 0
//    },
//    ease: Back.easeOut,
//    overwrite: "all"
//  });
//  TweenLite.to(naviNumbers, 0.2, {
//    css: {
//      "top": 0
//    },
//    ease: Sine.easeOut,
//    overwrite: "all"
//  });
//  if (canvasNaviObj)
//    if (canvasNaviObj.mask1) {
//      TweenLite.to(canvasNaviObj.mask1, 0.4, {
//        y: 0,
//        ease: Sine.easeNone,
//        overwrite: "all"
//      });
//      TweenLite.to(canvasNaviObj.mask2, 0.4, {
//        y: 0,
//        ease: Sine.easeNone,
//        overwrite: "all",
//        onUpdate: function () {
//          updateRightNavi()
//        }
//      })
//    }
//  if (BMSite.currentSite == 0) return;
//  if (BMSite.clack != null) createjs.Sound.play("clack",
//    "none", 0, 0, 0, 0.5)
//}
//
//function mouseOver2_2(e) {
//  TweenLite.to(naviNumbersH, 0.3, {
//    css: {
//      "top": 41 * BMSite.siteScale
//    },
//    ease: Back.easeOut,
//    overwrite: "all"
//  });
//  TweenLite.to(naviNumbers, 0.2, {
//    css: {
//      "top": -41 * BMSite.siteScale
//    },
//    ease: Sine.easeOut,
//    overwrite: "all"
//  });
//  if (canvasNaviObj)
//    if (canvasNaviObj.mask1) {
//      TweenLite.to(canvasNaviObj.mask1, 0.4, {
//        y: 42,
//        ease: Sine.easeNone,
//        overwrite: "all"
//      });
//      TweenLite.to(canvasNaviObj.mask2, 0.4, {
//        y: 42,
//        ease: Sine.easeNone,
//        overwrite: "all",
//        onUpdate: function () {
//          updateRightNavi()
//        }
//      })
//    }
//  if (BMSite.currentSite == 1) return;
//  if (BMSite.clack !=
//    null) createjs.Sound.play("clack", "none", 0, 0, 0, 0.5)
//}
//
//function mouseOver3_2(e) {
//  TweenLite.to(naviNumbersH, 0.3, {
//    css: {
//      "top": 83 * BMSite.siteScale
//    },
//    ease: Back.easeOut,
//    overwrite: "all"
//  });
//  TweenLite.to(naviNumbers, 0.2, {
//    css: {
//      "top": -83 * BMSite.siteScale
//    },
//    ease: Sine.easeOut,
//    overwrite: "all"
//  });
//  if (canvasNaviObj)
//    if (canvasNaviObj.mask1) {
//      TweenLite.to(canvasNaviObj.mask1, 0.4, {
//        y: 84,
//        ease: Sine.easeNone,
//        overwrite: "all"
//      });
//      TweenLite.to(canvasNaviObj.mask2, 0.4, {
//        y: 84,
//        ease: Sine.easeNone,
//        overwrite: "all",
//        onUpdate: function () {
//          updateRightNavi()
//        }
//      })
//    }
//  if (BMSite.currentSite == 2) return;
//  if (BMSite.clack !=
//    null) createjs.Sound.play("clack", "none", 0, 0, 0, 0.5)
//}
//
//function mouseOver4_2(e) {
//  TweenLite.to(naviNumbersH, 0.3, {
//    css: {
//      "top": 125 * BMSite.siteScale
//    },
//    ease: Back.easeOut,
//    overwrite: "all"
//  });
//  TweenLite.to(naviNumbers, 0.2, {
//    css: {
//      "top": -125 * BMSite.siteScale
//    },
//    ease: Sine.easeOut,
//    overwrite: "all"
//  });
//  if (canvasNaviObj)
//    if (canvasNaviObj.mask1) {
//      TweenLite.to(canvasNaviObj.mask1, 0.4, {
//        y: 126,
//        ease: Sine.easeNone,
//        overwrite: "all"
//      });
//      TweenLite.to(canvasNaviObj.mask2, 0.4, {
//        y: 126,
//        ease: Sine.easeNone,
//        overwrite: "all",
//        onUpdate: function () {
//          updateRightNavi()
//        }
//      })
//    }
//  if (BMSite.currentSite == 3) return;
//  if (BMSite.clack !=
//    null) createjs.Sound.play("clack", "none", 0, 0, 0, 0.5)
//}
//
//function mouseOver5_2(e) {
//  TweenLite.to(naviNumbersH, 0.3, {
//    css: {
//      "top": 167 * BMSite.siteScale
//    },
//    ease: Back.easeOut,
//    overwrite: "all"
//  });
//  TweenLite.to(naviNumbers, 0.2, {
//    css: {
//      "top": -167 * BMSite.siteScale
//    },
//    ease: Sine.easeOut,
//    overwrite: "all"
//  });
//  if (canvasNaviObj)
//    if (canvasNaviObj.mask1) {
//      TweenLite.to(canvasNaviObj.mask1, 0.4, {
//        y: 168,
//        ease: Sine.easeNone,
//        overwrite: "all"
//      });
//      TweenLite.to(canvasNaviObj.mask2, 0.4, {
//        y: 168,
//        ease: Sine.easeNone,
//        overwrite: "all",
//        onUpdate: function () {
//          updateRightNavi()
//        }
//      })
//    }
//  if (BMSite.currentSite == 4) return;
//  if (BMSite.clack !=
//    null) createjs.Sound.play("clack", "none", 0, 0, 0, 0.5)
//}
//
//function mouseOver6_2(e) {
//  TweenLite.to(naviNumbersH, 0.3, {
//    css: {
//      "top": 209 * BMSite.siteScale
//    },
//    ease: Back.easeOut,
//    overwrite: "all"
//  });
//  TweenLite.to(naviNumbers, 0.2, {
//    css: {
//      "top": -209 * BMSite.siteScale
//    },
//    ease: Sine.easeOut,
//    overwrite: "all"
//  });
//  if (canvasNaviObj)
//    if (canvasNaviObj.mask1) {
//      TweenLite.to(canvasNaviObj.mask1, 0.4, {
//        y: 210,
//        ease: Sine.easeNone,
//        overwrite: "all"
//      });
//      TweenLite.to(canvasNaviObj.mask2, 0.4, {
//        y: 210,
//        ease: Sine.easeNone,
//        overwrite: "all",
//        onUpdate: function () {
//          updateRightNavi()
//        }
//      })
//    }
//  if (BMSite.currentSite == 5) return;
//  if (BMSite.clack !=
//    null) createjs.Sound.play("clack", "none", 0, 0, 0, 0.5)
//}
//
//function mouseOver1(e) {
//  if (e != null) e.preventDefault();
//  var item01 = document.getElementById("item01_1");
//  var item02 = document.getElementById("item01_2");
//  var number = document.getElementById("nr00");
//  TweenLite.to(number, 0.2, {
//    css: {
//      color: "#eabd44"
//    },
//    ease: Sine.easeOut,
//    overwrite: "all"
//  });
//  TweenLite.to(item01, 0.2, {
//    css: {
//      top: -20
//    },
//    ease: Sine.easeOut,
//    overwrite: "all"
//  });
//  TweenLite.to(item02, 0.2, {
//    css: {
//      top: 19
//    },
//    ease: Sine.easeOut,
//    overwrite: "all"
//  });
//  if (BMSite.currentSite == 0) return;
//  if (e == null) return;
//  if (BMSite.clack != null) createjs.Sound.play("clack",
//    "none", 0, 0, 0, 0.5)
//}
//
//function mouseOut1(e) {
//  if (e != null) e.preventDefault();
//  if (BMSite.currentSite != 0) {
//    var item01 = document.getElementById("item01_1");
//    var item02 = document.getElementById("item01_2");
//    var number = document.getElementById("nr00");
//    TweenLite.to(number, 0.2, {
//      css: {
//        color: "#787583"
//      },
//      ease: Sine.easeOut,
//      overwrite: "all"
//    });
//    TweenLite.to(item01, 0.2, {
//      css: {
//        top: 19
//      },
//      ease: Sine.easeOut,
//      overwrite: "all"
//    });
//    TweenLite.to(item02, 0.2, {
//      css: {
//        top: 50
//      },
//      ease: Sine.easeOut,
//      overwrite: "all"
//    })
//  }
//}
//
//function mouseOver2(e) {
//  if (e != null) e.preventDefault();
//  var item01 = document.getElementById("item02_1");
//  var item02 = document.getElementById("item02_2");
//  var number = document.getElementById("nr01");
//  TweenLite.to(number, 0.2, {
//    css: {
//      color: "#eabd44"
//    },
//    ease: Sine.easeOut,
//    overwrite: "all"
//  });
//  TweenLite.to(item01, 0.2, {
//    css: {
//      top: -20
//    },
//    ease: Sine.easeOut,
//    overwrite: "all"
//  });
//  TweenLite.to(item02, 0.2, {
//    css: {
//      top: 19
//    },
//    ease: Sine.easeOut,
//    overwrite: "all"
//  });
//  if (BMSite.currentSite == 1) return;
//  if (e == null) return;
//  if (BMSite.clack != null) createjs.Sound.play("clack",
//    "none", 0, 0, 0, 0.5)
//}
//
//function mouseOut2(e) {
//  if (e != null) e.preventDefault();
//  if (BMSite.currentSite != 1) {
//    var item01 = document.getElementById("item02_1");
//    var item02 = document.getElementById("item02_2");
//    var number = document.getElementById("nr01");
//    TweenLite.to(number, 0.2, {
//      css: {
//        color: "#787583"
//      },
//      ease: Sine.easeOut,
//      overwrite: "all"
//    });
//    TweenLite.to(item01, 0.2, {
//      css: {
//        top: 19
//      },
//      ease: Sine.easeOut,
//      overwrite: "all"
//    });
//    TweenLite.to(item02, 0.2, {
//      css: {
//        top: 50
//      },
//      ease: Sine.easeOut,
//      overwrite: "all"
//    })
//  }
//}
//
//function mouseOver3(e) {
//  if (e != null) e.preventDefault();
//  var item01 = document.getElementById("item03_1");
//  var item02 = document.getElementById("item03_2");
//  var number = document.getElementById("nr02");
//  TweenLite.to(number, 0.2, {
//    css: {
//      color: "#eabd44"
//    },
//    ease: Sine.easeOut,
//    overwrite: "all"
//  });
//  TweenLite.to(item01, 0.2, {
//    css: {
//      top: -20
//    },
//    ease: Sine.easeOut,
//    overwrite: "all"
//  });
//  TweenLite.to(item02, 0.2, {
//    css: {
//      top: 19
//    },
//    ease: Sine.easeOut,
//    overwrite: "all"
//  });
//  if (BMSite.currentSite == 2) return;
//  if (e == null) return;
//  if (BMSite.clack != null) createjs.Sound.play("clack",
//    "none", 0, 0, 0, 0.5)
//}
//
//function mouseOut3(e) {
//  if (e != null) e.preventDefault();
//  if (BMSite.currentSite != 2) {
//    var item01 = document.getElementById("item03_1");
//    var item02 = document.getElementById("item03_2");
//    var number = document.getElementById("nr02");
//    TweenLite.to(number, 0.2, {
//      css: {
//        color: "#787583"
//      },
//      ease: Sine.easeOut,
//      overwrite: "all"
//    });
//    TweenLite.to(item01, 0.2, {
//      css: {
//        top: 19
//      },
//      ease: Sine.easeOut,
//      overwrite: "all"
//    });
//    TweenLite.to(item02, 0.2, {
//      css: {
//        top: 50
//      },
//      ease: Sine.easeOut,
//      overwrite: "all"
//    })
//  }
//}
//
//function mouseOver4(e) {
//  if (e != null) e.preventDefault();
//  var item01 = document.getElementById("item04_1");
//  var item02 = document.getElementById("item04_2");
//  var number = document.getElementById("nr03");
//  TweenLite.to(number, 0.2, {
//    css: {
//      color: "#eabd44"
//    },
//    ease: Sine.easeOut,
//    overwrite: "all"
//  });
//  TweenLite.to(item01, 0.2, {
//    css: {
//      top: -20
//    },
//    ease: Sine.easeOut,
//    overwrite: "all"
//  });
//  TweenLite.to(item02, 0.2, {
//    css: {
//      top: 19
//    },
//    ease: Sine.easeOut,
//    overwrite: "all"
//  });
//  if (BMSite.currentSite == 3) return;
//  if (e == null) return;
//  if (BMSite.clack != null) createjs.Sound.play("clack",
//    "none", 0, 0, 0, 0.5)
//}
//
//function mouseOut4(e) {
//  if (e != null) e.preventDefault();
//  if (BMSite.currentSite != 3) {
//    var item01 = document.getElementById("item04_1");
//    var item02 = document.getElementById("item04_2");
//    var number = document.getElementById("nr03");
//    TweenLite.to(number, 0.2, {
//      css: {
//        color: "#787583"
//      },
//      ease: Sine.easeOut,
//      overwrite: "all"
//    });
//    TweenLite.to(item01, 0.2, {
//      css: {
//        top: 19
//      },
//      ease: Sine.easeOut,
//      overwrite: "all"
//    });
//    TweenLite.to(item02, 0.2, {
//      css: {
//        top: 50
//      },
//      ease: Sine.easeOut,
//      overwrite: "all"
//    })
//  }
//}
//
//function mouseOver5(e) {
//  if (e != null) e.preventDefault();
//  var item01 = document.getElementById("item05_1");
//  var item02 = document.getElementById("item05_2");
//  var number = document.getElementById("nr04");
//  TweenLite.to(number, 0.2, {
//    css: {
//      color: "#eabd44"
//    },
//    ease: Sine.easeOut,
//    overwrite: "all"
//  });
//  TweenLite.to(item01, 0.2, {
//    css: {
//      top: -20
//    },
//    ease: Sine.easeOut,
//    overwrite: "all"
//  });
//  TweenLite.to(item02, 0.2, {
//    css: {
//      top: 19
//    },
//    ease: Sine.easeOut,
//    overwrite: "all"
//  });
//  if (BMSite.currentSite == 4) return;
//  if (e == null) return;
//  if (BMSite.clack != null) createjs.Sound.play("clack",
//    "none", 0, 0, 0, 0.5)
//}
//
//function mouseOut5(e) {
//  if (e != null) e.preventDefault();
//  if (BMSite.currentSite != 4) {
//    var item01 = document.getElementById("item05_1");
//    var item02 = document.getElementById("item05_2");
//    var number = document.getElementById("nr04");
//    TweenLite.to(number, 0.2, {
//      css: {
//        color: "#787583"
//      },
//      ease: Sine.easeOut,
//      overwrite: "all"
//    });
//    TweenLite.to(item01, 0.2, {
//      css: {
//        top: 19
//      },
//      ease: Sine.easeOut,
//      overwrite: "all"
//    });
//    TweenLite.to(item02, 0.2, {
//      css: {
//        top: 50
//      },
//      ease: Sine.easeOut,
//      overwrite: "all"
//    })
//  }
//}
//
//function mouseOver6(e) {
//  if (e != null) e.preventDefault();
//  var item01 = document.getElementById("item06_1");
//  var item02 = document.getElementById("item06_2");
//  var number = document.getElementById("nr05");
//  TweenLite.to(number, 0.2, {
//    css: {
//      color: "#eabd44"
//    },
//    ease: Sine.easeOut,
//    overwrite: "all"
//  });
//  TweenLite.to(item01, 0.2, {
//    css: {
//      top: -20
//    },
//    ease: Sine.easeOut,
//    overwrite: "all"
//  });
//  TweenLite.to(item02, 0.2, {
//    css: {
//      top: 19
//    },
//    ease: Sine.easeOut,
//    overwrite: "all"
//  });
//  if (BMSite.currentSite == 5) return;
//  if (e == null) return;
//  if (BMSite.clack != null) createjs.Sound.play("clack",
//    "none", 0, 0, 0, 0.5)
//}
//
//function mouseOut6(e) {
//  if (e != null) e.preventDefault();
//  if (BMSite.currentSite != 5) {
//    var item01 = document.getElementById("item06_1");
//    var item02 = document.getElementById("item06_2");
//    var number = document.getElementById("nr05");
//    TweenLite.to(number, 0.2, {
//      css: {
//        color: "#787583"
//      },
//      ease: Sine.easeOut,
//      overwrite: "all"
//    });
//    TweenLite.to(item01, 0.2, {
//      css: {
//        top: 19
//      },
//      ease: Sine.easeOut,
//      overwrite: "all"
//    });
//    TweenLite.to(item02, 0.2, {
//      css: {
//        top: 50
//      },
//      ease: Sine.easeOut,
//      overwrite: "all"
//    })
//  }
//};