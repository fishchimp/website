// NAVBAR
{
  const nav = document.querySelector(".menu");

  // document last scroll on screen
  let lastScrollY = window.scrollY;

  // hides/show navbar based on last scroll direction and position of window
  window.addEventListener("scroll", () => {
    // show navbar if at top of window
    if (window.pageYOffset <= 5) {
      nav.classList.remove("nav--hidden");
      // hide when scroll down
    } else if (lastScrollY <= window.scrollY) {
      nav.classList.add("nav--hidden");
    } else if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight
    ) {
      nav.classList.add("nav--hidden");
    } else {
      // show navbar if scroll up
      nav.classList.remove("nav--hidden");
    }
    // document new value for 'lastScrollY'
    lastScrollY = window.scrollY;
  });
  // get position of user's view on webpage window
  function Getposition() {
    var vscroll = document.body.scrollTop;
    alert(vscroll);
  }
}

// SLIDESHOW
// naming variables for the three different slideshows
var slideshow1 = document.getElementById("slides1");
slideshow1.currentSlideIndex = 1;
showSlides(slideshow1.currentSlideIndex, slideshow1);

var slideshow2 = document.getElementById("slides2");
slideshow2.currentSlideIndex = 1;
showSlides(slideshow2.currentSlideIndex, slideshow2);

var slideshow3 = document.getElementById("slides3");
slideshow3.currentSlideIndex = 1;
showSlides(slideshow3.currentSlideIndex, slideshow3);

// funtion to allow prev/next button to change slide
function plusSlides(n, slideshow) {
  showSlides((slideshow.currentSlideIndex += n), slideshow);
}

// change the image by button click
function currentSlide(n, slideshow) {
  showSlides((slideshow.currentSlideIndex = n), slideshow);
}

// show/hide based on if prev/next or dot button is clicked
function showSlides(n, slideshow) {
  var i;
  var slides = slideshow.getElementsByClassName("mySlides");
  var dots = slideshow.getElementsByClassName("dot");

  // loop back to first slide
  if (n > slides.length) {
    slideshow.currentSlideIndex = 1;
  }
  if (n < 1) {
    slideshow.currentSlideIndex = slides.length;
  }

  // hide if move to next slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className.replace(" active", "");
  }
  slides[slideshow.currentSlideIndex - 1].style.display = "block";
  dots[slideshow.currentSlideIndex - 1].classList.add(" active");
}

// BOOK GENERATOR BUTTON
function randomiser() {
  // hide all images every time function is called (every time button is pressed)
  $(".shown").removeClass("shown");
  // name the variables
  const img1 = document.getElementById("book1");
  const img2 = document.getElementById("book2");
  const img3 = document.getElementById("book3");
  const img4 = document.getElementById("book4");
  const img5 = document.getElementById("book5");
  const img6 = document.getElementById("book6");
  const img7 = document.getElementById("book7");
  var items = Array(img1, img2, img3, img4, img5, img6, img7);
  // select random image
  var item = items[Math.floor(Math.random() * items.length)];
  // show the randomly selected image
  item.classList.add("shown");
}

// IMAGE MAP RESIZER
// code from internet to allow resizing the image map as the image also gets shrinked down
/*! Image Map Resizer (imageMapResizer.min.js ) - v1.0.10 - 2019-04-10
 *  Desc: Resize HTML imageMap to scaled image.
 *  Copyright: (c) 2019 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */

!(function () {
  "use strict";
  function r() {
    function e() {
      var r = {
          width: u.width / u.naturalWidth,
          height: u.height / u.naturalHeight,
        },
        a = {
          width: parseInt(
            window.getComputedStyle(u, null).getPropertyValue("padding-left"),
            10
          ),
          height: parseInt(
            window.getComputedStyle(u, null).getPropertyValue("padding-top"),
            10
          ),
        };
      i.forEach(function (e, t) {
        var n = 0;
        o[t].coords = e
          .split(",")
          .map(function (e) {
            var t = 1 == (n = 1 - n) ? "width" : "height";
            return a[t] + Math.floor(Number(e) * r[t]);
          })
          .join(",");
      });
    }
    function t(e) {
      return e.coords.replace(/ *, */g, ",").replace(/ +/g, ",");
    }
    function n() {
      clearTimeout(d), (d = setTimeout(e, 250));
    }
    function r(e) {
      return document.querySelector('img[usemap="' + e + '"]');
    }
    var a = this,
      o = null,
      i = null,
      u = null,
      d = null;
    "function" != typeof a._resize
      ? ((o = a.getElementsByTagName("area")),
        (i = Array.prototype.map.call(o, t)),
        (u = r("#" + a.name) || r(a.name)),
        (a._resize = e),
        u.addEventListener("load", e, !1),
        window.addEventListener("focus", e, !1),
        window.addEventListener("resize", n, !1),
        window.addEventListener("readystatechange", e, !1),
        document.addEventListener("fullscreenchange", e, !1),
        (u.width === u.naturalWidth && u.height === u.naturalHeight) || e())
      : a._resize();
  }
  function e() {
    function t(e) {
      e &&
        (!(function (e) {
          if (!e.tagName)
            throw new TypeError("Object is not a valid DOM element");
          if ("MAP" !== e.tagName.toUpperCase())
            throw new TypeError(
              "Expected <MAP> tag, found <" + e.tagName + ">."
            );
        })(e),
        r.call(e),
        n.push(e));
    }
    var n;
    return function (e) {
      switch (((n = []), typeof e)) {
        case "undefined":
        case "string":
          Array.prototype.forEach.call(
            document.querySelectorAll(e || "map"),
            t
          );
          break;
        case "object":
          t(e);
          break;
        default:
          throw new TypeError("Unexpected data type (" + typeof e + ").");
      }
      return n;
    };
  }
  "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e())
    : (window.imageMapResize = e()),
    "jQuery" in window &&
      (window.jQuery.fn.imageMapResize = function () {
        return this.filter("map").each(r).end();
      });
})();
//# sourceMappingURL=imageMapResizer.map

// mail submit function
function mailSubmit() {
  alert("Thank you for submitting your feedback")
}

// modal pop-up
var modal = document.getElementById("welcomeModal")

function modalOpen() {
  modal.style.display = "block";

}

function modalClose() {
  modal.style.display = "none";
}
