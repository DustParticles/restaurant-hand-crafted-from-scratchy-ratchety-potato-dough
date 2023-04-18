/* eslint-disable no-plusplus */
/// Set the elements attributes (e.g class names, ID names etc)
const setAttribute = (element, attributes) => {
  const keys = Object.keys(attributes);
  keys.forEach((key) => {
    element.setAttribute(key, attributes[key]);
  });
};

// Note: createElement function is not the same as document.createElement they are two separate things
const createElement = (elementType, attributes) => {
  const element = document.createElement(elementType);

  setAttribute(element, attributes);

  return element;
};

function createSVG(color, d) {
  const SVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  SVG.setAttribute("viewBox", "0 0 24 24");
  path.setAttribute("fill", color);
  path.setAttribute("d", d);
  SVG.appendChild(path);
  return SVG;
}

const svgGoldenStar = createSVG(
  "yellow",
  "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
);

const svgGreyStar = createSVG(
  "grey",
  "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
);

function addRatingStars(amountOfStarsGiven) {
  const ratingContainer = createElement("div", {
    class: "rating-container",
  });

  /* Calculates how many grey stars to give if person gives 3 stars you would have 2 grey stars (5 grey stars - 3 stars) */
  const greyStars = 5 - amountOfStarsGiven;

  // Add golden stars
  for (let index = 0; index < amountOfStarsGiven; index++) {
    const clonedGoldStar = svgGoldenStar.cloneNode(true);
    clonedGoldStar.setAttribute("class", "golden-star");
    ratingContainer.appendChild(clonedGoldStar);
  }

  // Add grey stars
  for (let index = 0; index < greyStars; index++) {
    const clonedGreyStar = svgGreyStar.cloneNode(true);
    clonedGreyStar.setAttribute("class", "grey-star");
    ratingContainer.appendChild(clonedGreyStar);
  }

  return ratingContainer;
}

function createReviewCard(imageAttributes, ratingAmount, comment, personName) {
  // create container
  const reviewCard = createElement("div", { class: "review-card" });

  // create profile image container
  const profileImageContainer = createElement("div", {
    class: "review-profile-holder",
  });

  // create image
  const profilePicture = createElement("img", {
    src: imageAttributes[0],
    alt: imageAttributes[1],
    class: imageAttributes[2],
  });

  // create container to house the rating stars and comments
  const reviewContainer = createElement("div", {
    class: "review-container",
  });

  // create rating
  const rating = addRatingStars(ratingAmount);

  // create comment container
  const reviewComment = createElement("p", { class: "review-comment" });

  // Add text to reviewComment
  reviewComment.innerText = comment;

  // create name
  const reviewerName = createElement("p", { class: "reviewer-name" });

  // Add text to reviewerName
  reviewerName.innerText = personName;

  // Append profilePicture into profileImageContainer
  profileImageContainer.appendChild(profilePicture);

  // Append rating, reviewComment, and reviewerName into reviewContainer
  reviewContainer.append(rating, reviewComment, reviewerName);

  // Append profilePicture and reviewContainer into reviewCard
  reviewCard.append(profilePicture, reviewContainer);

  // return reviewCard element
  return reviewCard;
}

export {
  createElement,
  setAttribute,
  createSVG,
  addRatingStars,
  createReviewCard,
};
