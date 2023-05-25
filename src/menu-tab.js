import { main } from "./initial-page-load";
import removePageContents from "./removeContents";
import { createElement } from "./helperFunctions";
import diningTableImage from "./Images/diningTable.jpg";

const menuPageContainer = createElement("div", {
  class: "menu-page-container",
});

const menuContainer = createElement("div", {
  class: "menu-container",
});

const menuTitle = createElement("p", {
  class: "menu-title",
});

const menuSection1 = createElement("div", {
  class: "menu-section menu-section-1",
});

const menuSection2 = createElement("div", {
  class: "menu-section menu-section-2",
});

const menuItem1 = createElement("div", {
  class: "menu-item-container",
});

const menuItemTitle = createElement("p", {
  class: "menu-item-title ",
});

const menuItemPrice = createElement("p", {
  class: "menu-item-price",
});

const menuItemTitleContainer = createElement("div", {
  class: "menu-title-container",
});

const menuItemDescription = createElement("p", {
  class: "menu-item-Description",
});

menuItemPrice.innerText = "$69.99";
menuItemTitle.innerText = "HUMAN MEAT";
menuItemDescription.innerText = "MADE FROM THE FINEST HUMANS";

menuItemTitleContainer.append(menuItemTitle, menuItemPrice);
menuItem1.append(menuItemTitleContainer, menuItemDescription);

menuTitle.innerText = "Menu";
menuSection1.append(menuItem1.cloneNode(true));
menuSection2.append(menuItem1.cloneNode(true));
menuContainer.append(menuTitle, menuSection1, menuSection2);

const backgroundImageContainer = createElement("div", {
  class: "menu-background-image-container",
});

const diningTableBackgroundImage = createElement("img", {
  src: diningTableImage,
  alt: "dining table with a menu and food",
  class: "dining-table-image",
  style: "object-fit: cover; width: 100%; height: 100%;",
});

backgroundImageContainer.append(diningTableBackgroundImage);

menuPageContainer.append(backgroundImageContainer, menuContainer);

export default function menuPage() {
  removePageContents();
  main.append(menuPageContainer);
}

/* TODO
1. FIND A GOOD IMAGE FOR A MENU - DONE

2. CREATE A FUNCTION THAT CREATES ITEMS IN MENU
  - FIGURE OUT WHAT DESIGN IS BEST
  - DO 2 COLUMN FOOD MENU ITEMS?

3. ADD MENU ITEMS



MAKE MENU CONTAINER MAX WIDTH WAYYYYYY SMALLER!
*/
