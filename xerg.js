console.log("THis is xerg speaking");
const article = document.getElementsByName("articleBody")[0];
console.log("article is " + article);
const div = document.createElement("div");
div.style.alignItems = "center";
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.width = "55%";
div.style.marginLeft = "auto";
div.style.marginRight = "auto";
div.style.border = "solid 3px";
const heading = document.createElement("h1");
heading.textContent = "Generating summary...";
heading.style.fontSize = "xx-large";
heading.style.marginBottom = "1rem";
heading.style.marginTop = ".85rem";
div.prepend(heading);
article.prepend(div);

var paragraphs = article.getElementsByTagName("p");
// TODO: Get rid of "p" elements that arent actually paragraphs from the article
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

  for (var i = 0; i < paragraphTextArray.length; i += 8) {
    // Let's do a loading animation
    const loadingBar = document.createElement("div");
    loadingBar.style.height = "3rem";
    loadingBar.style.backgroundImage =
      "linear-gradient(to right, #fffbef 30%, #f2d068 60%, #fffbef)";
    loadingBar.style.width = "calc(100% - 16px)";
    loadingBar.style.marginBottom = "1rem";
    loadingBar.animate(
      [{ backgroundPosition: "0px 0px" }, { backgroundPosition: "1000px 0px" }],
      {
        duration: 10000,
      }
    );
    div.appendChild(loadingBar);

    const line = document.createElement("p");
    var text = paragraphTextArray[i];
    for (var j = 0; j < 8; j++) {
      if (i + j < paragraphTextArray.length) {
        text += paragraphTextArray[i + j];
      }
    }
    console.log("Text being summarized: " + text);
    try {
      line.textContent = await summarizer.summarize(text);
      line.style.fontSize = "x-large";
      line.style.marginBottom = "0.9375rem";
      line.style.marginLeft = "8px";
      console.log(line.textContent);
      div.replaceChild(line, loadingBar);
    } catch (e) {
      console.log(e);
    }
  }
  heading.textContent = "Summary";
}

xergrush();
