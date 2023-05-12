import { createElement, createSVG } from "./helperFunctions";
import removePageContents from "./removeContents";
import { main } from "./initial-page-load";
import chattingGif from "./Images/Gifs/chatting.gif";

const contactPageContainer = createElement("div", {
  class: "contact-page-container",
});
const contactInfoContainer = createElement("div", {
  class: "contact-info-container",
});
const contactInfoGroup = createElement("div", {
  class: "contact-info-group",
});

const contactPageMainText = createElement("p", {
  class: "contact-page-main-text",
});

contactPageMainText.innerText = "Contact Us";

// Map elements
const mapAddressContainer = createElement("div", {
  class: "map-address-container",
});

const mapSvg = createSVG(
  "black",
  "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
);

const mapTitleText = createElement("p", {
  class: "support-title-text",
});

const mapAddressText = createElement("p", {
  class: "map-address-text",
});

const storeCloseTimes = createElement("p", {
  class: "store-closing-time",
});

const map = createElement("iframe", {
  class: "map-location",
  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.41156412518!2d-96.73155255!3d32.82066454999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1683605127072!5m2!1sen!2sus",
  allowfullscreen: "",
  loading: "lazy",
  referrerpolicy: "no-referrer-when-downgrade",
});

mapSvg.setAttribute("class", "map-location-svg");

mapTitleText.innerText = "Address:";

mapAddressText.innerText = "P. Sherman, 42 Wallaby Way, Sydney";

storeCloseTimes.innerText = "Open from Monday To Friday 9am-11pm";

mapAddressContainer.append(
  mapSvg,
  mapTitleText,
  mapAddressText,
  storeCloseTimes
);

// Phone number elements
const phoneNumberSupportElement = createElement("div", {
  class: "phone-support-container",
});
const phoneSupportText = createElement("p", {
  class: "support-title-text",
});
const phoneSupportTextDescription = createElement("p", {
  class: "support-text-description",
});
const phoneSupportNumber = createElement("p", {
  class: "phone-support-number",
});

const supportAgentSvg = createSVG(
  "black",
  "M18.72,14.76C19.07,13.91 19.26,13 19.26,12C19.26,11.28 19.15,10.59 18.96,9.95C18.31,10.1 17.63,10.18 16.92,10.18C13.86,10.18 11.15,8.67 9.5,6.34C8.61,8.5 6.91,10.26 4.77,11.22C4.73,11.47 4.73,11.74 4.73,12A7.27,7.27 0 0,0 12,19.27C13.05,19.27 14.06,19.04 14.97,18.63C15.54,19.72 15.8,20.26 15.78,20.26C14.14,20.81 12.87,21.08 12,21.08C9.58,21.08 7.27,20.13 5.57,18.42C4.53,17.38 3.76,16.11 3.33,14.73H2V10.18H3.09C3.93,6.04 7.6,2.92 12,2.92C14.4,2.92 16.71,3.87 18.42,5.58C19.69,6.84 20.54,8.45 20.89,10.18H22V14.67H22V14.69L22,14.73H21.94L18.38,18L13.08,17.4V15.73H17.91L18.72,14.76M9.27,11.77C9.57,11.77 9.86,11.89 10.07,12.11C10.28,12.32 10.4,12.61 10.4,12.91C10.4,13.21 10.28,13.5 10.07,13.71C9.86,13.92 9.57,14.04 9.27,14.04C8.64,14.04 8.13,13.54 8.13,12.91C8.13,12.28 8.64,11.77 9.27,11.77M14.72,11.77C15.35,11.77 15.85,12.28 15.85,12.91C15.85,13.54 15.35,14.04 14.72,14.04C14.09,14.04 13.58,13.54 13.58,12.91A1.14,1.14 0 0,1 14.72,11.77Z"
);

// Give element value then append
supportAgentSvg.setAttribute("class", "phone-support-icon");
phoneSupportText.innerText = "Phone Number";
phoneSupportNumber.innerText = "(248)-434-5508";
phoneSupportTextDescription.innerText = "Monday Through Friday";
phoneNumberSupportElement.append(
  supportAgentSvg,
  phoneSupportText,
  phoneSupportNumber,
  phoneSupportTextDescription
);

// Email elements
const emailElement = createElement("div", {
  class: "email-container",
});
const emailSupportText = createElement("p", {
  class: "support-title-text",
});
const emailAddressText = createElement("p", {
  class: "email-address-support-text",
});
const emailSupportTextDescription = createElement("p", {
  class: "support-text-description",
});

const emailSupportSvg = createSVG(
  "black",
  "M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
);

// Give element value then append
emailSupportSvg.setAttribute("class", "email-support-icon");
emailSupportText.innerText = `Email`;
emailAddressText.innerText = `example@mail.com`;
emailSupportTextDescription.innerText = `Monday Through Friday`;
emailElement.append(
  emailSupportSvg,
  emailSupportText,
  emailAddressText,
  emailSupportTextDescription
);

// Chatting elements
const chatSupportElement = createElement("div", {
  class: "chat-support-container",
});
const chattingSupportText = createElement("p", {
  class: "support-title-text",
});
const chattingSupportTextDescription = createElement("p", {
  class: "support-text-description",
});

const chattingGifElement = createElement("img", {
  src: chattingGif,
  alt: "a green pepe frog typing on a keyboard casually",
  class: "chatting-gif",
});

// Give element value then append
chattingSupportText.innerText = "Chat Support";
chattingSupportTextDescription.innerText = "24/7 Live Chatting";
chatSupportElement.append(
  chattingGifElement,
  chattingSupportText,
  chattingSupportTextDescription
);

// Append stuff into containers
contactInfoGroup.append(
  contactPageMainText,
  phoneNumberSupportElement,
  emailElement,
  chatSupportElement,
  mapAddressContainer,
  map
);

contactInfoContainer.append(contactInfoGroup);

contactPageContainer.append(contactInfoContainer);

export default function contactPage() {
  main.textContent = "";
  removePageContents();

  main.append(contactPageContainer);
}

/* 
TODO:

- ADD ICONS TO PHONE/EMAIL/CHAT - DONE

- FIND A GOOD BACKGROUND IMAGE

- STYLE STUFF

*/
