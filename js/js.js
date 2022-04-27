  /* js ARRAS LILLE TUQUET */
  

  /* js anas  */



  // APPARITION NAVBAR//
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 60) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });
});

//CHANGEMENT COULEUR DU LOGO LORS DU SCROLL//
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 60) {
      $("header #logo").addClass("active");
    } else {
      $("header #logo").removeClass("active");
    }
  });
});

//CHANGEMENT COULEUR RUBRIQUE LORS DU SCROLL//
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 60) {
      $("header ul li a").addClass("active");
    } else {
      $("header ul li a").removeClass("active");
    }
  });
});

//FAIT APPARAITRE INFO AGENT 1//
$(document).ready(function () {
  $("#monbout1").click(function () {
    $("#div1").fadeIn(800);
  });

  $(".close").click(function () {
    $("#div1").fadeOut(800);
  });
});

//FAIT APPARAITRE INFO AGENT 2//
$(document).ready(function () {
  $("#monbout2").click(function () {
    $("#div2").fadeIn(800);
  });

  $(".close").click(function () {
    $("#div2").fadeOut(800);
  });
});

//FAIT APPARAITRE INFO AGENT 3//
$(document).ready(function () {
  $("#monbout3").click(function () {
    $("#div3").fadeIn(800);
  });

  $(".close").click(function () {
    $("#div3").fadeOut(800);
  });
});

//CAROUSEL GLISSANT//
const slider = document.querySelector(".slideshow-container");
let holding = false;
let firstClickX;
let alreadyLeftScrolled;
let velocity;
let rafID;

slider.addEventListener("mousedown", (e) => {
  holding = true;

  firstClickX = e.pageX - slider.offsetLeft;

  alreadyLeftScrolled = slider.scrollLeft;

  stopTransition();
});

slider.addEventListener("mousemove", (e) => {
  if (!holding) return;

  const x = e.pageX - slider.offsetLeft;

  const scrolled = (x - firstClickX) * 2;

  const prevScrollLeft = slider.scrollLeft;

  slider.scrollLeft = alreadyLeftScrolled - scrolled;

  velocity = slider.scrollLeft - prevScrollLeft;
});

slider.addEventListener("mouseup", () => {
  holding = false;
  startTransition();
});
slider.addEventListener("mouseleave", () => {
  holding = false;
});

function startTransition() {
  stopTransition();

  rafID = requestAnimationFrame(decreasingTransition);
}

function stopTransition() {
  cancelAnimationFrame(rafID);
}
function decreasingTransition() {
  slider.scrollLeft += velocity;
  velocity *= 0.95;
  if (Math.abs(velocity) > 0.5) {
    rafID = requestAnimationFrame(decreasingTransition);
    console.log(velocity);
  }
}

slider.addEventListener("touchstart", (e) => {
  holding = true;
  // pageX => la largeur entre mon click et le DOCUMENT
  firstClickX = e.targetTouches[0].pageX - slider.offsetLeft;

  alreadyLeftScrolled = slider.scrollLeft;
  stopTransition();
});
slider.addEventListener("touchend", () => {
  holder = false;
  startTransition();
});
slider.addEventListener("touchmove", (e) => {
  if (!holding) return;

  const x = e.targetTouches[0].pageX - slider.offsetLeft;

  const scrolled = (x - firstClickX) * 2;

  const prevScrollLeft = slider.scrollLeft;

  slider.scrollLeft = alreadyLeftScrolled - scrolled;

  velocity = slider.scrollLeft - prevScrollLeft;
});



 