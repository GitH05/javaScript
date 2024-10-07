/* moves a variable and function declaration to the top of their scopes.
allowing them to be used before they are actually declared in the code
*/

// hoistingl:


console.log(a); //undefined
var a = 1;


// function hoisting: hoist and used -> success working
sayHello();
function sayHello()
{
    console.log("Hello!");
}


// hoisting of Block:
// Scoped Declared:

console.log(b);
let b =10;

console.log(c);
const c =11;

console.log(d);
var d = 12;