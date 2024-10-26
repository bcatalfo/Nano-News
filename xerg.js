console.log("THis is xerg speaking");
const article = document.getElementsByName("articleBody")[0];
console.log("article is " + article);
const heading = document.createElement("h1");
heading.textContent = "Generating summary...";
// This is gonna be in a for loop
const summary = document.createElement("p");
summary.textContent = "This is an ai generated bullet point";
article.prepend(heading, summary);

const nextLine = document.createElement("p");
nextLine.textContent = "This is the next bullet point";
summary.after(nextLine);
