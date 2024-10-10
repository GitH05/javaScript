/*
applies a function to each element of the array accumulating a single unit:
 */

// reduce method:

const number = [2,3,4,5,6,7];
let accu = number.reduce((accumulator,current) => accumulator * current);
console.log(accu);

/* every time accumulator get the updated value of the 
operation and again get operated base on the updated
value.*/