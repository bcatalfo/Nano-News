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

// Time to do AI
async function xergrush() {
  summarizer = await ai.summarizer.create({
    sharedContext: "An article from the New York Times",
    type: "tl;dr",
    length: "short",
  });

  // TODO add chunking
  for (var i = 0; i < paragraphTextArray.length; i++) {
    const line = document.createElement("p");
    var text = paragraphTextArray[i];
    line.textContent = await summarizer.summarize(paragraphTextArray[i]);
    console.log(line.textContent);
    heading.appendChild(line);
  }
}

xergrush();
