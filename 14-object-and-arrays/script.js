let age = 100;
let age2 = age;
console.log(age, age2);
age2 = 200;
console.log(age, age2);

// Arrays reference back, so the value of the original will change
const players = ["a", "b", "c"];

const team = players;

console.log(players, team);

team[2] = "d";
console.log(players, team);
// We fix it by taking the copy instead

const team2 = players.slice();
team2[2] = "e";

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use ES6 spread
const team4 = [...players];

const team5 = Array.from(players);

//---------------------------------------------------------------//
// With objects
const person = {
    name: "Something",
    age:80
}


const captain = person;
captain.number = 99
console.table(captain)
console.table(person)

const cap2 = Object.assign({},person,{number:99, age:12})
console.table(cap2)

const cap3={...person}

// nested object
const data ={
    name:"me",
    social:{
        fb:"myFB",
        ig:"myIG"
    }
}

// Only does one level deep
const dev = Object.assign({}, data)

dev.name = "notMe"

console.log(dev)

const dev2 = JSON.parse(JSON.stringify(data)) // poor mans deep clode
