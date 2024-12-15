// 1. AND (&&) : The && operator checks if all conditions are true. If any condition evaluates to false, the entire expression is false.
var a = 5;
var b = 10;

if (a > 0 && b > 0) {
    console.log('Both a and b are positive number');
};

// 2. OR (||) : The || operator checks if at least one condition is true. If all conditions evaluate to false, the entire expression is false.
var a = 5;
var b = 10;

if (a > 0 || b > 0) {
    console.log('At least one number is positive');
};

// 3. NOT (!) : The ! operator negates a condition, i.e., it converts true to false and vice versa.
var isAvailable = false;

if (!isAvailable) {
    console.log('The item is not available');
};

// Combining Multiple Operators
var age = 25;
var hasLicense = true;

if ((age > 18 && age < 65 || hasLicense)) {
    console.log('The person is eligible for drive');
}

// Truthy and Falsy
var userName = "";

if (!userName) {
    console.log('Please enter your name');
}