console.log("THis is xerg speaking");
const article = document.getElementsByName("articleBody")[0];
console.log("article is " + article);
const heading = document.createElement("h1");
heading.textContent = "Generating summary...";
article.prepend(heading);

for (var i = 0; i < 5; i++) {
  const line = document.createElement("p");
  line.textContent =
    "Generating a bullet point from a chunk of paragraphs number" + i;
  heading.appendChild(line);
}
