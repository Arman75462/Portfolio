/* DOM SELECTORS IMPORT */
import {
  navbarLinksContainer,
  bodyElement,
  skillIconGithub,
  contactLinkImageGithub,
  toggleThemeButton,
  scrollWatcher,
} from "./DOMselectors";

// Function to show menu
export function showMenu() {
  navbarLinksContainer.classList.remove("hide");
  navbarLinksContainer.classList.add("show");
  bodyElement.style.overflow = "hidden"; // Set overflow to 'hidden'
}

// Function to hide menu
export function hideMenu() {
  navbarLinksContainer.classList.remove("show");
  navbarLinksContainer.classList.add("hide");
  bodyElement.style.overflow = "auto"; // Set overflow back to 'auto'
}

// Switch GitHub icon, depending on background-color. If background-color is light, github icon will be black. If background-color is dark github icon will be white.
export function switchGithubIcon() {
  if (document.body.classList.contains("light-mode")) {
    skillIconGithub.src = "../src/images/GitHub-black.webp";
    contactLinkImageGithub.src = "../src/images/GitHub-black.webp";
  } else {
    skillIconGithub.src = "../src/images/GitHub-white.webp";
    contactLinkImageGithub.src = "../src/images/GitHub-white.webp";
  }
}

// If the website in in light-mode, put ☀️ for the toggleThemeButton's textContent. If not, put 🌛
export function switchThemeButtonText() {
  if (document.body.classList.contains("light-mode")) {
    toggleThemeButton.textContent = "☀️";
  } else {
    toggleThemeButton.textContent = "🌛";
  }
}

// Function to update the width of the scroll-watcher
export function updateScrollWatcher() {
  // Calculate the scroll percentage
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;

  // Update the width of the scroll-watcher
  scrollWatcher.style.width = `${scrollPercent}%`;
}
