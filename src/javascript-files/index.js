import "../index.css";

/* SELECTORS IMPORT */
import {
  hamburgerMenuButton,
  navbarLinksContainer,
  cursorDot,
  cursorOutline,
} from "./selectors";

/* FUNCTIONS IMPORT */
import { hideMenu, showMenu } from "./functions";

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
