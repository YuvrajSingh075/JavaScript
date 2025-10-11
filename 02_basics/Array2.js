const marvel_heroes = ["IronMan", "Thor", "Spiderman"];
const dc_heroes = ["Superman","flash","wonderWomen"];

marvel_heroes.push(dc_heroes); // push only marge in first arr as a single element of whole arr.
// console.log(marvel_heroes);

const allHeroes = marvel_heroes.concat(dc_heroes); // it connect two arr into a new arr.
// console.log(allHeroes);

const allnewHoroes = [...marvel_heroes, ...dc_heroes] // this spread method to merge all the arras inro a single invidual arr.
// console.log(allnewHoroes);

const anotherArray = [1,2,3,[4,5,6],7,[4,2,[7,8]]];
const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh")); // It convert a string into array.
console.log(Array.from({name: "Hitesh"})); // Intresting Case.-- it will give empty arr.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Returns a new arr from sets of element.

