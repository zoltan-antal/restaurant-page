import Logo from "./spaghetti-emoji-clipart.png";

export default function renderHome() {
  const main = document.querySelector(".main");
  main.innerHTML = "";

  const title = document.createElement("h1");
  title.textContent = "Perfect Pasta Place";
  main.appendChild(title);

  const image = document.createElement("img");
  image.src = Logo;
  main.appendChild(image);

  const slogan = document.createElement("h2");
  slogan.textContent = "We believe that freshly made pasta is the best";
  main.appendChild(slogan);

  const testimonial = document.createElement("div");
  testimonial.classList.add("testimonial");
  const testimonialQuote = document.createElement("p");
  testimonialQuote.textContent = "\"The best pasta I've ever eaten. It's true.\"";
  testimonial.appendChild(testimonialQuote);
  const testimonialAuthor = document.createElement("h6");
  testimonialAuthor.textContent = "Mario";
  testimonial.appendChild(testimonialAuthor);
  main.appendChild(testimonial);
}
