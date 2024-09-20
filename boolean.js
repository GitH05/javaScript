// yes/no or true/false
var a = true;
console.log(typeof(a));

console.log(2=="2") //true-[not check the type]
console.log(2==="2")  //false-[check the type also]

console.table([true && true]);
console.table([true && true && false]);
console.table([true && true || false]);
