console.log("THis is xerg speaking");
const article = document.getElementsByName("articleBody")[0];
console.log("article is " + article);
const div = document.createElement("div");
div.style.alignItems = "center";
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.width = "75%";
div.style.marginLeft = "auto";
div.style.marginRight = "auto";
div.style.border = "solid 3px";
const heading = document.createElement("h1");
heading.textContent = "Generating summary...";
heading.style.fontSize = "xx-large";
div.prepend(heading);
article.prepend(div);

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
  for (var i = 0; i < paragraphTextArray.length; i += 4) {
    const line = document.createElement("p");
    var text = paragraphTextArray[i];
    if (i + 1 < paragraphTextArray.length) {
      text += paragraphTextArray[i + 1];
    }
    if (i + 2 < paragraphTextArray.length) {
      text += paragraphTextArray[i + 1];
    }
    if (i + 3 < paragraphTextArray.length) {
      text += paragraphTextArray[i + 1];
    }
    try {
      line.textContent = await summarizer.summarize(text);
      line.style.fontSize = "x-large";
      line.style.marginBottom = "0.9375rem";
      console.log(line.textContent);
      div.appendChild(line);
    } catch (e) {
      console.log(e);
    }
  }
}

xergrush();
