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
  const menu = document.querySelector(".menu");
  const menuLinks = document.querySelectorAll(".nav-link"); 
    burgerItem.addEventListener("click", () => {
      menu.classList.toggle("header__active")
      burgerItem.classList.toggle("active");
    });
    if (window.innerWidth < 769) {
    for (let i = 0; i < menuLinks.length; i += 1) {
      menuLinks[i].addEventListener("click", () => {
        menu.classList.remove("header__active");
      });
    }
  }
})();
