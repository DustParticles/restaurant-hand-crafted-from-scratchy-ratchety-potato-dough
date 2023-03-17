import diningArea from "./Images/k8-sWEpcc0Rm0U-unsplash.jpg";
import createElement, { addRatingStars } from "./helperFunctions";
import { header, main, footer, homeTab } from "./initial-page-load";
import ratImage from "./Images/RATTTTTT.jpg";
import mrPotato from "./Images/larryCucumberInDiningPLace.jpeg";
import bobTheTomato from "./Images/bobTheTomato.jpg";
// remove any highlight on tab button that is not home
// highlight home tab button when clicked
// remove content so that home tab contents can be filled

// TODO ADD REVIEW SECTION WITH REVIEWS

const mainImage = createElement("img", {
  src: diningArea,
  alt: "Rat cooking LETHIMCOOK",
  class: "background-image",
});

const homePageSection = createElement("div", {
  class: "home-page-section",
});

const profilePicture1 = createElement("img", {
  src: ratImage,
  alt: "Rat cooking LETHIMCOOK",
  class: "review-profile-picture",
});

const profilePicture2 = createElement("img", {
  src: bobTheTomato,
  alt: "Bob The Tomato Wearing A Hat Profile Picture",
  class: "review-profile-picture",
});

const profilePicture3 = createElement("img", {
  src: mrPotato,
  alt: "Mr. Potato Profile Picture",
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

/// TODO
/* function createReviewCard(img, rating, comment, personName) {
  // create container 
  const reviewCard = createElement("div", { class: "review-card" });

  // create profile image container
  const profileImageContainer = createElement("div", {
    class: "review-profile-holder",
  });

  // create image 
const profilePicture = createElement("img", {
  src: img[0],
  alt: img[1],
  class: img[2],
});

  // create container to house the rating stars and comments

  // create rating
  addRatingStars(rating)

  // create comment container

  // create name 

  

} */

// Set the elements text contents

homePageText1.innerText = "Worst food in the world!";
homePageText2.innerText = "- Made by unpaid workers.";
/* homePageText3.innerText = "Dont eat here truse me"; */
orderButton.innerText = "Order Now";
/* reviewComment.innerText = "I died from eating this food 11/10"; */

// Append elements inside one another

homePageTextContents.append(homePageText1, homePageText2);
homePageContents.append(homePageTextContents, orderButton);

/* reviewCard1.appendChild(createElement(profileImageContainer).appendChild(profilePicture1)) 
reviewCard2.appendChild(createElement(profileImageContainer).appendChild(profilePicture2)) 
reviewCard3.appendChild(createElement(profileImageContainer).appendChild(profilePicture3)) */

let index = 0;
[reviewCard1, reviewCard2, reviewCard3].forEach((element) => {
  const profileImageContainer = createElement("div", {
    class: "review-profile-holder",
  });

  const profileImage = [profilePicture1, profilePicture2, profilePicture3];

  // create container for comment
  const reviewComment = createElement("p", { class: "review-comment" });

  // create strings of text for comment container
  const comments = [
    "I died from eating this food 11/10",
    "He served me a cucumber for some reason it taste my friend larry idk why",
    "Yo the staff are giving me tour of their back kitchen they said they have something special for me we lit",
  ];

  const reviewersName = ["Rattaouli", "Bob The Tomato", "Larry The Cucumber"];

  // review container to contain the rating of stars and the comment
  const reviewContainer = createElement("div", {
    class: "review-container",
  });

  // append review comment inside
  reviewComment.innerText = comments[index];

  // append profile image to review container
  profileImageContainer.appendChild(profileImage[index]);

  // create stars and append to review container
  reviewContainer.append(addRatingStars(5), reviewComment);

  // append image to profile container
  profileImageContainer.appendChild(profileImage[index]);

  element.append(profileImageContainer, reviewContainer);

  ++index;
});

reviews.append(reviewCard1, reviewCard2, reviewCard3);

export default function loadHomePageContents() {
  /// do stuff
  homePageSection.append(mainImage, homePageContents);
  main.append(homePageSection, reviews);
}
