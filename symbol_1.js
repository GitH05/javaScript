/*
Symbol: a unique and immutable primitive data type intri=oduced in ECMAScript 6(ES6).
-used as an identifier fro object properties naming conflict.
-uniqueness of the symbol ensure that it wont collidde with other property.
-
*/
console.log("Symbol:")
const mySymbol= Symbol("san")
console.log(mySymbol)
//comparing to symbol:

const s1 = Symbol("name");
const s2 = Symbol("name");
console.log("\n",s1==s2)
// //object implementation
// const obj = {

// }
// obj[s1]="dh";
// obj[s2]="san";
// console.log(obj)
// console.log("\n",s1===s2)

console.log("\n");
const s = Symbol("name");
const t = Symbol("name")
//creating object
const san = {}
san.age = 19;
san["gender"] = "male";
san["s"] = "santosh";
san["t"] = "dhawal";
console.log(san);