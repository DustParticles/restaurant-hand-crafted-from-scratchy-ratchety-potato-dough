import restaurantLogo from "./Images/GusteauLOGO.png";
import { createElement } from "./helperFunctions";
import loadHomePageContents from "./home-page";

const content = document.querySelector("#content");

// create all the elements for where the #content will go

const header = document.createElement("header");

const main = document.createElement("main");

const footer = document.createElement("footer");

// Create elements

const restaurantLogoImage = createElement("img", {
  src: restaurantLogo,
  alt: "Restaurant Logo",
  class: "restaurant-logo",
});

const navBarContainer = document.createElement("div");
const tabGroup = document.createElement("div");
const homeTab = document.createElement("button");
const menuTab = document.createElement("button");
const contactTab = document.createElement("button");

const footerText = document.createElement("p");

document.addEventListener("click", loadHomePageContents);

export default function firstLoad() {
  // Set attributes
  navBarContainer.setAttribute("class", "nav-bar-container");
  tabGroup.setAttribute("class", "tab-group");
  homeTab.setAttribute("class", "home-button");
  menuTab.setAttribute("class", "menu-button");
  contactTab.setAttribute("class", "contact-button");

  // Give elements values/content/text
  homeTab.innerText = "Home";
  menuTab.innerText = "Menu";
  contactTab.innerText = "Contacts";

  footerText.innerText = `Copyright ${new Date().getFullYear()} | Contact | Email`;

  // Append contents to elements

  tabGroup.append(homeTab, menuTab, contactTab);

  navBarContainer.append(restaurantLogoImage, tabGroup);

  header.appendChild(navBarContainer);

  footer.appendChild(footerText);

  content.append(header, main, footer);

  loadHomePageContents();
}

export {
  content,
  navBarContainer,
  homeTab,
  menuTab,
  contactTab,
  header,
  main,
  footer,
  footerText,
};
