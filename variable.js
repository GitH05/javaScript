// Var variable : re-declared | can be accessed out of block scope
var a = 10;
console.log("Value of a:", a); // 10

var a = 20;
console.log("Value of a:", a); // 20


// const variable : final variable
const b = 30;
console.log("Value of b:", b); // 30
// const b = 40; // Error: Identifier 'b' has already been declared


// let variable : block-scoped variable
let c = 50;
console.log("Value of c:", c); // 50   
// let c = 60; // Error: Identifier 'c' has already been declared
c = 234;
console.log("Value of c:", c); // 234 reassigned but cant re-declared


// const ---> best practice to use const for variables that won't be reassigned, let for variables that will be reassigned, and avoid using var to prevent scope-related issues.
// let ---> when value needs to be reassigned, use let. It is block-scoped and prevents accidental re-declarations.
// var ---> due to scope issues and potential bugs, it is generally recommended to avoid using var in modern JavaScript development.