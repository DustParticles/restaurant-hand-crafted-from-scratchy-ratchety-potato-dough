import setAttributes from "./setAttributes";
import amogus from "./Images/RATTTTTT.jpg";
import diningArea from "./Images/k8-sWEpcc0Rm0U-unsplash.jpg";
import loadHomePageContents from "./home-page";

const content = document.querySelector("#content");

// create all the elements for where the contents will go
const header = document.createElement("header");

const main = document.createElement("main");

const footer = document.createElement("footer");

// Create elements
const tabGroup = document.createElement("div");

const homeTab = document.createElement("button");
const menuTab = document.createElement("button");
const contactTab = document.createElement("button");

const footerText = document.createElement("p");

document.addEventListener("click", loadHomePageContents);

export default function firstLoad() {
  // Set attributes
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
  tabGroup.appendChild(homeTab);
  tabGroup.appendChild(menuTab);
  tabGroup.appendChild(contactTab);

  header.appendChild(tabGroup);

  footer.appendChild(footerText);

  content.appendChild(header);
  content.appendChild(main);
  content.appendChild(footer);

  loadHomePageContents();
}

export {
  content,
  tabGroup,
  homeTab,
  menuTab,
  contactTab,
  header,
  main,
  footer,
  footerText,
};
