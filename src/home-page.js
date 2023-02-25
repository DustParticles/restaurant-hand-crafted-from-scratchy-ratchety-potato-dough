import diningArea from "./Images/k8-sWEpcc0Rm0U-unsplash.jpg";
import createElement, { addRatingStars } from "./helperFunctions";
import { header, main, footer, homeTab } from "./initial-page-load";
import ratImage from "./Images/RATTTTTT.jpg";

// remove any highlight on tab button that is not home
// highlight home tab button when clicked
// remove content so that home tab contents can be filled

// TODO ADD REVIEW SECTION WITH REVIEWS
const reviewProfileHolder = createElement("div", {
  class: "review-profile-holder",
});

const mainImage = createElement("img", {
  src: diningArea,
  alt: "Rat cooking LETHIMCOOK",
  class: "background-image",
});

const profilePicture = createElement("img", {
  src: ratImage,
  alt: "Rat cooking LETHIMCOOK",
  class: "review-profile-picture",
});

const homePageTextContents = createElement("div", {
  class: "home-page-contents-text-contents",
});

const homePageText1 = createElement("p", { class: "home-page-text-1" });
const homePageText2 = createElement("p", { class: "home-page-text-2" });

/* const homePageText3 = document.createElement("p"); */
const homePageContents = createElement("div", { class: "home-page-contents" });
const orderButton = createElement("button", { class: "order-button" });

const reviews = createElement("div", { class: "reviews" });
const [reviewCard1, reviewCard2, reviewCard3] = [
  createElement("div", { class: "review-card" }),
  createElement("div", { class: "review-card" }),
  createElement("div", { class: "review-card" }),
];

const reviewComment = createElement("p", { class: "review-comment" });

// Set the elements text contents

homePageText1.innerText = "Worst food in the world!";
homePageText2.innerText = "- Made by unpaid workers.";
/* homePageText3.innerText = "Dont eat here truse me"; */
orderButton.innerText = "Order Now";
reviewComment.innerText = "I died from eating this food 11/10";

// Append elements inside one another

homePageTextContents.append(homePageText1, homePageText2);
homePageContents.appendChild(homePageTextContents);
homePageContents.appendChild(orderButton);

[reviewCard1, reviewCard2, reviewCard3].forEach((element) => {
  const reviewProfileClone = reviewProfileHolder.cloneNode(true);
  const profilePictureClone = profilePicture.cloneNode(true);
  const reviewCommentClone = reviewComment.cloneNode(true);
  const reviewContainer = createElement("div", {
    class: "review-container",
  });
  reviewContainer.append(addRatingStars(5), reviewCommentClone);

  reviewProfileClone.appendChild(profilePictureClone);
  element.append(reviewProfileClone, reviewContainer);
});

reviews.append(reviewCard1, reviewCard2, reviewCard3);

export default function loadHomePageContents() {
  /// do stuff

  main.append(mainImage, homePageContents, reviews);
}
