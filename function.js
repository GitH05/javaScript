// simple example:

// call function anywhere Js
greet()
function greet()
{
    console.log("Namaste")
}
// general function call
greet()


// dynamic:
function add(num1, num2)
{
    return num1 + num2;
}
console.log(add(12,34));


// arrow function:

// method 1;
var newAd = function(a,b) {
    console.log("Arrow method")
    console.log(a+b);
}
newAd(34,2)

// method 2:
let multiply = (c,d) => {
    console.log("Mehtod 2");
    return c + d;
}
console.log(multiply(11,2))


// m3:
var square = (x) => x*x;
console.log(square(3))

// spread operator;
function spreadCopy(...nums)    //unknow an=bout the number of argumnet
{
var sum = 0;
for (var i =0;i<nums.length;i++)
{
    sum = sum + nums[i];
}
return sum;
}
console.log("\nSpread Operator functionality:"+spreadCopy(1,5,7,34))
