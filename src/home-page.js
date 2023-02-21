import diningArea from "./Images/k8-sWEpcc0Rm0U-unsplash.jpg";
import setAttributes from "./setAttributes";
import { header, main, footer, homeTab } from "./initial-page-load";

// remove any highlight on tab button that is not home
// highlight home tab button when clicked
// remove content so that home tab contents can be filled

const mainImage = document.createElement("img");
const homePageTextContents = document.createElement("div");
const homePageText1 = document.createElement("p");
const homePageText2 = document.createElement("p");
/* const homePageText3 = document.createElement("p"); */
const homePageContents = document.createElement("div");
const orderButton = document.createElement("button");

homePageText1.innerText = "Worst food in the world!";
homePageText2.innerText = "- Made by unpaid workers.";
/* homePageText3.innerText = "Dont eat here truse me"; */
orderButton.innerText = "Order Now";

homePageTextContents.appendChild(homePageText1);
homePageTextContents.appendChild(homePageText2);
/* homePageTextContents.appendChild(homePageText3); */

homePageTextContents.className = "home-page-contents-text-contents";

homePageContents.className = "home-page-contents";
orderButton.className = "order-button";

export default function loadHomePageContents() {
  /// do stuff
  setAttributes(mainImage, {
    src: diningArea,
    alt: "Rat cooking LETHIMCOOK",
    class: "background-image",
  });

  homePageText1.className = "home-page-text-1";
  homePageText2.className = "home-page-text-2";
  /* homePageText3.className = "home-page-text-3"; */

  homePageContents.appendChild(homePageTextContents);
  homePageContents.appendChild(orderButton);

  main.appendChild(mainImage);
  main.appendChild(homePageContents);
}
