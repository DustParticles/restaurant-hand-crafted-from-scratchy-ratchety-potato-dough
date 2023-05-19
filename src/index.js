import firstLoad, { homeTab, menuTab, contactTab } from "./initial-page-load";
import loadHomePageContents from "./home-page";
import menuPage from "./menu-tab";
import contactPage from "./contact-tab";

import "./style.css";

firstLoad();

homeTab.addEventListener("click", loadHomePageContents);
menuTab.addEventListener("click", menuPage);
contactTab.addEventListener("click", contactPage);
