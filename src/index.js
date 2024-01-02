import "./index.css";

/* SELECTORS */
const hamburgerMenuButton = document.querySelector(".hamburger-wrapper");
const navbarLinks = document.querySelector(".nav__list");
const bodyElement = document.querySelector("body");
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

/* Event listener for custom cursor */
window.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" }
  );
});

// Event listener for hamburger menu
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
