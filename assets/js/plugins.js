/*
------------- Table of content ----------------
1.Avoid console js
#scrollup v2.4.1

*/

/*====================================
  1.Avoid console 
=====================================*/
// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

/*====================================
  #scrollup v2.4.1
=====================================*/

/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear â€” @markgdyr â€” http://markgoodyear.com
 * License: MIT
 */
!function(a,d,p){"use strict";a.fn.scrollUp=function(l){a.data(p.body,"scrollUp")||(a.data(p.body,"scrollUp",!0),a.fn.scrollUp.init(l))},a.fn.scrollUp.init=function(l){var o,e,r,s,t,c=a.fn.scrollUp.settings=a.extend({},a.fn.scrollUp.defaults,l),i=!1,n=c.scrollTrigger?a(c.scrollTrigger):a("<a/>",{id:c.scrollName,href:"#top"});switch(c.scrollTitle&&n.attr("title",c.scrollTitle),n.appendTo("body"),c.scrollImg||c.scrollTrigger||n.html(c.scrollText),n.css({display:"none",position:"fixed",zIndex:c.zIndex}),c.activeOverlay&&a("<div/>",{id:c.scrollName+"-active"}).css({position:"absolute",top:c.scrollDistance+"px",width:"100%",borderTop:"1px dotted"+c.activeOverlay,zIndex:c.zIndex}).appendTo("body"),c.animation){case"fade":o="fadeIn",e="fadeOut",r=c.animationSpeed;break;case"slide":o="slideDown",e="slideUp",r=c.animationSpeed;break;default:o="show",e="hide",r=0}s="top"===c.scrollFrom?c.scrollDistance:a(p).height()-a(d).height()-c.scrollDistance,a(d).scroll(function(){a(d).scrollTop()>s?i||(n[o](r),i=!0):i&&(n[e](r),i=!1)}),c.scrollTarget?"number"==typeof c.scrollTarget?t=c.scrollTarget:"string"==typeof c.scrollTarget&&(t=Math.floor(a(c.scrollTarget).offset().top)):t=0,n.click(function(l){l.preventDefault(),a("html, body").animate({scrollTop:t},c.scrollSpeed,c.easingType)})},a.fn.scrollUp.defaults={scrollName:"scrollUp",scrollDistance:300,scrollFrom:"top",scrollSpeed:300,easingType:"linear",animation:"fade",animationSpeed:200,scrollTrigger:!1,scrollTarget:!1,scrollText:"Scroll to top",scrollTitle:!1,scrollImg:!1,activeOverlay:!1,zIndex:2147483647},a.fn.scrollUp.destroy=function(l){a.removeData(p.body,"scrollUp"),a("#"+a.fn.scrollUp.settings.scrollName).remove(),a("#"+a.fn.scrollUp.settings.scrollName+"-active").remove(),7<=a.fn.jquery.split(".")[1]?a(d).off("scroll",l):a(d).unbind("scroll",l)},a.scrollUp=a.fn.scrollUp}(jQuery,window,document);

