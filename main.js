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
  "male, small size",
  "female, large size",
  "male, large size",
  "female, large size",
  "female, small size",
  "female, large size",
  "male, large size",
  "female, large size",
  "male, small size",
];

console.log(document.getElementsByClassName("shirts_btn").onclick === true);

const section = document.createElement("section");
section.className = "shoppingList";
document.body.appendChild(section);

// 반복 시작 ------------

function makeUl() {
  const ul = document.createElement("ul");
  ul.className = "listUl";
  section.appendChild(ul);
  if (textsArray.length === 9) {
    var x = 2;
  } else {
    var x = 1;
  }
  for (let i = 0; i < x; i++) {
    for (let i = 0; i < textsArray.length; i++) {
      const li = document.createElement("li");
      const img = document.createElement("img");
      const div = document.createElement("div");

      li.appendChild(img);
      img.src = clothesArray[i];
      img.className = "shopping_img";
      li.appendChild(div);
      div.className = "shopping_text";
      div.appendChild(document.createTextNode(textsArray[i]));

      ul.appendChild(li);
    }
  }
}
makeUl();
