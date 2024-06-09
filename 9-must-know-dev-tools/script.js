const dogs = [
  { name: "Bruno", age: 2 },
  { name: "Brunotelo", age: 3 },
];

const p = document.querySelector("p");

function makeGreen() {
  p.style.color = "#BADA55";
  p.style.fontSize = "2rem";
}

console.log("Sup");
console.log("Sup %s", "you");

console.log("%c Custom", "background:red;");

console.warn(":(");
console.error(":o");
console.info("info");

console.assert(2 === 1, "WRONG");

console.dir(p);

dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`This is ${dog.name} and his age is ${dog.age}`);
  console.log(`This is ${dog.name} and is ${dog.age * 7} in human years`);
  console.groupEnd(`${dog.name}`);
});

console.count();
console.count();
console.count();
console.count();
console.count();

console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

console.table(dogs);
