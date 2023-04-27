import removePageContents from "./removeContents";
import { main } from "./initial-page-load";

const phoneNumberElement = document.createElement("div");

const emailElement = document.createElement("div");
const feedbackElement = document.createElement("div");

const phoneNumber = "(248)-434-5508";
const email = `example@mail.com`;

export default function contactPage() {
  console.log(main);
  main.textContent = "";
  console.log(main.textContent);
  removePageContents();
  main.append(phoneNumberElement, emailElement, feedbackElement);
}
