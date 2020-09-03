"use strict";

const shirtsArray = ["img/blue_t.png", "img/pink_t.png", "img/yellow_t.png"];

const skirtArray = ["img/blue_s.png", "img/pink_s.png", "img/yellow_s.png"];

const pantsArray = ["img/blue_p.png", "img/pink_p.png", "img/yellow_p.png"];

const clothesArray = [
  "img/blue_t.png",
  "img/pink_t.png",
  "img/yellow_t.png",
  "img/blue_s.png",
  "img/pink_s.png",
  "img/yellow_s.png",
  "img/blue_p.png",
  "img/pink_p.png",
  "img/yellow_p.png",
];

const textsArray = [
  "female, large size",
  "man, small size",
  "man, large size",
  "man, large size",
  "female, small size",
  "male, large size",
  "male, large size",
  "female, large size",
  "man, small size",
];

var section = document.createElement("section");
section.className = "shoppingList";
document.body.appendChild(section);

var ul = document.createElement("ul");
ul.className = "listUl";
section.appendChild(ul);

var li = document.createElement("li");
ul.appendChild(li);

var img = document.createElement("img");
img.className = "shopping_img";
img.alt = "";
li.appendChild(img);

var div = document.createElement("div");
div.className = "shopping_text";
li.appendChild(div);

function listmaker() {
  for (let i = 0; i < clothesArray.length; i++) {
    li[i];
    img[i];
    div[i];
    const imgIndex = document.getElementsByTagName("img")[i].src;
    imgIndex = clothesArray[i];
    const textIndex = document.getElementsByTagName("div")[i].innerHTML;
    textIndex = textsArray[i];
    console.log(li);
  }
}
listmaker();

console.log(section);
