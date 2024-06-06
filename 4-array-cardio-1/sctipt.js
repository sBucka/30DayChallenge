const inventors = [
  { first: "Albert", last: "Einstent", year: 1879, passed: 1955 },
  { first: "Albert1", last: "Einstent", year: 1779, passed: 1955 },
  { first: "Albert2", last: "Einstent", year: 1679, passed: 1955 },
  { first: "Albert3", last: "Einstent", year: 1579, passed: 1955 },
  { first: "Albert4", last: "Einstent", year: 1479, passed: 1955 },
  { first: "Albert5", last: "Einstent", year: 1379, passed: 1955 },
  { first: "Albert6", last: "Einstent", year: 1279, passed: 1955 },
];

const people = [
  "Georgia, Castillo",
  "Steven, Morris",
  "Lizzie, Wise",
  "Ricardo, Miller",
  "Cody, Hanson",
  "Ray, Erickson",
  "Christine, Lowe",
  "Georgia, Hampton",
  "Jimmy, Abbott",
  "Leroy, Douglas",
  "Myra, Neal",
  "Sean, Salazar",
  "Edward, Barnes",
  "Julia, Arnold",
  "Francisco, Medina",
  "Herbert, Hubbard",
  "Caroline, Nash",
  "Willie, Vargas",
  "Ray, Clarke",
  "Mattie, Clarke",
  "Lillie, Hammond",
  "Nathan, Conner",
  "Leonard, Hughes",
  "Chester, Mullins",
  "Keith, Hampton",
  "Edgar, Byrd",
  "Delia, Owen",
  "Ophelia, Wagner",
  "Kenneth, Shaw",
  "Floyd, James",
  "Gene, Hale",
  "Darrell, Rodgers",
  "Earl, Gibbs",
  "Ellen, Green",
  "Billy, Burton",
  "Angel, Alexander",
  "Jesse, Waters",
  "Jacob, Singleton",
  "Jean, Cunningham",
  "Jayden, Nguyen",
  "Sam, Daniels",
  "Nancy, McDonald",
  "Sara, Pope",
  "Miguel, Walker",
  "Marian, Sullivan",
  "Etta, Pope",
  "Scott, Hernandez",
  "Bernice, Stone",
  "Pearl, Perez",
  "Bernice, Goodman",
  "Albert, Harvey",
  "Harry, Porter",
  "Maurice, Santos",
  "Benjamin, Townsend",
  "Lucinda, Collins",
  "Laura, Chambers",
  "Katie, Williamson",
  "Florence, Roberts",
  "Sarah, Colon",
  "Lucy, Peters",
  "Joshua, Blair",
  "Sam, Webb",
  "Ann, Norman",
  "Alejandro, Wood",
  "Derek, Francis",
  "Helena, Gutierrez",
  "Frederick, Patton",
  "Samuel, Spencer",
  "Jorge, Castro",
  "Mabelle, Manning",
  "Jeffrey, Freeman",
  "Tommy, Edwards",
  "Eula, Martin",
  "Robert, Ross",
  "Jeff, Guzman",
  "Chris, Hanson",
  "Daisy, Martinez",
  "Roxie, Carr",
  "Bryan, Banks",
  "Leila, Sanders",
  "Harriett, Silva",
  "Birdie, Allison",
  "Lucy, Maxwell",
  "Evan, Aguilar",
  "Polly, Jensen",
  "Noah, Webster",
  "Edith, Schneider",
  "Edna, Gregory",
  "Joel, Gross",
  "Luis, Mitchell",
  "Annie, Hampton",
  "Olive, Jensen",
  "Jose, Black",
  "Julian, Murphy",
  "Landon, Ramsey",
  "Susan, Erickson",
  "Stanley, Rodriguez",
  "Katherine, Patterson",
  "Grace, Franklin",
  "Phillip, Tyler",
  "Gabriel, Burns",
];

// filter
// filter people that were born in 1500s
const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.table(fifteen);

// map
// Give  us an array of the inventory first and alst names
const fullNames = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
console.log(fullNames);

// sort
// birthyear

const birthYear = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(birthYear);

// reduce
// how long they lived
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);

// sort the inventors by  years they lived

const oldest = inventors.sort((a, b) => {
  const livedA = a.passed - a.year;
  const livedB = b.passed - b.year;

  return livedA > livedB ? -1 : 1;
});
console.table(oldest);

// list of  boulevards in Paris that contain "de" anywhere in the name
// https://en.wikipedia.org/wiki/category:Boulevards_in_Paris

//const category = document.querySelectorAll(".mw-category")
//const links = Array.from(category.querySelectorAll("a"));
//
//const de = links.map(link => link.textContent).filter(streetName => streetName.includes("de"))

// sort
// sort people alphabetically by last name
const sortedAlpha = people.sort((last, next) => {
  const [aName, aSurname] = last.split(", ");
  const [bName, bSurname] = next.split(", ");
  return aSurname > bSurname ? 1 : -1;
});

console.log(sortedAlpha);

// reduce
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "car",
  "car",
  "truck",
  "truck",
  "truck",
  "bike",
  "bike",
  "bike",
  "bike",
  "bike",
  "bike",
  "bike",
];
const transport = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  console.log(item);
  return obj;
}, {});

console.log(transport)