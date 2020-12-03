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
  var menu = document.querySelector(".menu");
  var menuLinks = document.querySelectorAll(".nav-link");
  burgerItem.addEventListener("click", function () {
    menu.classList.toggle("header__active");
    burgerItem.classList.toggle("active");
  });

  if (window.innerWidth < 769) {
    for (var i = 0; i < menuLinks.length; i += 1) {
      menuLinks[i].addEventListener("click", function () {
        menu.classList.remove("header__active");
      });
    }
  }
})();