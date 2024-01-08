import {
  navbarLinksContainer,
  bodyElement,
  skillIconGithub,
  contactLinkImageGithub,
  toggleThemeButton,
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
    skillIconGithub.src = "../images/icons8-github-black.png";
    contactLinkImageGithub.src = "../images/icons8-github-black.png";
  } else {
    skillIconGithub.src = "../images/icons8-github-white.png";
    contactLinkImageGithub.src = "../images/icons8-github-white.png";
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
