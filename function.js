/*
function: block of reusable code.
syntax:
function 'function_Name'()
{
code to execute
return result
}
*/
// reusable code:.


function sum(a,b) //function declaration
{
    console.log(a+b); //function body 
    // return a+b;
}
sum(12,4)//function call

console.log("\nfunction expression")
let result = function sum(a,b)
{
    return a+b;
}
console.log(result(23,5));