import renderHome from "./render-home";

export default function renderWebsite() {
  const content = document.querySelector("#content");

  const header = document.createElement("div");
  header.classList.add("header");
  createHeader(header);
  content.appendChild(header);

  const main = document.createElement("div");
  main.classList.add("main");
  content.appendChild(main);

  renderHome();
}

function createHeader(header) {
  const homeButton = document.createElement("button");
  homeButton.id = "home-button";
  homeButton.textContent = "Home";
  header.appendChild(homeButton);

  const menuButton = document.createElement("button");
  menuButton.id = "menu-button";
  menuButton.textContent = "Menu";
  header.appendChild(menuButton);

  const contactButton = document.createElement("button");
  contactButton.id = "contact-button";
  contactButton.textContent = "Contact";
  header.appendChild(contactButton);
}
