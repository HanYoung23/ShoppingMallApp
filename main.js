"use strict";

var shirtsArray = ["img/blue_t.png", "img/pink_t.png", "img/yellow_t.png"];

var skirtArray = ["img/blue_s.png", "img/pink_s.png", "img/yellow_s.png"];

var pantsArray = ["img/blue_p.png", "img/pink_p.png", "img/yellow_p.png"];

var blueArray = ["img/blue_t.png", "img/blue_s.png", "img/blue_p.png"];

var pinkArray = ["img/pink_t.png", "img/pink_s.png", "img/pink_p.png"];

var yellowArray = ["img/yellow_t.png", "img/yellow_s.png", "img/yellow_p.png"];

var clothesArray = [
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

var textsArray = [
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

// section 생성--------------------------------------
const section = document.createElement("section");
section.className = "shoppingList";
document.body.appendChild(section);
// ul + li 반복--------------------------------------
var originalFunction = function () {
  const ul = document.createElement("ul");
  ul.className = "listUl";
  section.appendChild(ul);
  if (textsArray.length === 9 && clothesArray.length === 9) {
    var x = 2;
  } else {
    var x = 1;
  }
  for (let i = 0; i < x; i++) {
    for (let i = 0; i < clothesArray.length; i++) {
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
};
originalFunction();

// 버튼 클릭 이벤트 ----------------------------

var buttonArray = [
  ".shirts_btn",
  ".pant_btn",
  ".skirt_btn",
  ".blue_btn",
  ".pink_btn",
  ".yellow_btn",
];
var buttonMenuArray = [
  "shirtsArray",
  "pantsArray",
  "skirtArray",
  "blueArray",
  "pinkArray",
  "yellowArray",
];
document.querySelector(".shirts_btn").onclick = function btnclicked() {
  chooseClothes(shirtsArray);
};
document.querySelector(".pant_btn").onclick = function btnclicked() {
  chooseClothes(pantsArray);
};
document.querySelector(".skirt_btn").onclick = function btnclicked() {
  chooseClothes(skirtArray);
};
document.querySelector(".blue_btn").onclick = function btnclicked() {
  chooseClothes(blueArray);
};
document.querySelector(".pink_btn").onclick = function btnclicked() {
  chooseClothes(pinkArray);
};
document.querySelector(".yellow_btn").onclick = function btnclicked() {
  chooseClothes(yellowArray);
};

function chooseClothes(btnclick) {
  document.querySelector("ul").remove();
  clothesArray = btnclick;
  originalFunction();
}
