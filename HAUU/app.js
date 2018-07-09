"use strict";

$(document).ready(function () {

  function pathPrepare($el) {
    var lineLenght = $el[0].getTotalLength();
    $el.css("stroke-dasharray", lineLenght);
    $el.css("stroke-dashoffset", lineLenght);
  }



  var $path0 = $("path.path0");
  var $path1 = $("path.path1");
  var $path2 = $("path.path2");
  var $path2_2 = $("path.path2_2");
  var $path2_3 = $("path.path2_3");
  var $path2_4 = $("path.path2_4");
  var $path2_5 = $("path.path2_5");
  var $path2_6 = $("path.path2_6");
  var $path2_7 = $("path.path2_7");
  var $path2_8 = $("path.path2_8");
  var $path2_9 = $("path.path2_9");
  var $path2_10 = $("path.path2_10");
  var $path2_11 = $("path.path2_11");
  var $path2_12 = $("path.path2_12");

  var $path3 = $("path.path3");
  var $path3_2 = $("path.path3_2");
  var $path3_3 = $("path.path3_3");
  var $path3_4 = $("path.path3_4");
  var $path3_5 = $("path.path3_5");
  var $path3_6 = $("path.path3_6");
  var $path3_7 = $("path.path3_7");
  var $path3_8 = $("path.path3_8");
  var $path3_9 = $("path.path3_9");
  var $path3_10 = $("path.path3_10");
  var $path3_11 = $("path.path3_11");

  var $path33 = $("path.path33");
  var $path33_2 = $("path.path33_2");
  var $path33_3 = $("path.path33_3");
  var $path33_4 = $("path.path33_4");
  var $path33_5 = $("path.path33_5");
  var $path33_6 = $("path.path33_6");
  var $path33_7 = $("path.path33_7");
  var $path33_8 = $("path.path33_8");
  var $path33_9 = $("path.path33_9");
  var $path33_10 = $("path.path33_10");
  var $path33_11 = $("path.path33_11");

  var $midline1 = $("path.midline1");
  var $midline1_2 = $("path.midline1_2");
  var $midline1_3 = $("path.midline1_3");
  var $midline1_4 = $("path.midline1_4");
  var $midline1_5 = $("path.midline1_5");
  var $midline1_6 = $("path.midline1_6");
  var $midline1_7 = $("path.midline1_7");
  var $midline1_8 = $("path.midline1_8");
  var $midline1_9 = $("path.midline1_9");
  var $midline1_10 = $("path.midline1_10");
  var $midline1_11 = $("path.midline1_11");

  var $midline2 = $("path.midline2");
  var $midline2_2 = $("path.midline2_2");
  var $midline2_3 = $("path.midline2_3");
  var $midline2_4 = $("path.midline2_4");
  var $midline2_5 = $("path.midline2_5");
  var $midline2_6 = $("path.midline2_6");
  var $midline2_7 = $("path.midline2_7");
  var $midline2_8 = $("path.midline2_8");
  var $midline2_9 = $("path.midline2_9");
  var $midline2_10 = $("path.midline2_10");
  var $midline2_11 = $("path.midline2_11");
  //  
  var $midletter1 = $("path.midletter1");
  var $midletter1_2 = $("path.midletter1_2");
  var $midletter1_3 = $("path.midletter1_3");
  var $midletter1_4 = $("path.midletter1_4");
  var $midletter1_5 = $("path.midletter1_5");
  var $midletter1_6 = $("path.midletter1_6");
  var $midletter1_7 = $("path.midletter1_7");
  var $midletter1_8 = $("path.midletter1_8");
  var $midletter1_9 = $("path.midletter1_9");
  var $midletter1_10 = $("path.midletter1_10");
  var $midletter1_11 = $("path.midletter1_11");

  var $midletter2 = $("path.midletter2");
  var $midletter2_2 = $("path.midletter2_2");
  var $midletter2_3 = $("path.midletter2_3");
  var $midletter2_4 = $("path.midletter2_4");
  var $midletter2_5 = $("path.midletter2_5");
  var $midletter2_6 = $("path.midletter2_6");
  var $midletter2_7 = $("path.midletter2_7");
  var $midletter2_8 = $("path.midletter2_8");
  var $midletter2_9 = $("path.midletter2_9");
  var $midletter2_10 = $("path.midletter2_10");
  var $midletter2_11 = $("path.midletter2_11");

  var $midletter3 = $("path.midletter3");
  var $midletter3_2 = $("path.midletter3_2");
  var $midletter3_3 = $("path.midletter3_3");
  var $midletter3_4 = $("path.midletter3_4");
  var $midletter3_5 = $("path.midletter3_5");
  var $midletter3_6 = $("path.midletter3_6");
  var $midletter3_7 = $("path.midletter3_7");
  var $midletter3_8 = $("path.midletter3_8");
  var $midletter3_9 = $("path.midletter3_9");
  var $midletter3_10 = $("path.midletter3_10");
  var $midletter3_11 = $("path.midletter3_11");

  var $midletter4 = $("path.midletter4");
  var $midletter4_2 = $("path.midletter4_2");
  var $midletter4_3 = $("path.midletter4_3");
  var $midletter4_4 = $("path.midletter4_4");
  var $midletter4_5 = $("path.midletter4_5");
  var $midletter4_6 = $("path.midletter4_6");
  var $midletter4_7 = $("path.midletter4_7");
  var $midletter4_8 = $("path.midletter4_8");
  var $midletter4_9 = $("path.midletter4_9");
  var $midletter4_10 = $("path.midletter4_10");
  var $midletter4_11 = $("path.midletter4_11");



  pathPrepare($path0);
  pathPrepare($path1);
  pathPrepare($path2);
  pathPrepare($path2_2);
  pathPrepare($path2_3);
  pathPrepare($path2_4);
  pathPrepare($path2_5);
  pathPrepare($path2_6);
  pathPrepare($path2_7);
  pathPrepare($path2_8);
  pathPrepare($path2_9);
  pathPrepare($path2_10);
  pathPrepare($path2_11);
  pathPrepare($path2_12);

  pathPrepare($path3);
  pathPrepare($path3_2);
  pathPrepare($path3_3);
  pathPrepare($path3_4);
  pathPrepare($path3_5);
  pathPrepare($path3_6);
  pathPrepare($path3_7);
  pathPrepare($path3_8);
  pathPrepare($path3_9);
  pathPrepare($path3_10);
  pathPrepare($path3_11);

  pathPrepare($path33);
  pathPrepare($path33_2);
  pathPrepare($path33_3);
  pathPrepare($path33_4);
  pathPrepare($path33_5);
  pathPrepare($path33_6);
  pathPrepare($path33_7);
  pathPrepare($path33_8);
  pathPrepare($path33_9);
  pathPrepare($path33_10);
  pathPrepare($path33_11);

  pathPrepare($midline1);
  pathPrepare($midline1_2);
  pathPrepare($midline1_3);
  pathPrepare($midline1_4);
  pathPrepare($midline1_5);
  pathPrepare($midline1_6);
  pathPrepare($midline1_7);
  pathPrepare($midline1_8);
  pathPrepare($midline1_9);
  pathPrepare($midline1_10);
  pathPrepare($midline1_11);

  pathPrepare($midline2);
  pathPrepare($midline2_2);
  pathPrepare($midline2_3);
  pathPrepare($midline2_4);
  pathPrepare($midline2_5);
  pathPrepare($midline2_6);
  pathPrepare($midline2_7);
  pathPrepare($midline2_8);
  pathPrepare($midline2_9);
  pathPrepare($midline2_10);
  pathPrepare($midline2_11);

  pathPrepare($midletter1);
  pathPrepare($midletter1_2);
  pathPrepare($midletter1_3);
  pathPrepare($midletter1_4);
  pathPrepare($midletter1_5);
  pathPrepare($midletter1_6);
  pathPrepare($midletter1_7);
  pathPrepare($midletter1_8);
  pathPrepare($midletter1_9);
  pathPrepare($midletter1_10);
  pathPrepare($midletter1_11);

  pathPrepare($midletter2);
  pathPrepare($midletter2_2);
  pathPrepare($midletter2_3);
  pathPrepare($midletter2_4);
  pathPrepare($midletter2_5);
  pathPrepare($midletter2_6);
  pathPrepare($midletter2_7);
  pathPrepare($midletter2_8);
  pathPrepare($midletter2_9);
  pathPrepare($midletter2_10);
  pathPrepare($midletter2_11);

  pathPrepare($midletter3);
  pathPrepare($midletter3_2);
  pathPrepare($midletter3_3);
  pathPrepare($midletter3_4);
  pathPrepare($midletter3_5);
  pathPrepare($midletter3_6);
  pathPrepare($midletter3_7);
  pathPrepare($midletter3_8);
  pathPrepare($midletter3_9);
  pathPrepare($midletter3_10);
  pathPrepare($midletter3_11);

  pathPrepare($midletter4);
  pathPrepare($midletter4_2);
  pathPrepare($midletter4_3);
  pathPrepare($midletter4_4);
  pathPrepare($midletter4_5);
  pathPrepare($midletter4_6);
  pathPrepare($midletter4_7);
  pathPrepare($midletter4_8);
  pathPrepare($midletter4_9);
  pathPrepare($midletter4_10);
  pathPrepare($midletter4_11);



  var controller = new ScrollMagic.Controller();

  //01
  
   var tween0 = new TimelineMax()
      .add(TweenMax.to($path0, 0.5, {
        strokeDashoffset: 0,
        ease: Linear.easeNone
      }))

    var tween1 = new TimelineMax()
      .add(TweenMax.to($path1, 0.5, {
        strokeDashoffset: 0,
        ease: Linear.easeNone
      }))

  var tween2 = new TimelineMax()
    .add(TweenMax.to($path2, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }, 1));

  var tween3 = new TimelineMax({delay:0.5})
    .add(TweenMax.to($path3, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }, 1));

  var tween4 = new TimelineMax({delay:1})
    .add(TweenMax.to($path33, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }, 1));

  var tween5 = new TimelineMax()
    .add(TweenMax.to($midline1, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween6 = new TimelineMax({delay:0.5})
    .add(TweenMax.to($midletter1, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween7 = new TimelineMax({delay:0.8})
    .add(TweenMax.to($midletter2, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween8 = new TimelineMax({delay:1.1})
    .add(TweenMax.to($midletter3, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween9 = new TimelineMax({delay:1.4})
    .add(TweenMax.to($midletter4, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween10 = new TimelineMax({delay:1.7})
    .add(TweenMax.to($midline2, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));


  //02 

  var tween11 = new TimelineMax()
    .add(TweenMax.to($path2_2, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween12 = new TimelineMax({delay:0.5})
    .add(TweenMax.to($path3_2, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween13 = new TimelineMax({delay:1})
    .add(TweenMax.to($path33_2, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween14 = new TimelineMax()
    .add(TweenMax.to($midline1_2, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween15 = new TimelineMax({delay:0.5})
    .add(TweenMax.to($midletter1_2, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween16 = new TimelineMax({delay:1})
    .add(TweenMax.to($midletter2_2, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween17 = new TimelineMax({delay:1.5})
    .add(TweenMax.to($midletter3_2, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween18 = new TimelineMax({delay:2})
    .add(TweenMax.to($midletter4_2, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween19 = new TimelineMax({delay:2.5})
    .add(TweenMax.to($midline2_2, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));


  //03

  var tween20 = new TimelineMax()
    .add(TweenMax.to($path2_3, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween21 = new TimelineMax({delay:0.5})
    .add(TweenMax.to($path3_3, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween22 = new TimelineMax({delay:1})
    .add(TweenMax.to($path33_3, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween23 = new TimelineMax()
    .add(TweenMax.to($midline1_3, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween24 = new TimelineMax({delay:0.5})
    .add(TweenMax.to($midletter1_3, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween25 = new TimelineMax({delay:0.8})
    .add(TweenMax.to($midletter2_3, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween26 = new TimelineMax({delay:1.1})
    .add(TweenMax.to($midletter3_3, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween27 = new TimelineMax({delay:1.4})
    .add(TweenMax.to($midletter4_3, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween28 = new TimelineMax({delay:1.7})
    .add(TweenMax.to($midline2_3, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));


  //04

  var tween29 = new TimelineMax()
    .add(TweenMax.to($path2_4, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween30 = new TimelineMax({delay:0.5})
    .add(TweenMax.to($path3_4, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween31 = new TimelineMax({delay:1})
    .add(TweenMax.to($path33_4, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween32 = new TimelineMax()
    .add(TweenMax.to($midline1_4, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween33 = new TimelineMax({delay:0.5})
    .add(TweenMax.to($midletter1_4, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween34 = new TimelineMax({delay:1})
    .add(TweenMax.to($midletter2_4, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween35 = new TimelineMax({delay:1.5})
    .add(TweenMax.to($midletter3_4, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween36 = new TimelineMax({delay:2})
    .add(TweenMax.to($midletter4_4, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween37 = new TimelineMax({delay:2.5})
    .add(TweenMax.to($midline2_4, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));


  //05

  var tween38 = new TimelineMax()
    .add(TweenMax.to($path2_5, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween39 = new TimelineMax({delay:0.5})
    .add(TweenMax.to($path3_5, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween40 = new TimelineMax({delay:1})
    .add(TweenMax.to($path33_5, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween41 = new TimelineMax()
    .add(TweenMax.to($midline1_5, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween42 = new TimelineMax({delay:0.5})
    .add(TweenMax.to($midletter1_5, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween43 = new TimelineMax({delay:0.8})
    .add(TweenMax.to($midletter2_5, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween44 = new TimelineMax({delay:1.1})
    .add(TweenMax.to($midletter3_5, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween45 = new TimelineMax({delay:1.4})
    .add(TweenMax.to($midletter4_5, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween46 = new TimelineMax({delay:1.7})
    .add(TweenMax.to($midline2_5, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));


  //06 

  var tween47 = new TimelineMax()
    .add(TweenMax.to($path2_6, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween48 = new TimelineMax({delay:0.5})
    .add(TweenMax.to($path3_6, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween49 = new TimelineMax({delay:1})
    .add(TweenMax.to($path33_6, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween50 = new TimelineMax()
    .add(TweenMax.to($midline1_6, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween51 = new TimelineMax({delay:0.5})
    .add(TweenMax.to($midletter1_6, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween52 = new TimelineMax({delay:0.8})
    .add(TweenMax.to($midletter2_6, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween53 = new TimelineMax({delay:1.1})
    .add(TweenMax.to($midletter3_6, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween54 = new TimelineMax({delay:1.4})
    .add(TweenMax.to($midletter4_6, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween55 = new TimelineMax({delay:1.7})
    .add(TweenMax.to($midline2_6, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));


  //07

  var tween56 = new TimelineMax()
    .add(TweenMax.to($path2_7, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween57 = new TimelineMax({delay:0.5})
    .add(TweenMax.to($path3_7, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween58 = new TimelineMax({delay:1})
    .add(TweenMax.to($path33_7, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween59 = new TimelineMax()
    .add(TweenMax.to($midline1_7, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween60 = new TimelineMax({delay:0.5})
    .add(TweenMax.to($midletter1_7, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween61 = new TimelineMax({delay:0.8})
    .add(TweenMax.to($midletter2_7, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween62 = new TimelineMax({delay:1.1})
    .add(TweenMax.to($midletter3_7, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween63 = new TimelineMax({delay:1.4})
    .add(TweenMax.to($midletter4_7, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween64 = new TimelineMax({delay:1.7})
    .add(TweenMax.to($midline2_7, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));


  //08 

  var tween65 = new TimelineMax()
    .add(TweenMax.to($path2_8, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween66 = new TimelineMax({delay:0.5})
    .add(TweenMax.to($path3_8, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween67 = new TimelineMax({delay:1})
    .add(TweenMax.to($path33_8, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween68 = new TimelineMax()
    .add(TweenMax.to($midline1_8, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween69 = new TimelineMax({delay:0.5})
    .add(TweenMax.to($midletter1_8, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween70 = new TimelineMax({delay:0.8})
    .add(TweenMax.to($midletter2_8, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween71 = new TimelineMax({delay:1.1})
    .add(TweenMax.to($midletter3_8, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween72 = new TimelineMax({delay:1.4})
    .add(TweenMax.to($midletter4_8, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween73 = new TimelineMax({delay:1.7})
    .add(TweenMax.to($midline2_8, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));


  //09 

  var tween74 = new TimelineMax()
    .add(TweenMax.to($path2_9, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween75 = new TimelineMax({delay:0.5})
    .add(TweenMax.to($path3_9, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween76 = new TimelineMax({delay:1})
    .add(TweenMax.to($path33_9, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween77 = new TimelineMax()
    .add(TweenMax.to($midline1_9, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween78 = new TimelineMax({delay:0.5})
    .add(TweenMax.to($midletter1_9, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween79 = new TimelineMax({delay:0.8})
    .add(TweenMax.to($midletter2_9, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween80 = new TimelineMax({delay:1.1})
    .add(TweenMax.to($midletter3_9, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween81 = new TimelineMax({delay:1.4})
    .add(TweenMax.to($midletter4_9, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween82 = new TimelineMax({delay:1.7})
    .add(TweenMax.to($midline2_9, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));


  //10 

  var tween83 = new TimelineMax()
    .add(TweenMax.to($path2_10, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween84 = new TimelineMax({delay:0.5})
    .add(TweenMax.to($path3_10, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween85 = new TimelineMax({delay:1})
    .add(TweenMax.to($path33_10, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween86 = new TimelineMax()
    .add(TweenMax.to($midline1_10, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween87 = new TimelineMax({delay:0.5})
    .add(TweenMax.to($midletter1_10, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween88 = new TimelineMax({delay:0.8})
    .add(TweenMax.to($midletter2_10, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween89 = new TimelineMax({delay:1.1})
    .add(TweenMax.to($midletter3_10, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween90 = new TimelineMax({delay:1.4})
    .add(TweenMax.to($midletter4_10, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween91 = new TimelineMax({delay:1.7})
    .add(TweenMax.to($midline2_10, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));


  //11

  var tween92 = new TimelineMax()
    .add(TweenMax.to($path2_11, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween93 = new TimelineMax({delay:0.5})
    .add(TweenMax.to($path3_11, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween94 = new TimelineMax({delay:1})
    .add(TweenMax.to($path33_11, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween95 = new TimelineMax()
    .add(TweenMax.to($midline1_11, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween96 = new TimelineMax({delay:0.5})
    .add(TweenMax.to($midletter1_11, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween97 = new TimelineMax({delay:0.8})
    .add(TweenMax.to($midletter2_11, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween98 = new TimelineMax({delay:1.1})
    .add(TweenMax.to($midletter3_11, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween99 = new TimelineMax({delay:1.4})
    .add(TweenMax.to($midletter4_11, 0.3, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var tween100 = new TimelineMax({delay:1.7})
    .add(TweenMax.to($midline2_11, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));


  //12

  var tween101 = new TimelineMax()
    .add(TweenMax.to($path2_12, 0.5, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));


  //h1

  var tween102 = new TimelineMax()
    .add(TweenMax.from('.h1-1', 0.5, {
      bottom: -100,
      ease: Linear.easeNone,
      opacity: 0
    }));

  var tween103 = new TimelineMax()
    .add(TweenMax.from('.h1-2', 0.5, {
      bottom: -100,
      ease: Linear.easeNone,
      opacity: 0
    }));

  var tween104 = new TimelineMax()
    .add(TweenMax.from('.h1-3', 0.5, {
      bottom: -100,
      ease: Linear.easeNone,
      opacity: 0
    }));

  var tween105 = new TimelineMax()
    .add(TweenMax.from('.h1-4', 0.5, {
      bottom: -100,
      ease: Linear.easeNone,
      opacity: 0
    }));

  var tween106 = new TimelineMax()
    .add(TweenMax.from('.h1-5', 0.5, {
      bottom: -100,
      ease: Linear.easeNone,
      opacity: 0
    }));

  var tween107 = new TimelineMax()
    .add(TweenMax.from('.h1-6', 0.5, {
      bottom: -100,
      ease: Linear.easeNone,
      opacity: 0
    }));

  var tween108 = new TimelineMax()
    .add(TweenMax.from('.h1-7', 0.5, {
      bottom: -100,
      ease: Linear.easeNone,
      opacity: 0
    }));

  var tween109 = new TimelineMax()
    .add(TweenMax.from('.h1-8', 0.5, {
      bottom: -100,
      ease: Linear.easeNone,
      opacity: 0
    }));

  var tween110 = new TimelineMax()
    .add(TweenMax.from('.h1-9', 0.5, {
      bottom: -100,
      ease: Linear.easeNone,
      opacity: 0
    }));

  var tween111 = new TimelineMax()
    .add(TweenMax.from('.h1-10', 0.5, {
      bottom: -100,
      ease: Linear.easeNone,
      opacity: 0
    }));

  var tween112 = new TimelineMax()
    .add(TweenMax.from('.h1-11', 0.5, {
      bottom: -100,
      ease: Linear.easeNone,
      opacity: 0
    }));

  var tween113 = new TimelineMax()
    .add(TweenMax.from('.h1-12', 0.5, {
      bottom: -100,
      ease: Linear.easeNone,
      opacity: 0
    }));






  //g

  var tween114 = new TimelineMax()
    .add(TweenMax.from('.g-1', 0.5, {
      bottom: -100,
      ease: Linear.easeNone,
      opacity: 0
    }));

  var tween115 = new TimelineMax()
    .add(TweenMax.from('.g-2', 0.5, {
      bottom: -100,
      ease: Linear.easeNone,
      opacity: 0
    }));

  var tween116 = new TimelineMax()
    .add(TweenMax.from('.g-3', 0.5, {
      bottom: -100,
      ease: Linear.easeNone,
      opacity: 0
    }));

  var tween117 = new TimelineMax()
    .add(TweenMax.from('.g-4', 0.5, {
      bottom: -100,
      ease: Linear.easeNone,
      opacity: 0
    }));

  var tween118 = new TimelineMax()
    .add(TweenMax.from('.g-5', 0.5, {
      bottom: -100,
      ease: Linear.easeNone,
      opacity: 0
    }));

  var tween119 = new TimelineMax()
    .add(TweenMax.from('.g-6', 0.5, {
      bottom: -100,
      ease: Linear.easeNone,
      opacity: 0
    }));

  var tween120 = new TimelineMax()
    .add(TweenMax.from('.g-7', 0.5, {
      bottom: -100,
      ease: Linear.easeNone,
      opacity: 0
    }));

  var tween121 = new TimelineMax()
    .add(TweenMax.from('.g-8', 0.5, {
      bottom: -100,
      ease: Linear.easeNone,
      opacity: 0
    }));

  var tween122 = new TimelineMax()
    .add(TweenMax.from('.g-9', 0.5, {
      bottom: -100,
      ease: Linear.easeNone,
      opacity: 0
    }));

  var tween123 = new TimelineMax()
    .add(TweenMax.from('.g-10', 0.5, {
      bottom: -100,
      ease: Linear.easeNone,
      opacity: 0
    }));

  var tween124 = new TimelineMax()
    .add(TweenMax.from('.g-11', 0.5, {
      bottom: -100,
      ease: Linear.easeNone,
      opacity: 0
    }));

  var tween125 = new TimelineMax()
    .add(TweenMax.from('.g-12', 0.5, {
      bottom: -100,
      ease: Linear.easeNone,
      opacity: 0
    }));




  //dots 

  var tween160 = new TimelineMax()
    .add(TweenMax.staggerFrom('.right-dots a', 0.5, {
      ease: Linear.easeNone,
      opacity: 0
    }, 0.3));
  var scene = new ScrollMagic.Scene({
      triggerElement: "#h-container",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween160)
    .addTo(controller);

  //p-text



  var tween128 = new TimelineMax()
    .add(TweenMax.staggerFrom('.p-text-1 p', 0.5, {
      ease: Linear.easeNone,
      opacity: 0
    }, 0.2));

  var tween129 = new TimelineMax()
    .add(TweenMax.staggerFrom('.p-text-2 p', 0.5, {
      ease: Linear.easeNone,
      opacity: 0
    }, 0.2));

  var tween130 = new TimelineMax()
    .add(TweenMax.staggerFrom('.p-text-3 p', 0.5, {
      ease: Linear.easeNone,
      opacity: 0
    }, 0.2));

  var tween131 = new TimelineMax()
    .add(TweenMax.staggerFrom('.p-text-4 p', 0.5, {
      ease: Linear.easeNone,
      opacity: 0
    }, 0.2));

  var tween132 = new TimelineMax()
    .add(TweenMax.staggerFrom('.p-text-5 p', 0.5, {
      ease: Linear.easeNone,
      opacity: 0
    }, 0.2));

  var tween133 = new TimelineMax()
    .add(TweenMax.staggerFrom('.p-text-6 p', 0.5, {
      ease: Linear.easeNone,
      opacity: 0
    }, 0.2));

  var tween134 = new TimelineMax()
    .add(TweenMax.staggerFrom('.p-text-7 p', 0.5, {
      ease: Linear.easeNone,
      opacity: 0
    }, 0.2));

  var tween135 = new TimelineMax()
    .add(TweenMax.staggerFrom('.p-text-8 p', 0.5, {
      ease: Linear.easeNone,
      opacity: 0
    }, 0.2));

  var tween136 = new TimelineMax()
    .add(TweenMax.staggerFrom('.p-text-9 p', 0.5, {
      ease: Linear.easeNone,
      opacity: 0
    }, 0.2));

  var tween137 = new TimelineMax()
    .add(TweenMax.staggerFrom('.p-text-10 p', 0.5, {
      ease: Linear.easeNone,
      opacity: 0
    }, 0.2));

  var tween138 = new TimelineMax()
    .add(TweenMax.staggerFrom('.p-text-11 p', 0.5, {
      ease: Linear.easeNone,
      opacity: 0
    }, 0.2));

  var tween139 = new TimelineMax()
    .add(TweenMax.staggerFrom('.p-text-12 p', 0.5, {
      ease: Linear.easeNone,
      opacity: 0
    }, 0.2));



  ////////////////////////
  //          h1        //
  ////////////////////////




  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger1",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween102)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger3",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween103)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger5",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween104)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger7",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween105)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger9",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween106)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger11",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween107)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger13",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween108)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger15",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween109)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger17",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween110)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger19",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween111)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger21",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween112)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger23",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween113)
    .addTo(controller);



  ////////////////////////
  //           g        //
  ////////////////////////




  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger1",
      offset: -$(window).height() / 2 + 650,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween114)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger3",
      offset: -$(window).height() / 2 + 650,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween115)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger5",
      offset: -$(window).height() / 2 + 650,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween116)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger7",
      offset: -$(window).height() / 2 + 650,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween117)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger9",
      offset: -$(window).height() / 2 + 650,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween118)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger11",
      offset: -$(window).height() / 2 + 650,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween119)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger13",
      offset: -$(window).height() / 2 + 650,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween120)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger15",
      offset: -$(window).height() / 2 + 650,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween121)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger17",
      offset: -$(window).height() / 2 + 650,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween122)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger19",
      offset: -$(window).height() / 2 + 650,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween123)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger21",
      offset: -$(window).height() / 2 + 650,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween124)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger23",
      offset: -$(window).height() / 2 + 650,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween125)
    .addTo(controller);



  ////////////////////////
  //        p-text      //
  ////////////////////////




  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger1",
      offset: -$(window).height() / 2 + 550,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween128)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger3",
      offset: -$(window).height() / 2 + 550,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween129)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger5",
      offset: -$(window).height() / 2 + 550,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween130)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger7",
      offset: -$(window).height() / 2 + 550,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween131)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger9",
      offset: -$(window).height() / 2 + 550,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween132)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger11",
      offset: -$(window).height() / 2 + 550,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween133)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger13",
      offset: -$(window).height() / 2 + 550,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween134)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger15",
      offset: -$(window).height() / 2 + 550,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween135)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger17",
      offset: -$(window).height() / 2 + 550,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween136)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger19",
      offset: -$(window).height() / 2 + 550,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween137)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger21",
      offset: -$(window).height() / 2 + 550,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween138)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger23",
      offset: -$(window).height() / 2 + 550,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween139)
    .addTo(controller);



  ////////////////////////
  //       triger1      //
  ////////////////////////

    var scene = new ScrollMagic.Scene({
        triggerElement: "#h-cont2",
        offset: -$(window).height()/2 + 800,
        duration: 1,
        tweenChanges: true
      })
      .setTween(tween0)
      .addTo(controller); 
  
    var scene = new ScrollMagic.Scene({
        triggerElement: "#triger1",
        offset: -$(window).height()/2 + 400,
        duration: 1,
        tweenChanges: true
      })
      .setTween(tween1)
      .addTo(controller); 

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger1",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween2)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger1",
      offset: -$(window).height() / 2 + 600,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween3)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger1",
      offset: -$(window).height() / 2 + 700,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween4)
    .addTo(controller);

  //01

  var tween200 = new TimelineMax()
    .add(TweenMax.from($('.n1_part1'), 0.5, {
      x: 200,
      y: 200,
      opacity: 0
    }));
  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger1",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween200)
    .addTo(controller);
  
  
  var tween201 = new TimelineMax()
    .add(TweenMax.from($('.n1_part2'), 0.5, {
      x: -200,
      y: -200,
      opacity: 0
    }));
  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger1",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween201)
    .addTo(controller);


  ////////////////////////
  //       triger2      //
  ////////////////////////

  
  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger2",
      offset: -$(window).height() / 2 + 300,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween5)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger2",
      offset: -$(window).height() / 2 + 400,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween6)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger2",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween7)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger2",
      offset: -$(window).height() / 2 + 600,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween8)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger2",
      offset: -$(window).height() / 2 + 700,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween9)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger2",
      offset: -$(window).height() / 2 + 800,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween10)
    .addTo(controller);

  ////////////////////////
  //       triger3      //
  ////////////////////////


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger3",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween11)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger3",
      offset: -$(window).height() / 2 + 600,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween12)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger3",
      offset: -$(window).height() / 2 + 700,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween13)
    .addTo(controller);

  //2

  var tween202 = new TimelineMax()
    .add(TweenMax.from($('.n2_part1'), 0.5, {
      x: 200,
      y: 200,
      opacity: 0
    }));
  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger3",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween202)
    .addTo(controller);
  
  
  var tween203 = new TimelineMax()
    .add(TweenMax.from($('.n2_part2'), 0.5, {
      x: -200,
      y: -200,
      opacity: 0
    }));
  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger3",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween203)
    .addTo(controller);


  ////////////////////////
  //       triger4      //
  ////////////////////////

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger4",
      offset: -$(window).height() / 2 + 300,
      duration: 50,
      tweenChanges: true
    })
    .setTween(tween14)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger4",
      offset: -$(window).height() / 2 + 400,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween15)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger4",
      offset: -$(window).height() / 2 + 500,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween16)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger4",
      offset: -$(window).height() / 2 + 600,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween17)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger4",
      offset: -$(window).height() / 2 + 700,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween18)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger4",
      offset: -$(window).height() / 2 + 800,
      duration: 50,
      tweenChanges: true
    })
    .setTween(tween19)
    .addTo(controller);



  ////////////////////////
  //       triger5      //
  ////////////////////////



  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger5",
      offset: -$(window).height() / 2 + 500,
      duration: 300,
      tweenChanges: true
    })
    .setTween(tween20)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger5",
      offset: -$(window).height() / 2 + 600,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween21)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger5",
      offset: -$(window).height() / 2 + 700,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween22)
    .addTo(controller);

  // 3

  var tween204 = new TimelineMax()
    .add(TweenMax.from($('.n3_part1'), 0.5, {
      x: 200,
      y: 200,
      opacity: 0
    }));
  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger5",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween204)
    .addTo(controller);
  
  
  var tween205 = new TimelineMax()
    .add(TweenMax.from($('.n3_part2'), 0.5, {
      x: -200,
      y: -200,
      opacity: 0
    }));
  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger5",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween205)
    .addTo(controller);

  ////////////////////////
  //       triger6      //
  ////////////////////////

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger6",
      offset: -$(window).height() / 2 + 300,
      duration: 50,
      tweenChanges: true
    })
    .setTween(tween23)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger6",
      offset: -$(window).height() / 2 + 400,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween24)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger6",
      offset: -$(window).height() / 2 + 500,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween25)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger6",
      offset: -$(window).height() / 2 + 600,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween26)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger6",
      offset: -$(window).height() / 2 + 700,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween27)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger6",
      offset: -$(window).height() / 2 + 800,
      duration: 50,
      tweenChanges: true
    })
    .setTween(tween28)
    .addTo(controller);


  ////////////////////////
  //       triger7      //
  ////////////////////////



  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger7",
      offset: -$(window).height() / 2 + 500,
      duration: 300,
      tweenChanges: true
    })
    .setTween(tween29)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger7",
      offset: -$(window).height() / 2 + 600,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween30)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger7",
      offset: -$(window).height() / 2 + 700,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween31)
    .addTo(controller);

  // 4

  var tween206 = new TimelineMax()
    .add(TweenMax.from($('.n4_part1'), 0.5, {
      x: 200,
      y: 200,
      opacity: 0
    }));
  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger7",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween206)
    .addTo(controller);
  
  
  var tween207 = new TimelineMax()
    .add(TweenMax.from($('.n4_part2'), 0.5, {
      x: -200,
      y: -200,
      opacity: 0
    }));
  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger7",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween207)
    .addTo(controller);

  ////////////////////////
  //       triger8      //
  ////////////////////////

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger8",
      offset: -$(window).height() / 2 + 300,
      duration: 50,
      tweenChanges: true
    })
    .setTween(tween32)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger8",
      offset: -$(window).height() / 2 + 400,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween33)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger8",
      offset: -$(window).height() / 2 + 500,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween34)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger8",
      offset: -$(window).height() / 2 + 600,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween35)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger8",
      offset: -$(window).height() / 2 + 700,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween36)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger8",
      offset: -$(window).height() / 2 + 800,
      duration: 50,
      tweenChanges: true
    })
    .setTween(tween37)
    .addTo(controller);



  ////////////////////////
  //       triger9      //
  ////////////////////////



  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger9",
      offset: -$(window).height() / 2 + 500,
      duration: 300,
      tweenChanges: true
    })
    .setTween(tween38)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger9",
      offset: -$(window).height() / 2 + 600,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween39)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger9",
      offset: -$(window).height() / 2 + 700,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween40)
    .addTo(controller);

  // 5

  var tween208 = new TimelineMax()
    .add(TweenMax.from($('.n5_part1'), 0.5, {
      x: 200,
      y: 200,
      opacity: 0
    }));
  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger9",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween208)
    .addTo(controller);
  
  
  var tween209 = new TimelineMax()
    .add(TweenMax.from($('.n5_part2'), 0.5, {
      x: -200,
      y: -200,
      opacity: 0
    }));
  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger9",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween209)
    .addTo(controller);

  ////////////////////////
  //      triger10      //
  ////////////////////////

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger10",
      offset: -$(window).height() / 2 + 300,
      duration: 50,
      tweenChanges: true
    })
    .setTween(tween41)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger10",
      offset: -$(window).height() / 2 + 400,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween42)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger10",
      offset: -$(window).height() / 2 + 500,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween43)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger10",
      offset: -$(window).height() / 2 + 600,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween44)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger10",
      offset: -$(window).height() / 2 + 700,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween45)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger10",
      offset: -$(window).height() / 2 + 800,
      duration: 50,
      tweenChanges: true
    })
    .setTween(tween46)
    .addTo(controller);


  ////////////////////////
  //      triger11      //
  ////////////////////////



  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger11",
      offset: -$(window).height() / 2 + 500,
      duration: 300,
      tweenChanges: true
    })
    .setTween(tween47)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger11",
      offset: -$(window).height() / 2 + 600,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween48)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger11",
      offset: -$(window).height() / 2 + 700,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween49)
    .addTo(controller);

  // 6

  var tween210 = new TimelineMax()
    .add(TweenMax.from($('.n6_part1'), 0.5, {
      x: 200,
      y: 200,
      opacity: 0
    }));
  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger11",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween210)
    .addTo(controller);
  
  
  var tween211 = new TimelineMax()
    .add(TweenMax.from($('.n6_part2'), 0.5, {
      x: -200,
      y: -200,
      opacity: 0
    }));
  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger11",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween211)
    .addTo(controller);
  
  ////////////////////////
  //      triger12      //
  ////////////////////////

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger12",
      offset: -$(window).height() / 2 + 300,
      duration: 50,
      tweenChanges: true
    })
    .setTween(tween50)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger12",
      offset: -$(window).height() / 2 + 400,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween51)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger12",
      offset: -$(window).height() / 2 + 500,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween52)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger12",
      offset: -$(window).height() / 2 + 600,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween53)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger12",
      offset: -$(window).height() / 2 + 700,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween54)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger12",
      offset: -$(window).height() / 2 + 800,
      duration: 50,
      tweenChanges: true
    })
    .setTween(tween55)
    .addTo(controller);


  ////////////////////////
  //      triger13      //
  ////////////////////////



  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger13",
      offset: -$(window).height() / 2 + 500,
      duration: 300,
      tweenChanges: true
    })
    .setTween(tween56)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger13",
      offset: -$(window).height() / 2 + 600,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween57)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger13",
      offset: -$(window).height() / 2 + 700,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween58)
    .addTo(controller);

  // 7

   var tween212 = new TimelineMax()
    .add(TweenMax.from($('.n7_part1'), 0.5, {
      x: 200,
      y: 200,
      opacity: 0
    }));
  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger13",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween212)
    .addTo(controller);
  
  
  var tween213 = new TimelineMax()
    .add(TweenMax.from($('.n7_part2'), 0.5, {
      x: -200,
      y: -200,
      opacity: 0
    }));
  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger13",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween213)
    .addTo(controller);
  
  ////////////////////////
  //      triger14      //
  ////////////////////////

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger14",
      offset: -$(window).height() / 2 + 300,
      duration: 50,
      tweenChanges: true
    })
    .setTween(tween59)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger14",
      offset: -$(window).height() / 2 + 400,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween60)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger14",
      offset: -$(window).height() / 2 + 500,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween61)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger14",
      offset: -$(window).height() / 2 + 600,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween62)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger14",
      offset: -$(window).height() / 2 + 700,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween63)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger14",
      offset: -$(window).height() / 2 + 800,
      duration: 50,
      tweenChanges: true
    })
    .setTween(tween64)
    .addTo(controller);


  ////////////////////////
  //      triger15      //
  ////////////////////////


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger15",
      offset: -$(window).height() / 2 + 500,
      duration: 300,
      tweenChanges: true
    })
    .setTween(tween65)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger15",
      offset: -$(window).height() / 2 + 600,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween66)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger15",
      offset: -$(window).height() / 2 + 700,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween67)
    .addTo(controller);

  // 8

   var tween214 = new TimelineMax()
    .add(TweenMax.from($('.n8_part1'), 0.5, {
      x: 200,
      y: 200,
      opacity: 0
    }));
  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger15",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween214)
    .addTo(controller);
  
  
  var tween215 = new TimelineMax()
    .add(TweenMax.from($('.n8_part2'), 0.5, {
      x: -200,
      y: -200,
      opacity: 0
    }));
  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger15",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween215)
    .addTo(controller);

  ////////////////////////
  //      triger16      //
  ////////////////////////

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger16",
      offset: -$(window).height() / 2 + 300,
      duration: 50,
      tweenChanges: true
    })
    .setTween(tween68)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger16",
      offset: -$(window).height() / 2 + 400,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween69)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger16",
      offset: -$(window).height() / 2 + 500,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween70)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger16",
      offset: -$(window).height() / 2 + 600,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween71)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger16",
      offset: -$(window).height() / 2 + 700,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween72)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger16",
      offset: -$(window).height() / 2 + 800,
      duration: 50,
      tweenChanges: true
    })
    .setTween(tween73)
    .addTo(controller);

  ////////////////////////
  //      triger17      //
  ////////////////////////


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger17",
      offset: -$(window).height() / 2 + 500,
      duration: 300,
      tweenChanges: true
    })
    .setTween(tween74)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger17",
      offset: -$(window).height() / 2 + 600,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween75)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger17",
      offset: -$(window).height() / 2 + 700,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween76)
    .addTo(controller);

  // 9

   var tween216 = new TimelineMax()
    .add(TweenMax.from($('.n9_part1'), 0.5, {
      x: 200,
      y: 200,
      opacity: 0
    }));
  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger17",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween216)
    .addTo(controller);
  
  
  var tween217 = new TimelineMax()
    .add(TweenMax.from($('.n9_part2'), 0.5, {
      x: -200,
      y: -200,
      opacity: 0
    }));
  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger17",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween217)
    .addTo(controller);
  
  ////////////////////////
  //      triger18      //
  ////////////////////////

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger18",
      offset: -$(window).height() / 2 + 300,
      duration: 50,
      tweenChanges: true
    })
    .setTween(tween77)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger18",
      offset: -$(window).height() / 2 + 400,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween78)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger18",
      offset: -$(window).height() / 2 + 500,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween79)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger18",
      offset: -$(window).height() / 2 + 600,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween80)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger18",
      offset: -$(window).height() / 2 + 700,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween81)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger18",
      offset: -$(window).height() / 2 + 800,
      duration: 50,
      tweenChanges: true
    })
    .setTween(tween82)
    .addTo(controller);


  ////////////////////////
  //      triger19      //
  ////////////////////////


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger19",
      offset: -$(window).height() / 2 + 500,
      duration: 300,
      tweenChanges: true
    })
    .setTween(tween83)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger19",
      offset: -$(window).height() / 2 + 600,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween84)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger19",
      offset: -$(window).height() / 2 + 700,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween85)
    .addTo(controller);

  // 10

  var tween218 = new TimelineMax()
    .add(TweenMax.from($('.n10_part1'), 0.5, {
      x: 200,
      y: 200,
      opacity: 0
    }));
  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger19",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween218)
    .addTo(controller);
  
  
  var tween219 = new TimelineMax()
    .add(TweenMax.from($('.n10_part2'), 0.5, {
      x: -200,
      y: -200,
      opacity: 0
    }));
  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger19",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween219)
    .addTo(controller);
  
  ////////////////////////
  //      triger20      //
  ////////////////////////

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger20",
      offset: -$(window).height() / 2 + 300,
      duration: 50,
      tweenChanges: true
    })
    .setTween(tween86)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger20",
      offset: -$(window).height() / 2 + 400,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween87)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger20",
      offset: -$(window).height() / 2 + 500,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween88)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger20",
      offset: -$(window).height() / 2 + 600,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween89)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger20",
      offset: -$(window).height() / 2 + 700,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween90)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger20",
      offset: -$(window).height() / 2 + 800,
      duration: 50,
      tweenChanges: true
    })
    .setTween(tween91)
    .addTo(controller);


  ////////////////////////
  //      triger21      //
  ////////////////////////


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger21",
      offset: -$(window).height() / 2 + 500,
      duration: 300,
      tweenChanges: true
    })
    .setTween(tween92)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger21",
      offset: -$(window).height() / 2 + 600,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween93)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger21",
      offset: -$(window).height() / 2 + 700,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween94)
    .addTo(controller);

  // 11
  
  var tween220 = new TimelineMax()
    .add(TweenMax.from($('.n11_part1'), 0.5, {
      x: 200,
      y: 200,
      opacity: 0
    }));
  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger21",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween220)
    .addTo(controller);
  
  
  var tween221 = new TimelineMax()
    .add(TweenMax.from($('.n11_part2'), 0.5, {
      x: -200,
      y: -200,
      opacity: 0
    }));
  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger21",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween221)
    .addTo(controller);

  ////////////////////////
  //      triger22      //
  ////////////////////////

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger22",
      offset: -$(window).height() / 2 + 300,
      duration: 50,
      tweenChanges: true
    })
    .setTween(tween95)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger22",
      offset: -$(window).height() / 2 + 400,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween96)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger22",
      offset: -$(window).height() / 2 + 500,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween97)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger22",
      offset: -$(window).height() / 2 + 600,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween98)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger22",
      offset: -$(window).height() / 2 + 700,
      duration: 100,
      tweenChanges: true
    })
    .setTween(tween99)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger22",
      offset: -$(window).height() / 2 + 800,
      duration: 50,
      tweenChanges: true
    })
    .setTween(tween100)
    .addTo(controller);


  ////////////////////////
  //      triger23      //
  ////////////////////////


  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger23",
      offset: -$(window).height() / 2 + 500,
      duration: 300,
      tweenChanges: true
    })
    .setTween(tween101)
    .addTo(controller);



  // 12

    var tween222 = new TimelineMax()
    .add(TweenMax.from($('.n12_part1'), 0.5, {
      x: 200,
      y: 200,
      opacity: 0
    }));
  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger23",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween222)
    .addTo(controller);
  
  
  var tween223 = new TimelineMax()
    .add(TweenMax.from($('.n12_part2'), 0.5, {
      x: -200,
      y: -200,
      opacity: 0
    }));
  var scene = new ScrollMagic.Scene({
      triggerElement: "#triger23",
      offset: -$(window).height() / 2 + 500,
      duration: 1,
      tweenChanges: true
    })
    .setTween(tween223)
    .addTo(controller);



  //side dots


  var speed = 0.5; // type in the speed in seconds

  // $("body").css({"overflow": "hidden"});
  $('.dot').first().addClass('active');

  $('.dot').on('click', function () {

    var href = $(this).attr('href');
    var $viewport = $('html, body');

    // $(this).addClass('active'); // set clicked element to active
    // $(this).parent().siblings().children().removeClass('active'); // remove active state from all other elements

    // animate the scroll
    $viewport.stop().animate({
      scrollTop: $(href).offset().top // Type in a negative value if you want to set some space for the header
    }, speed * 1000, "swing");

    // Stop the animation if the user scrolls
    $viewport.bind("scroll DOMMouseScroll mousewheel touchstart", function (e) {
      if (e.which > 0) {
        $viewport.stop();
      }
    });
    return false;

  });

  //side numbers


  var speed = 0.5; // type in the speed in seconds

  // $("body").css({"overflow": "hidden"});
//  $('.numa').first().addClass('num');

  $('.numa').on('click', function () {

    var href = $(this).attr('href');
    var $viewport = $('html, body');

    // $(this).addClass('active'); // set clicked element to active
    // $(this).parent().siblings().children().removeClass('active'); // remove active state from all other elements

    // animate the scroll
    $viewport.stop().animate({
      scrollTop: $(href).offset().top // Type in a negative value if you want to set some space for the header
    }, speed * 1000, "swing");

    // Stop the animation if the user scrolls
    $viewport.bind("scroll DOMMouseScroll mousewheel touchstart", function (e) {
      if (e.which > 0) {
        $viewport.stop();
      }
    });
    return false;

  });

  // Activate the current href attribute when it's reached
  $(window).on('scroll', function () {

    var pos = $(window).scrollTop(); // current scroll position

    $('.numa').each(function () {
      var currentLink = $(this);
      var refElement = $(currentLink.attr('href'));
      if (refElement.position().top <= pos && refElement.position().top + refElement.height() > pos) {
        $('numa').removeClass('num');
        currentLink.addClass('num');
      } else {
        currentLink.removeClass('num');
      }
    });

    $('.dot').each(function () {
      var currentLink = $(this);
      var refElement = $(currentLink.attr('href'));
      if (refElement.position().top <= pos && refElement.position().top + refElement.height() > pos) {
        $('dot').removeClass('active');
        currentLink.addClass('active');
      } else {
        currentLink.removeClass('active');
      }
    });

  });



  //button


  //  dimbo

  $('.bottom').click(function () {
    var href = $(this).attr("href");
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 3500);
    return false;
  });

  $(window).on('scroll', function () {
    var scrolltop = $(window).scrollTop();
    if (scrolltop < ($('#triger1').offset().top - 100)) {
      $('.dot').eq(0).addClass('active');
//      $('.numa').eq(0).addClass('num');
    }
  })

  $(document).on({
    mouseenter: function () {
      var i = $('.dot').index(this);
      $('.dot').removeClass('active')
      $('.numa').removeClass('num')
      $('.dot').eq(i).addClass('active')
      $('.numa').eq(i).addClass('num')
    },
    mouseleave: function () {
      $('.dot').removeClass('active')
      $('.numa').removeClass('num')

      var pos = $(window).scrollTop(); // current scroll position

      $('.numa').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr('href'));
        if (refElement.position().top <= pos && refElement.position().top + refElement.height() > pos) {
          $('numa').removeClass('num');
          currentLink.addClass('num');
        } else {
          currentLink.removeClass('num');
        }
      });
      $('.dot').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr('href'));
        if (refElement.position().top <= pos && refElement.position().top + refElement.height() > pos) {
          $('dot').removeClass('active');
          currentLink.addClass('active');
        } else {
          currentLink.removeClass('active');
        }
      });
      if (pos < ($('#triger1').offset().top + 100)) {
        $('.dot').eq(0).addClass('active');
        $('.numa').eq(0).addClass('num');
      }

    }
  }, '.dot')
  
  $(document).on({
    mouseenter: function () {
      var i = $('.numa').index(this);
      $('.dot').removeClass('active')
      $('.numa').removeClass('num')
      $('.dot').eq(i).addClass('active')
      $('.numa').eq(i).addClass('num')
    },
    mouseleave: function () {
      $('.dot').removeClass('active')
      $('.numa').removeClass('num')

      var pos = $(window).scrollTop(); // current scroll position

      $('.numa').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr('href'));
        if (refElement.position().top <= pos && refElement.position().top + refElement.height() > pos) {
          $('numa').removeClass('num');
          currentLink.addClass('num');
        } else {
          currentLink.removeClass('num');
        }
      });
      $('.dot').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr('href'));
        if (refElement.position().top <= pos && refElement.position().top + refElement.height() > pos) {
          $('dot').removeClass('active');
          currentLink.addClass('active');
        } else {
          currentLink.removeClass('active');
        }
      });
      if (pos < ($('#triger1').offset().top + 100)) {
        $('.dot').eq(0).addClass('active');
        $('.numa').eq(0).addClass('num');
      }

    }
  }, '.numa')

  
  
  
  if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

function handle(delta) {
    var time = 1000;
	var distance = 300;
    
    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (distance * delta)
    }, time );
}
  
  
  
})
