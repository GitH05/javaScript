
const age = 25; // number
const name = "John Doe"; // String 
const isStudent = true; // boolean
let value; // undefined

console.log("Age:", age, " | name:", name, " | isStudent:", isStudent, " | value:", value); // 25


// Arithmetic operations
let num1 = 10, num2 = 2 // number
console.log("\nAddition:", num1 + num2); // 30
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Exponentiation:", num1 ** num2);


// Comparison operations
console.log("\nEqual to:", num1 == num2);
console.log("Not equal to:", num1 != num2);
console.log("Strict equal to:", num1 === num2);
console.log("Strict not equal to:", num1 !== num2);

// Logical operations
console.log("\nLogical AND:", num1 > 5 && num2 < 5);
console.log("Logical OR:", num1 > 5 || num2 < 5);
console.log("Logical NOT:", !(num1 > 5));


// Assignment operations
let x = 5;
x += 3;
console.log("\nAssignment (x += 3):", x); // 8
console.log("Assignment (x -= 2):", x -= 2); // 6
console.log("Assignment (x *= 4):", x *= 4); // 24
console.log("Assignment (x /= 3):", x /= 3); // 8
console.log("Assignment (x %= 5):", x %= 5); // 3
console.log("Assignment (x **= 2):", x **= 2); // 9

// Increment and Decrement operations
let y = 5;
console.log("\nIncrement (y++):", y++); // 5 (post-increment)
console.log("Value of y after post-increment:", y); // 6
console.log("Decrement (--y):", --y);
console.log("Value of y after pre-decrement:", y); // 5
console.log("Increment (++y):", ++y); // 6 (pre-increment)
console.log("Decrement (y--):", y--); // 6 (post-decrement)
console.log("Value of y after post-decrement:", y); // 5

// Ternary operator
const isAdult = age >= 18 ? "Yes" : "No";
console.log("\nIs adult:", isAdult); // Yes   
const isMinor = age < 18 ? "Yes" : "No";
console.log("Is minor:", isMinor); // No

// Type coercion
const strNum = "10";
const num = 5;
console.log("\nType coercion (strNum + num):", strNum + num);
// Output: "105" (string concatenation)
console.log("Type coercion (strNum - num):", strNum - num);
// Output: 5 (string is coerced to number for subtraction)  

// Type conversion
const str = "123";
const convertedNum = Number(str);
console.log("\nConverted number:", convertedNum); // 123      
const numToStr = String(num);
console.log("Converted string:", numToStr);