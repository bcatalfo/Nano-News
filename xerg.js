console.log("THis is xerg speaking");
const article = document.getElementsByName("articleBody")[0];
console.log("article is " + article);
// This is gonna be in a for loop
const summary = document.createElement("p");
summary.textContent = "This is an ai generated bullet point";
article.prepend(summary);
