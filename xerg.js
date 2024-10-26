console.log("THis is xerg speaking");
const article = document.getElementsByName("articleBody")[0];
console.log("article is " + article);
const heading = document.createElement("h1");
heading.textContent = "Generating summary...";
article.prepend(heading);

var paragraphs = article.getElementsByTagName("p");
console.log("Length of paragraphs: " + paragraphs.length);
console.log("With type" + typeof paragraphs);
const paragraphTextArray = Object.values(paragraphs).map(
  (paragraph) => paragraph.innerText
);
console.log(paragraphTextArray);

for (var i = 0; i < paragraphTextArray.length; i++) {
  const line = document.createElement("p");
  line.textContent = paragraphTextArray[i];
  heading.appendChild(line);
}
