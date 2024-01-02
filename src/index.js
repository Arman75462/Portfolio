import "./index.css";

/* SELECTORS */
const hamburgerMenuButton = document.querySelector(".hamburger-wrapper");
const navbarLinksContainer = document.querySelector(".nav__list");
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

// Function to hide menu
function hideMenu() {
  navbarLinksContainer.classList.remove("show");
  navbarLinksContainer.classList.add("hide");
  bodyElement.style.overflow = "auto"; // Set overflow back to 'auto'
}

// Function to show menu
function showMenu() {
  navbarLinksContainer.classList.remove("hide");
  navbarLinksContainer.classList.add("show");
  bodyElement.style.overflow = "hidden"; // Set overflow to 'hidden'
}

// Event listener to hide menu once user clicked on a link
navbarLinksContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav__link")) {
    hamburgerMenuButton.classList.toggle("active");
    hideMenu();
  }
});

// Event listener for hamburger menu
hamburgerMenuButton.addEventListener("click", () => {
  hamburgerMenuButton.classList.toggle("active");

  if (navbarLinksContainer.classList.contains("show")) {
    hideMenu();
  } else {
    showMenu();
  }
});
