// if condition
let age = 20;
if (age >= 18) { 
    console.log("You are eligible to vote.");
}


// if-else condition
let marks = 75;
if (marks >= 50) {
    console.log("\nYou have passed the exam.");
}
else {
    console.log("You have failed the exam.");
}

// if-else else condition
let score = 85;
if (score >= 90) {
    console.log("\nGrade: A");
}
else if (score >= 80) {
    console.log("Grade: B");
}
else {
    console.log("Grade: C");
}

console.log("\n");

// switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}