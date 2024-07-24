/*
if(condition)
{
    statement
}
esle {
    staement
}
*/
var day = "sunday";
if(day=="sunday")
{
    console.log("Holiday");
}
else{
    console.log("Academy");
}

// if else if:
let a = 12;
let b = 72;
let c = 9;
console.log("\nComparision between three numbers:",a,b,"and",c);
if(a>b && a>c)
{
    console.log("The Biggest number is:",a);
}
else if(b>c)
{
    console.log("The Biggest number:",b);
}
else
{
    console.log("The Biggest number:",c);
}

//ATM PIN
let pin = 3459;
function Valid()
{
if(pin == 3459)
    {
    console.log("Valid Pin");
    }
else
    {
        console.log("Invalid Pin");
    }
}
Valid()