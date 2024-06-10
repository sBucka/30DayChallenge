const people = [
  { name: "Perkins", year: 1993 },
  { name: "Herrera", year: 1983 },
  { name: "Carr", year: 1996 },
  { name: "Bell", year: 2014 },
  { name: "Yates", year: 1993 },
  { name: "Cohen", year: 2007 },
  { name: "Farmer", year: 1992 },
  { name: "Fleming", year: 1984 },
  { name: "Robinson", year: 1983 },
  { name: "Chandler", year: 1973 },
  { name: "Phillips", year: 2000 },
  { name: "Clark", year: 1980 },
];

const comments = [
  { text: "gtkfvw3rso2krqfy5ga3kue63", id: 155285 },
  { text: "4txdl2o2mke823musx6g7gbr6", id: 323871 },
  { text: "8de4xfbqijkrjpb4i43co61kr", id: 175839 },
  { text: "pi2pn7mb8uj85pgp55k61cmue", id: 882606 },
  { text: "n1b2lw2h2k575kzul79feqtcy", id: 631456 },
  { text: "omzpqzbfwvfwrege5lxlh519q", id: 727040 },
  { text: "w9dej3xwlsyd1u4tpfguv97xt", id: 387264 },
  { text: "ipdht1jj9p3uo7v5d8ero64bi", id: 862342 },
  { text: "nx1o7pqk75lpe733o219yxr5e", id: 468928 },
  { text: "3i33eujqwjloj33mpxhjl1dh6", id: 828733 },
  { text: "j3ddupzclfxf61ccjijqt4okk", id: 685721 },
  { text: "dl474ur9f3kbooe0dkqm3lsdn", id: 170235 },
  { text: "uo9pqyw646mdly7nyqiwrajpt", id: 447198 },
  { text: "v1k7h7wufo725ck0px2g6n3zm", id: 726530 },
  { text: "lw15ysedchu6twh4z4zitjgwo", id: 576069 },
];

const isAdult = people.some(function (person) {
  const currentYear = new Date().getFullYear();
  if (currentYear - person.year >= 19) return true;
});
// to iste ale ináč napísané
const isAdult1 = people.some(
  (person) => new Date().getFullYear() - person.year >= 19
);
console.log(isAdult1);

const allAdult = people.every(
  (person) => new Date().getFullYear() - person.year >= 19
);

console.log(allAdult);

const comment = comments.find((comment) => comment.id === 726530);
console.log(comment);

const index = comments.findIndex((comment) => comment.id === 726530);
console.log(index);


comments.splice(index,1)
console.table(comments)
