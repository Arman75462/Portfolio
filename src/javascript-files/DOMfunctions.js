/* DOM SELECTORS IMPORT */
import {
  navList,
  skillIconGithub,
  contactLinkImageGithub,
  toggleThemeButton,
  scrollWatcher,
  bodyElement,
} from "./DOMselectors";

// Function to show menu
export function showMenu() {
  navList.classList.remove("hide");
  navList.classList.add("show");
  bodyElement.style.overflow = "hidden"; // Set overflow to 'hidden'
}

// Function to hide menu
export function hideMenu() {
  navList.classList.remove("show");
  navList.classList.add("hide");
  bodyElement.style.overflow = "auto"; // Set overflow back to 'auto'
}

// Switch GitHub icon, depending on background-color. If background-color is light, github icon will be black. If background-color is dark github icon will be white.
export function switchGithubIcon() {
  if (document.body.classList.contains("light-mode")) {
    skillIconGithub.src = "images/GitHub-black.webp";
    contactLinkImageGithub.src = "images/GitHub-black.webp";
  } else {
    skillIconGithub.src = "images/GitHub-white.webp";
    contactLinkImageGithub.src = "images/GitHub-white.webp";
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
