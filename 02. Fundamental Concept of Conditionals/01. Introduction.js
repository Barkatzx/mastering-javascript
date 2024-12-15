// Conditionals in JavaScript allow you to execute different blocks of code based on whether certain conditions evaluate to true or false. They are essential for adding logic and decision-making capabilities to your programs.

// Comparison Operators for Conditionals

// 01. Common operators used in conditions include:

// • Equality: ==, ===;
// • Inequality: !=, !==;
// • Greater/Less than: >, <;
// • Greater/Less than or equal to: >=, <=;

// 02. Logical Operators for Compound Conditions

// • AND (&&): Both conditions must be true.
// • OR (||): At least one condition must be true.
// • NOT (!): Inverts the condition's value.

// Key Conditional Statements in JavaScript

// 01. (if) Statement
// Executes a block of code if a specified condition evaluates to true.

var age = 20;
if (age >= 18) {
    console.log('You are eligible for vote');
}

// 02. (if-else) Statement
// Executes one block of code if the condition is true and another block if the condition is false.

var age = 16;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}


// 03. (else if) Statement
// Specifies a new condition to test if the first condition is false.

var score = 75;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}


// 04. (switch) Statement
// Evaluates an expression and executes code that matches a specific case.

var day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the work week.");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("Midweek hustle!");
}
