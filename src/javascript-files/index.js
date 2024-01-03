import "../index.css";

/* SELECTORS IMPORT */
import {
  hamburgerMenuButton,
  navbarLinksContainer,
  cursorDot,
  cursorOutline,
  languageSwitch,
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

// Listen for the DOMContentLoaded event to ensure the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {
  // Set the default language to English
  let currentLanguage = "en";

  // Define a function to update the text content of all elements that can be translated
  function updateLanguageText() {
    // Select all elements with a 'data-lang-en' attribute
    const translatableElements = document.querySelectorAll("[data-lang-en]");
    // Iterate over each element and update its text content based on the current language
    translatableElements.forEach((element) => {
      element.textContent =
        currentLanguage === "en"
          ? element.getAttribute("data-lang-en") // Set text to English if currentLanguage is 'en'
          : element.getAttribute("data-lang-fr"); // Set text to French if currentLanguage is 'fr'
    });
  }

  // Initially set all translatable text on the page to English
  updateLanguageText();

  function updateLanguageSwitchColor() {
    if (currentLanguage === "en") {
      languageSwitch.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
    } else {
      languageSwitch.style.backgroundColor = "rgba(0, 0, 255, 0.4)";
    }
  }

  // Initially set the background-color of languageSiwtch button to red
  updateLanguageSwitchColor();

  // Add an event listener for the click event on the language switch button
  languageSwitch.addEventListener("click", () => {
    // Toggle the currentLanguage between 'en' and 'fr'
    currentLanguage = currentLanguage === "en" ? "fr" : "en";

    // Update the button's text to reflect the current language
    languageSwitch.textContent = currentLanguage.toUpperCase();

    // Update the text content of all translatable elements to the new language
    updateLanguageText();

    // Update the background-color of languageSiwtch button, based on curretn language
    updateLanguageSwitchColor();
  });
});
