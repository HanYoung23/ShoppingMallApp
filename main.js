"use strict";

const shirtsArray = ["img/blue_t.png", "img/pink_t.png", "img/yellow_t.png"];

const texts = [
  "female, large size",
  "man, small size",
  "man, large size",
  "man, large size",
  "female, small size",
  "male, large size",
  "male, large size",
];

const clothesTextArray = function () {
  texts.forEach(function (item) {
    return item;
  });
};

const element = document.querySelector(".shopping_text");
element.innerHTML = clothesTextArray;
