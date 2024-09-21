// if statement:
var age = 49;
if(age >= 18 && age <= 40) {
    console.log("eligible");
}
else if(age > 40) {
    console.log(`You are too old "Not Eligible!"`);
}
else {
    console.log("Not Eligible !")
}


// loop [for, while, do while]
for(var i = 0; i < 1; i++)
{
    console.log(`The 'Arnold'`)
}

// infinite loop
// for(;;)
// {
//     console.log("Hey");
// }





// do while
var i =1;
do {
    console.log("Human");
    i++;
}
while(i<3)



// switch
var day = "tuesday";
switch(day)
{
    case "sunday":
        console.log("rest");
        break;
    case "tuesday":
        console.log("workout");
        break;
    default:
        console.log("Invalid day")
        break;
}