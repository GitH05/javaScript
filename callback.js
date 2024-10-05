/*
callback is a function or a piece of  code that i spassed as an 
argument to another function:
*/

function processData(data)
{
    console.log("processing....."+data);
}

// another way :
function deleteData(data1)
{
    console.log("deleting..."+data1);
}

// callback by function call:
function getUserData()
{
    processData("Atyush");
}
getUserData();


// callback by passing function:
function getUserData1(methodName)
{
    methodName("Johan");
}
getUserData1(deleteData);

