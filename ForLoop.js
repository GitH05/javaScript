/*
For Loop:

Syntax:
for(initializer;condition;iterartion)
{
    statement
}
 */
let i;
for(i=0;i<10;i++)
{
    console.log(i);
}
// 
console.log("\nSum of number from 1-10");
let j;
sum = 0;
for(j=0;j<=10;j++)
{
    sum = sum + j;
    console.log(sum);//sum of each number one by one sequentially:
}
console.log("\nLast Update:"+sum);//only return the last update