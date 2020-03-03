

// This is a function definition

function AddTwoNumbers(num1, num2) {

    // This is the function body, where the magic happens

    result = num1 + num2;


    // This is the return or output of the function
    return result;

}

var res = AddTwoNumbers(4, 10)
console.log(res);
// Why is nothing happening yet?


// Another way to declare a function and give it a name

var subtractNums = function(num1, num2) {
    result = num1 - num2;
    return result
}

console.log(subtractNums(10, 5))




// Why do this??

let myval = 20;

var f = function(num1, num2) {
    result = num1 * num2;
}

if (myval > 10) {
    f = function(num1, num2) {
        return num1 - num2;
    }
}

console.log(f(myval, 5))


// Callback functions

var myFancyFunction = function(location) {
    if (location === "Ballroom") {
        return "Fancy ";
    }
    return "Not Fancy ";
}

function myParty(location, myfun) {
    return myfun(location) + location + " party"
}

console.log(myParty("house", myFancyFunction));

// The other way to call functions
// Arrow Functions!

var myArrowFunction = (fname, lname) => {
    document.write(fname + " " + lname)
}





