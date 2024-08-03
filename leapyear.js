// Import the readline-sync package
const readlineSync = require('readline-sync');

console.log("Check Leap Year");

// Get user input
const yearInput = readlineSync.question("Enter any year: ");

// Check if the input is a valid number
if (isNaN(yearInput) || yearInput.trim() === '') {
    console.log("Invalid input. Please enter a numeric year.");
} else {
    // Convert input to a number
    const year = parseInt(yearInput);

    // Leap year logic
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year, "is a leap year.");
    } else {
        console.log(year, "is not a leap year.");
    }
}
