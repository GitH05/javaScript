// Reusable block of code designed to perform specific task

function fun() {
    console.table("Welcome to JS function!");
}
fun();  // function called

// paramitarized function
function fun1(name) {
    console.log("Hello " + name + " Welcome to JS fun!")
}
fun1("Harish");

// Arrow function ---> highly used
const arrowFun = () => {
    console.log("Arrow function is a simple approached!");
}
arrowFun();

// Function with default set parameter
function fun2(name = "Kasa") {
    console.log("Hello " + name);
}
fun2(); // act as default and take the default parameter set in the function
fun2("sana");   // if parameter is passed then it will act based on the parameter

// anonymous function
const anonymousFunc = function (noName) {
    console.log("Hello `" + noName + "` Welcome to Anonymous function!");
}
anonymousFunc("Cypher");


// callback function
function user(names, callback) {
    console.log(names);
    callback();
}

user("Kanak", () => {
    for (let i = 0; i <= 3; i++) {
        console.log("callback function executed later !");
    }
    console.log("CallbackFunction!!")
});