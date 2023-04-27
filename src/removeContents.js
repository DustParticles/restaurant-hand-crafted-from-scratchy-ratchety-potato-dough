import { main } from "./initial-page-load";

export default function removePageContents() {
  // Clear all children elements
  document.querySelector("#content > main").textContent = "";
}
