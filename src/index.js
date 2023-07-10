import "./style.css";
import renderWebsite from "./render-website";
import renderHome from "./render-home";
import renderMenu from "./render-menu";
import renderContact from "./render-contact";

renderWebsite();

const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const contactButton = document.querySelector("#contact-button");

homeButton.addEventListener("click", renderHome);
menuButton.addEventListener("click", renderMenu);
contactButton.addEventListener("click", renderContact);
