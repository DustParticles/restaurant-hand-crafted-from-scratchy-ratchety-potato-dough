import setAttributes from "./setAttributes";
import amogus from "./Images/RATTTTTT.jpg";
import diningArea from "./Images/k8-sWEpcc0Rm0U-unsplash.jpg";

const firstLoad = () => {
  const content = document.querySelector("#content");

  // create all the elements for where the contents will go
  const header = document.createElement("header");

  const main = document.createElement("main");
  const mainImage = document.createElement("img");

  const footer = document.createElement("footer");

  // Create elements
  const tabGroup = document.createElement("div");

  const homeTab = document.createElement("button");
  const menuTab = document.createElement("button");
  const contactTab = document.createElement("button");

  const footerText = document.createElement("p");

  // Set attributes
  tabGroup.setAttribute("class", "tab-group");
  homeTab.setAttribute("class", "home-button");
  menuTab.setAttribute("class", "menu-button");
  contactTab.setAttribute("class", "contact-button");

  setAttributes(mainImage, {
    src: diningArea,
    alt: "Rat cooking LETHIMCOOK",
    class: "background-image",
  });

  // Give elements values/content/text
  homeTab.innerText = "Home";
  menuTab.innerText = "Menu";
  contactTab.innerText = "Contacts";

  footerText.innerText = "Copyright 2022 | Contact | Email";

  // Append contents to elements
  tabGroup.appendChild(homeTab);
  tabGroup.appendChild(menuTab);
  tabGroup.appendChild(contactTab);

  header.appendChild(tabGroup);

  main.appendChild(mainImage);

  footer.appendChild(footerText);

  content.appendChild(header);
  content.appendChild(main);
  content.appendChild(footer);
};
export default firstLoad;
