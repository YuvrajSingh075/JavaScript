let name = "Hitesh";
let repoCount = 32

console.log(name + repoCount);
console.log(`My nmae is ${name}and my repocount are ${repoCount}`);

const gameName = String('hiteshhc');
console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(4,8);
console.log(anotherString)

const newStringOne = "    hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20chaudhry";

console.log(url.replace('%20', "-"))

console.log(url.includes('hitesh'));