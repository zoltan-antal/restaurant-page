export default function renderContact() {
  const main = document.querySelector(".main");
  main.innerHTML = "";

  const title = document.createElement("h1");
  title.textContent = "Contact Us";
  main.appendChild(title);
}
