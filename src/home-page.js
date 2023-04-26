import diningArea from "./Images/foodCriticGuyFromRatapooie.jpeg";
import { createElement, createReviewCard } from "./helperFunctions";
import { main } from "./initial-page-load";
import ratImage from "./Images/aRatCookin.jpg";
import larryTheCucumber from "./Images/larryCucumberInDiningPLace.jpeg";
import bobTheTomato from "./Images/bobTheTomato.jpg";
import mrPotato from "./Images/mrPotatoHead.png";
import restaurantLogo from "./Images/GusteauLOGO.png";
// remove any highlight on tab button that is not home
// highlight home tab button when clicked
// remove content so that home tab contents can be filled

const restaurantLogoImage = createElement("img", {
  src: restaurantLogo,
  alt: "Restaurant Logo",
  class: "restaurant-logo",
});

const mainImage = createElement("img", {
  src: diningArea,
  alt: "People In Restaurant Dining Area Seated Waiting And Or Eating With Waiters Walking Around",
  class: "background-image",
});

const homePageSection = createElement("div", {
  class: "home-page-section",
});

const homePageTextContents = createElement("div", {
  class: "home-page-contents-text-contents",
});

const homePageText1 = createElement("p", { class: "home-page-text-1" });
const homePageText2 = createElement("p", { class: "home-page-text-2" });

const homePageContents = createElement("div", { class: "home-page-contents" });
const orderButton = createElement("button", { class: "order-button" });

const reviews = createElement("div", { class: "reviews" });
let [reviewCard1, reviewCard2, reviewCard3, reviewCard4] = [
  createElement("div", { class: "review-card" }),
  createElement("div", { class: "review-card" }),
  createElement("div", { class: "review-card" }),
  createElement("div", { class: "review-card" }),
];

// Set the elements text contents

homePageText1.innerText = "Worst food in the world!";
homePageText2.innerText = "- Anton Ego";
orderButton.innerText = "Order Now";

// Append elements inside one another
homePageTextContents.append(homePageText1, homePageText2);
homePageContents.append(homePageTextContents, orderButton);

reviewCard1 = createReviewCard(
  [ratImage, "Rat cooking LETHIMCOOK", "review-profile-picture"],
  5,
  "I died from eating this food 11/10",
  "Rattaouli"
);
reviewCard2 = createReviewCard(
  [
    bobTheTomato,
    "Bob The Tomato Wearing A Hat Profile Picture",
    "review-profile-picture",
  ],
  5,
  "He served me a cucumber for some reason it taste my friend larry idk why",
  "Bob The Tomato"
);
reviewCard3 = createReviewCard(
  [larryTheCucumber, "Larry The Cucumber", "review-profile-picture"],
  5,
  "The staff is currently giving me tour of their back kitchen they said they have something special for me we lit",
  "Larry The Cucumber"
);

reviewCard4 = createReviewCard(
  [mrPotato, "Mr. Potato Head", "review-profile-picture"],
  1,
  "They served me a literal raw potato bruh. 💀",
  "Mr. Potato Head"
);

reviews.append(reviewCard1, reviewCard2, reviewCard3, reviewCard4);

export default function loadHomePageContents() {
  /// do stuff
  homePageSection.append(mainImage, homePageContents);
  main.append(homePageSection, reviews);
}
