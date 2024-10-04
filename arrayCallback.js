/*
Array callback methods are function that can be passed as an
argument to certain methods in JavaScript.
 
-these methods allow you to perfoem operation on array 
elements and manipulate the array in various ways.
*/

// for Each Loop:
const array = [1,2,3];
array.forEach(function(element)
{
    console.log(element+"\n");
})

// OR:

let list = [4,5,6];
list.forEach(process)
function process(i)
{
    console.log(i);
    console.log(i+1);
    console.log(i+"__");
}


// same work with arrow function:
list.forEach((element,index)=>console.log(element,index))