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

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomRgb() {
  return [
    randomInteger(50, 255),
    randomInteger(50, 255),
    randomInteger(50, 255),
  ];
}

const rgb = getRandomRgb();

navBarContainer.style.backgroundColor = `rgb(${rgb.join(", ")})`;
const tabGroup = document.createElement("div");
const homeTab = document.createElement("a");
const menuTab = document.createElement("a");
const contactTab = document.createElement("a");

const verticalLine = document.createElement("div");
const footerText = document.createElement("p");

export default function firstLoad() {
  // Set attributes
  navBarContainer.setAttribute("class", "nav-bar-container");
  tabGroup.setAttribute("class", "tab-group");
  homeTab.setAttribute("class", "home-button");
  menuTab.setAttribute("class", "menu-button");
  contactTab.setAttribute("class", "contact-button");

  verticalLine.setAttribute("class", "nav-vertical-line");

  // Give elements values/content/text
  homeTab.innerText = "Home";
  menuTab.innerText = "Menu";
  contactTab.innerText = "Contacts";

  footerText.innerText = `Copyright ${new Date().getFullYear()} | Contact | Email`;

  // Append contents to elements

  tabGroup.append(
    homeTab,
    verticalLine.cloneNode(true),
    menuTab,
    verticalLine.cloneNode(true),
    contactTab
  );

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
