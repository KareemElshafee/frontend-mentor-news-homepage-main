"use strict";
const burgerMenu = document.querySelector(".menu-img");
const nav = document.querySelector("nav");
const closeMenu = document.querySelector(".close-menu");

burgerMenu.addEventListener("click", function () {
  nav.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  nav.style.display = "none";
});

// another solution

// let open = false;
// function showNav() {
//   if (open === false) {
//     nav.style.display = "none";
//     open = true;
//   } else {
//     nav.style.display = "block";
//     open = false;
//   }
// }

// burgerMenu.addEventListener("click", showNav);

// closeMenu.addEventListener("click", showNav);
