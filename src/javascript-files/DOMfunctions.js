import { navbarLinksContainer, bodyElement } from "./selectors";

// Function to hide menu
export function hideMenu() {
  navbarLinksContainer.classList.remove("show");
  navbarLinksContainer.classList.add("hide");
  bodyElement.style.overflow = "auto"; // Set overflow back to 'auto'
}

// Function to show menu
export function showMenu() {
  navbarLinksContainer.classList.remove("hide");
  navbarLinksContainer.classList.add("show");
  bodyElement.style.overflow = "hidden"; // Set overflow to 'hidden'
}
