// The if-else condition is a fundamental control structure in programming that allows you to execute a block of code if a specified condition is true, and a different block of code if the condition is false. This is useful for decision-making and controlling the flow of a program.

// Syntax of If-Else Condition
if (condition) {
    //execute if condition is true
} else {
    // Otherwise execute if condition is false
}

// Example of If-Else 
var age = 16;
if (age >= 18) {
    console.log('You are eligible for vote');
} else {
    console.log('You are not eligible for vote');
}

// Example with Logical Operators
var temperature = 30;

if (temperature > 25) {
    console.log("It's warm outside.");
} else {
    console.log("It's cool outside.");
}

// Example with Nested Conditions:
var time = 20; // 24-hour format

if (time < 12) {
    console.log("Good morning!");
} else {
    if (time < 18) {
        console.log("Good afternoon!");
    } else {
        console.log("Good evening!");
    }
}

// Validating User Input:
var password = "12345";

if (password.length >= 8) {
    console.log("Password is valid.");
} else {
    console.log("Password must be at least 8 characters long.");
}

// Calculating Discounts
var purchaseAmount = 120;

if (purchaseAmount > 100) {
    console.log("You get a 10% discount!");
} else {
    console.log("No discount available.");
}

