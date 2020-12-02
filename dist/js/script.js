"use strict";

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

(function () {
  var burgerItem = document.querySelector(".burger");
  var menu = document.querySelector(".nav-link");
  var menuClose = document.querySelector(".header__nav-close");
  var menuLinks = document.querySelectorAll(".nav-links");
  burgerItem.addEventListener("click", function () {
    menu.classList.add("header__active");
    console.log('burger');
  });
  menuClose.addEventListener("click", function () {
    menu.classList.remove("header__active");
  });

  if (window.innerWidth < 769) {
    for (var i = 0; i < menuLinks.length; i += 1) {
      menuLinks[i].addEventListener("click", function () {
        menu.classList.remove("header__nav_active");
      });
    }
  }
})();