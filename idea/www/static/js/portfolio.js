$(document).ready(function () {
  var tl = new TimelineMax;
  tl.to($('.loader'), .75, {
    ease: Power3.easeOut,
    top: '-100vh'
  }, .75)
});
