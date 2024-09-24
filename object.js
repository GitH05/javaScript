// collection of key-value pair
// ***in objext reference are compared not the value***

var person = {
    name:'Santosh',
    city:'Rohini'
}
console.log(person);
console.log("city: ",person.city);


// modify any key :
console.log(person.city="Dhakdhai");

// let key value's be the function:
var person1 = {
    name:'Santosh',
    city:'Rohini',
    intro: function() {
        console.log("Wrinkler "+this.city);
    }
}
console.log(person1.intro());   //we can put a function in value
console.log(person1.intro());

// iterate:
for(var i in person1)
{
    console.log(i + ":" + person1[i]);
}

// for only keys:
console.log("Keys: ",Object.keys(person1));
// for only values;
console.log("Values: ",Object.values(person1));
// for entries:
console.log("Entries:",Object.entries(person1));
// have  || not
console.log(person1.hasOwnProperty("city"))

// destructuring: extract object value and assign to particular variable.
var {name,city}=person1;
console.log(name);
