import "../index.css";

/* DOM SELECTORS IMPORT */
import {
  hamburgerMenuButton,
  navbarLinksContainer,
  cursorDot,
  cursorOutline,
  languageSwitch,
  resumeLink,
  translatableElements,
  toggleThemeButton,
} from "./DOMselectors";

/* FUNCTIONS IMPORT */
import {
  hideMenu,
  showMenu,
  switchGithubIcon,
  switchThemeButtonText,
} from "./functions";

/* Event listener to make the custom cursor work */
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

// Event listener to toggle hamburger menu between closing and opening when clicking it
hamburgerMenuButton.addEventListener("click", () => {
  hamburgerMenuButton.classList.toggle("active");

  if (navbarLinksContainer.classList.contains("show")) {
    hideMenu();
  } else {
    showMenu();
  }
});

// Event to translate language of website when clicking on languageSwitch button
document.addEventListener("DOMContentLoaded", () => {
  // Set the default language to English
  let currentLanguage = "en";

  // Define a function to update the text content of all elements that can be translated
  function updateLanguageText() {
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

  // Update languageSwitch button, depending on website language
  function updateLanguageSwitchColor() {
    if (currentLanguage === "en") {
      languageSwitch.style.backgroundColor = "rgba(255, 0, 0, 0.6)";
    } else {
      languageSwitch.style.backgroundColor = "rgba(0, 0, 255, 0.4)";
    }
  }

  // Initially set the background-color of languageSwitch button to red
  updateLanguageSwitchColor();

  // Update resume URL, depending on website language
  function updateResumeURL() {
    if (currentLanguage === "en") {
      // English-CV
      resumeLink.href =
        "https://1drv.ms/b/s!Am8jzLlkCjx0p0KgLM2FZ5odEjjb?e=7Xgi1y";
    } else {
      // French-CV
      resumeLink.href =
        "https://1drv.ms/b/s!Am8jzLlkCjx0p0HJzkoxIyKpgm0y?e=cQQYvY";
    }
  }

  // Initially set the URL of resumeButton to the english-CV URL
  updateResumeURL();

  // Add an event listener for the click event on the language switch button
  languageSwitch.addEventListener("click", () => {
    // Toggle the currentLanguage between 'en' and 'fr'
    currentLanguage = currentLanguage === "en" ? "fr" : "en";

    // Update the button's text to reflect the current language
    languageSwitch.textContent = currentLanguage.toUpperCase();

    // Update the text content of all translatable elements to the new language
    updateLanguageText();

    // Update the background-color of languageSwitch button, based on current language
    updateLanguageSwitchColor();

    // Update the URL of resumeLink to english-CV or french-CV, based on teh current language
    updateResumeURL();
  });
});

// Toggle theme between darkmode and lightmode when clicking toggleThemeButton
toggleThemeButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  // Toggle theme between darkmode and lightmode when clicking toggleThemeButton
  switchThemeButtonText();

  // Switch GitHub icon, depending on background-color
  switchGithubIcon();
});