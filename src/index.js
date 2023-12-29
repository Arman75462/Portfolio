import "./index.css";

const hamburgerMenuButton = document.querySelector(".hamburger-wrapper");
const navbarLinks = document.querySelector(".nav__list");
const body = document.querySelector("body");

hamburgerMenuButton.addEventListener("click", () => {
  hamburgerMenuButton.classList.toggle("active");

  if (navbarLinks.classList.contains("show")) {
    navbarLinks.classList.remove("show");
    navbarLinks.classList.add("hide");
    body.style.overflow = "auto"; // Set overflow back to 'auto'
  } else {
    navbarLinks.classList.remove("hide");
    navbarLinks.classList.add("show");
    body.style.overflow = "hidden"; // Set overflow to 'hidden'
  }
});

/* // This makes hamburger menu work
let menuButton = document.querySelector(".menu-button");
let navbarLinks = document.querySelector(".navbar-links");
const body = document.querySelector("body");

menuButton.addEventListener("click", function () {
  if (navbarLinks.classList.contains("show")) {
    navbarLinks.classList.remove("show");
    navbarLinks.classList.add("hide");
    menuButton.textContent = "≡";
    body.style.overflow = "auto"; // Set overflow back to 'auto'
  } else {
    navbarLinks.classList.remove("hide");
    navbarLinks.classList.add("show");
    menuButton.textContent = "✖";
    body.style.overflow = "hidden"; // Set overflow to 'hidden'
  }
}); */
