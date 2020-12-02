function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});



(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".nav-link");
  const menuClose = document.querySelector(".header__nav-close");
  const menuLinks = document.querySelectorAll(".nav-links");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header__active");
    console.log('burger')
  });
  menuClose.addEventListener("click", () => {
    menu.classList.remove("header__active");
  });
  if (window.innerWidth < 769) {
    for (let i = 0; i < menuLinks.length; i += 1) {
      menuLinks[i].addEventListener("click", () => {
        menu.classList.remove("header__nav_active");
      });
    }
  }
})();