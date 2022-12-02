function mobileMenu() {
  document.querySelector(".burger-menu").style.display = "none";
  document.querySelector(".nav-collapsed").style.display = "flex";
  document.querySelector("body").style.background = "blue";
}

document.querySelector(".burger-menu").addEventListener("click", mobileMenu);
