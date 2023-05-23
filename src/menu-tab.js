import { main } from "./initial-page-load";
import removePageContents from "./removeContents";
import { createElement } from "./helperFunctions";
import diningTableImage from "./Images/diningTable.jpg";

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

export default function menuPage() {
  removePageContents();
  main.append(backgroundImageContainer);
}

/* TODO
FIND A GOOD IMAGE FOR A MENU 

ADD MENU ITEMS


*/
