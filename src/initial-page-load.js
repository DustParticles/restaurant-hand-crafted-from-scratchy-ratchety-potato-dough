const firstLoad = () => {
  const content = document.querySelector("#content");

  const tabGroup = document.createElement("div");
  tabGroup.setAttribute("class", "tab-group");

  const menuTab = document.createElement("button");
  const contactTab = document.createElement("button");

  menuTab.innerText = "Menu";
  contactTab.innerText = "Contacts";

  tabGroup.appendChild(menuTab);
  tabGroup.appendChild(contactTab);

  // Positioning and styling
  content.style.color = "red";

  content.textContent = "WOW";
  content.appendChild(tabGroup);
};
export default firstLoad;
