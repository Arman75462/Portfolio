import "./index.css";

const hamburgerMenuButton = document.querySelector(".hamburger-wrapper");
const navbarLinks = document.querySelector(".nav__list");
const bodyElement = document.querySelector("body");

hamburgerMenuButton.addEventListener("click", () => {
  hamburgerMenuButton.classList.toggle("active");

  if (navbarLinks.classList.contains("show")) {
    navbarLinks.classList.remove("show");
    navbarLinks.classList.add("hide");
    bodyElement.style.overflow = "auto"; // Set overflow back to 'auto'
  } else {
    navbarLinks.classList.remove("hide");
    navbarLinks.classList.add("show");
    bodyElement.style.overflow = "hidden"; // Set overflow to 'hidden'
  }
});
