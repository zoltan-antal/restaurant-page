export default function renderMenu() {
  const main = document.querySelector(".main");
  main.innerHTML = "";

  const title = document.createElement("h1");
  title.textContent = "Menu";
  main.appendChild(title);
}
