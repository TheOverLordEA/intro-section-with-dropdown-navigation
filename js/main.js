function mobileMenu() {
  document.querySelector(".nav-collapsed").style.display = "flex";

  document.querySelector(".nav-collapsed").style.width = "58%";
  document.querySelector("body").style.background = "blue";
}

function closeMenu() {
  document.querySelector(".nav-collapsed").style.display = "none";
  document.querySelector(".nav-collapsed").style.width = "0";
  document.querySelector("body").style.background = "white";
}

function openMobileMenu() {
  document.querySelector(".wrap").style.display = "flex";
}

document.querySelector(".burger-menu").addEventListener("click", mobileMenu);

document.querySelector(".nav-close").addEventListener("click", closeMenu);
