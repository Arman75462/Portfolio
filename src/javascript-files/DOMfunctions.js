/* DOM SELECTORS IMPORT */
import {
  navList,
  bodyElement,
  skillIconGithub,
  contactLinkImageGithub,
  toggleThemeButton,
  scrollWatcher,
  heroSection,
  aboutSection,
  skillsSection,
  projectsSection,
  contactSection,
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

// Function to add blur in the main sections of the website, apart from the header section
export function addSectionsBlur() {
  heroSection.classList.add("blur");
  aboutSection.classList.add("blur");
  skillsSection.classList.add("blur");
  projectsSection.classList.add("blur");
  contactSection.classList.add("blur");
}

// Function to remove blur from the main sections of the website, apart from the header section
export function removeSectionsBlur() {
  heroSection.classList.remove("blur");
  aboutSection.classList.remove("blur");
  skillsSection.classList.remove("blur");
  projectsSection.classList.remove("blur");
  contactSection.classList.remove("blur");
}
