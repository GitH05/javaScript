/*
Siwtch(expression)
{
    case value1:
    statement;
    break;

    case value2:
    statement;
    break;


    default:
    statement;
}
*/
var day = "tuesday";
switch(day)
{
    case "sunday":
        console.log('off');
        break;
    case "monday":
        console.log("class");
        break;
    default:
        console.log("Invalid");
}

/**
length and breadth of the solids, finding area of the solids using switch case: 
 */
let Shape = "circle";
let length = 4;
let breadth = 6;
let radius = 5;
let area;
switch(Shape)
{
    case "circle":
        area = 3.14 * radius;
        console.log("Area of the circle:",area.toFixed(3));
        break;
    case "rectangle":
        area = length * breadth;
        console.log("Area of the rectangle:",area);
        break;
    default:
        console.log("Invalid !");

}