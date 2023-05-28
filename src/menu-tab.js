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

/* begin here for item copying */
function createMenuItem(title, price, description) {
  /* add disclaimer text?
   add line breaks?
  */
  const menuItem = createElement("div", {
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

  menuItemTitle.innerText = title;
  menuItemPrice.innerText = price;
  menuItemDescription.innerText = description;

  menuItemTitleContainer.append(menuItemTitle, menuItemPrice);
  menuItem.append(menuItemTitleContainer, menuItemDescription);

  return menuItem;
}
/* stop here!!!!!!!!!!!! */

menuTitle.innerText = "Menu";
menuSection1.append(
  createMenuItem("HUMAN MEAT", "$69.99", "MADE FROM THE FINEST HUMANS")
);
menuSection2.append(
  createMenuItem(
    "HUMAN FECES",
    "$250",
    "FECES MADE FRESH SOMEONE WILL GO TO YOUR TABLE AND WILL POOP ON YOUR PLATE *may taste like taco bell food"
  )
);
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
AND MAKE MENU CONTAINER  SCROLLABLE IF THERE ARE TOO MANY FOOD ITEMS
*/
