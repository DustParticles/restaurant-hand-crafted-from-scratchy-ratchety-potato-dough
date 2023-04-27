import firstLoad, { contactTab } from "./initial-page-load";
import contactPage from "./contact-tab";

import "./style.css";

firstLoad();

contactTab.addEventListener("click", contactPage);
