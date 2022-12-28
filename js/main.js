function mobileMenu() {
  document.querySelector(".nav-collapsed").style.display = "flex";

  document.querySelector(".nav-collapsed").style.width = "58%";
  document.querySelector("body").style.background = "gray";
}

function closeMenu() {
  document.querySelector(".nav-collapsed").style.display = "none";
  document.querySelector(".nav-collapsed").style.width = "0";
  document.querySelector("body").style.background = "white";
}

function toggleE() {
  const display = document.querySelector(".display-feature");
  display.classList.toggle("feature-menu");
}

function toggleG() {
  const display = document.querySelector(".display-company");
  display.classList.toggle("feature-menu");
}

function changeImage() {
  const displayWidth = window.innerWidth;
  const imageDOM = document.querySelector(".image-hero");

  if (displayWidth < 500) {
    imageDOM.src =
      "/intro-section-with-dropdown-navigation-main/images/image-hero-mobile.png";
  }
}

changeImage();

document.querySelector(".burger-menu").addEventListener("click", mobileMenu);

document.querySelector(".nav-close").addEventListener("click", closeMenu);

document.querySelector(".container-mobile").addEventListener("click", toggleE);

document.querySelector(".container-company").addEventListener("click", toggleG);
