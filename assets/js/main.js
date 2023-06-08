(function ($) {
  "use strict";
  /*-------------------------------------------
  preloader active
  --------------------------------------------- */
  jQuery(window).on("load", function () {
    jQuery(".preloader").fadeOut("slow");
  });

  /*-------------------------------------------
  Sticky Header
  --------------------------------------------- */
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 80) {
      $("#sticky").addClass("stick");
    } else {
      $("#sticky").removeClass("stick");
    }
  });

  jQuery(document).ready(function () {
    /*-------------------------------------------
    js scrollup
    --------------------------------------------- */
    $.scrollUp({
      scrollText: '<i class="fa fa-angle-up"></i>',
      easingType: "linear",
      scrollSpeed: 900,
      animation: "fade",
    });
    //google map activation
    //-----------------------------------
    if ($("#gmap").length > 0) {
      new GMaps({
        div: "#gmap",
        lat: 22.82, //22.820000, 89.550003
        lng: 89.550003,
        scrollwheel: false,
        styles: [
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [
              {
                color: "#dddddd",
              },
              {
                lightness: 20,
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#ffffff",
              },
              {
                lightness: 17,
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#ffffff",
              },
              {
                lightness: 29,
              },
              {
                weight: 0.2,
              },
            ],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
              {
                color: "#ffffff",
              },
              {
                lightness: 18,
              },
            ],
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [
              {
                color: "#dddddd",
              },
              {
                lightness: 16,
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
              {
                color: "#ffffff",
              },
              {
                lightness: 21,
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
              {
                color: "#ffffff",
              },
              {
                lightness: 21,
              },
            ],
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              {
                visibility: "on",
              },
              {
                color: "#ffffff",
              },
              {
                lightness: 16,
              },
            ],
          },
          {
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "on",
              },
            ],
          },
        ],
      }).addMarker({
        lat: 22.82, //22.820000, 89.550003
        lng: 89.550003,
        infoWindow: {
          content: "<p>Khunla,Nirala</p>",
        },
      });
    }
  });
})(jQuery);
