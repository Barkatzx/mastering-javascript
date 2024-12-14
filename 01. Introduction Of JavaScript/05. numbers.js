
// Fundamentals of JavaScript Numbers : In JavaScript, Numbers represent both integer and floating-point values. The JavaScript Number type is used for representing all kinds of numerical values. Understanding how numbers work in JavaScript is essential for efficient programming.

// 1. Number Types in JavaScript : JavaScript has only one numeric type: Number. This type is capable of handling both integers and floating-point numbers.

//02. Number Example 
var age = 25;
var price = 99.99;
var temparature = -12.5;
var pi = 3.14159;

// 3. Special Number Values : JavaScript has several special numeric values:

// Infinity 
var positiveInf = 1/0;
console.log(positiveInf); //Infinity

// -Infinity
var negativeInf = -1/0;
console.log(negativeInf); // -Infinity

// NaN (Not a Number)
var invalidNumber = 0/0;
console.log(invalidNumber); // NaN

// 4. Number Methods and Properties : JavaScript provides several methods to manipulate and work with numbers:

// Number(): Converts other data types (e.g., string, boolean) to a number.
var str = "123";
var num = Number(str);
console.log(num); // 123 (number)

// parseInt(): Converts a string to an integer.
var int = parseInt("123px");
console.log(int); // 123 (number)

// parseFloat(): Converts a string to a floating-point number.
var float = parseFloat("123.45px")
console.log(float); // 123.45 (number)

// toString(): Converts a number to a string.
var num = 100;
var str = num.toString();
console.log(str); //"100" (string)

// toFixed(): Formats a number to a specified number of decimal places.
var num = 123.456789;
console.log(num.toFixed(2)); //123.45

// isNaN(): Checks if the value is NaN.
var result = isNaN("123");
console.log(result); // false

// 5. Number Conversion and Type Coercion : JavaScript automatically converts other types to numbers when needed. This process is called type coercion.

// String to Number 
var str = "45";
var num = +str; // Using the unary plus operator
console.log(num); // 45 (number)

//Boolean to Number
var isActive = true;
var num = +isActive;
console.log(num); // 1

// NaN when coercion fails
var inValid = +"Hello";
console.log(inValid); // NaN