/* Variable: container that store values.
 -case sensitive
 -keyword not aloowed
 -Not start with number/.
 */
var number = 333
console.table([number])
console.log("Simple:",number)


/*DataType:Defines the type of values that a variable can hold.

1.Primitive:[string,number,bool,undefined,null,Bigint,symbol]
-number: numeric values
-string: sequence of character anclosed in double/single quote
-bool: represent logical entity with two values true/false
-undefined: represent the absence of a value/ an undefined variable
-null: represent the absence of the value
-Bigint: Store a large integer
-symbol: represent unique and immutable identifier
2.Object DataType:[object,array,Date]
*/
var number = 5;
console.log("nummber:",number);
var string = "Santosh";
console.log("string: ",string);
var bool = true;
console.log("Sun rise in the East:",bool);
var undefined;
console.log("Undefined;",undefined);
var nul = null;
console.log("Null:",nul);
var Bigint = 12345678098765432348876543986523875;
console.log("BigInt:",Bigint);
var symbol = Symbol("santosh");
console.log(symbol);
console.log(typeof(symbol));

// convert number to string;
console.log("\nNumber two string:",(number));
console.log("type:",typeof(String(number)));

// parseInt: convert into integer
// parseFloat: convert into floating point number
var a="10.43";
const b = parseInt(a);
console.log("\n"+b);
console.log(parseFloat("asd"));
console.log(parseInt(14.6));
console.log(isNaN("asd\n"));

if(NaN == NaN)
{
    console.log("true");
}
else{
    console.log("false");
}

// Tricky:
console.log("\nCoercion and Concatenation:\t");
console.log(10 - "20");//coercion:implicit-> string converted into number
console.log(10 + "20")//concatenation: attach the two values (string + number = concate -> string)

/*
Expression: combination of the variables/operand and the operators that do computation.
OPERATOR: Special symbols used in scripts to perform operations on operand.
-Assignment Operator: {=} -> only assign a value to a variable.
-Arithmetic Operator: {+,-,*,/,%}
-Comparision Operator: {<,>,<=,>=}
-Logical Operator: {&,||,!,^}
-Ternary/Conditional Operator: {?}->[condition ? ExpressionIfTrue : ExpressionIfFalse]
-Unary Operator: {}
-Type Operator: {}


*/
console.log(0.1 + 0.2);//==0.30000000000000004->becaise of the binary conversion
// to avoid use a method: toFixed
sum = 0.1 + 0.2;
console.log(sum.toFixed(2));//provide only two decimal
console.log(0.2 + 0.2);//0.4 

// assignment:
console.log(5===a);//-> it check the value as well as the datetype of the values:
console.table([5==5])//-> it only check the value equivalence: 
// 
let l="1"
let f=1;
console.log(f==l); //only check the values:
console.log(f===l); //check the values aand the datatype as well
// 
console.log("\nTernary operator:");
var age = 18;
var res = age >= 18 ? "Yes" : "No";
console.log(res);
// 
console.log(1 < 12 < 5);//1 < 12 = true = 1, therefore 1 < 5 = true
