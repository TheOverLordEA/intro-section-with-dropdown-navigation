// function mobileMenu() {
//   document.querySelector(".nav-collapsed").style.display = "flex";

//   document.querySelector(".nav-collapsed").style.width = "58%";
//   document.querySelector("body").style.background = "blue";
// }

// function closeMenu() {
//   document.querySelector(".nav-collapsed").style.display = "none";
//   document.querySelector(".nav-collapsed").style.width = "0";
//   document.querySelector("body").style.background = "white";
// }

// document.querySelector(".burger-menu").addEventListener("click", mobileMenu);

// document.querySelector(".nav-close").addEventListener("click", closeMenu);

document.querySelector("h1").addEventListener("click", () => {
  document.querySelector("nav").style.width = "10px";
  document.querySelector("nav").style.height = "100%";
});

document.querySelector("h5").addEventListener("click", () => {
  document.querySelector("nav").style.width = "0";

  document.querySelector("nav").height = "0";
});
