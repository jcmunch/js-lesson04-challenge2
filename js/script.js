//console.log("Hi!");
//var mainTitle = document.querySelector("h1");
//console.log(mainTitle);
//mainTitle.innerText = "Yay, JavaScript!!";

//var body = document.querySelector("body");
//console.log(body);
//body.style.backgroundColor = "#FEF2F1";

var firstListItem = document.querySelector("ul li");
//console.log(firstListItem);
firstListItem.style.textTransform = "uppercase";

var moreReasons = document.querySelector(".more-reasons");
//console.log(moreReasons);
moreReasons.style.fontSize = "2.5em";

var whyJS = document.querySelector("h3");
//console.log(whyJS);
whyJS.innerHTML = 'Why learn <span class="highlight">JavaScript</span>?';
//console.log(whyJS);
var highlight = document.querySelector(".highlight");
highlight.style.backgroundColor = "#ffff82";

var mainImg = document.querySelector("img");
//console.log(mainImage);
mainImg.src = "img/js-code.png";
mainImg.alt = "JavaScript code example";
