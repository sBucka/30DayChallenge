const bands = [
  "Led Zeppelin",
  "Queen",
  "Rush",
  "Pink Floyd",
  "AC/DC",
  "Black Sabbath",
  "The Rolling Stones",
  "Metallica",
  "Iron Maiden",
  "Deep Purple",
  "Guns N' Roses",
  "The Who",
  "Def Leppard",
  "Van Halen",
  "The Midway State",
  "A Skylit Drive",
];
//--------------------
// my code
const bandsList = document.querySelector("#bands");
console.log(bandsList);
const nn = ["A ", "The ", "An "];
const sorted = bands.sort((last, next) => {
  nn.forEach((n) => {
    last = last.replace(n, "");
    next = next.replace(n, "");
  });
  return last > next ? 1 : -1;
});

console.log(sorted);
sorted.forEach((item) => {
  let list = document.createElement("li");
  list.innerHTML = item;
  bandsList.appendChild(list);
});
//--------------------
// Code from tutorial
// He just created a special function
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, "").trim();
}

const alsoSorted = bands.sort((last, next) =>
  strip(last) > strip(next) ? 1 : -1
);

document.querySelector("#bands1").innerHTML = alsoSorted.map(band=>`<li>${band}</li>`).join("")