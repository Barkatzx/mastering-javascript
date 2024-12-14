// In JavaScript, data types are divided into two categories: Primitive and Non-Primitive (also known as Reference types).

// Primitive Data Types : These data types are immutable (cannot be altered) and are directly assigned by their value. When a primitive value is assigned to a variable, the value is stored directly in that variable.

// 01. String : Represents sequences of characters, "Hello", "JavaScript".

var name = "John Doe";
var greeting = "Hello World";

// 02. Number : Represents both integer and floating-point numbers. 

var age = 24;
var number = 60;
var pi = 3.14159;
var hex = 0xFF; //Hexadecimal Number

// 03. Boolean : Represents a logical value, either true or false.

var isActive = True;
var isAvailable = false;

// 04. Undefined : Represents a variable that has been declared but not assigned a value.

var something; //not assign value
var number;

// 05. null : Represents the intentional absence of any value.

var person = null;
var number = null; // absence of value

// Non-Primitive (Reference) Data Types: Non-primitive data types are mutable (can be changed), and when they are assigned to a variable, the variable holds a reference to the object rather than the actual value.

// 01. Object : Represents a collection of key-value pairs (properties and methods).

var person = {
    name: "Alice",
    age: 25,
    country: "USA",
}

// 02. Array : Represents an ordered collection of values, which can be of any data type.

var fruits = ["apple", "banana", "cherry", "mango"]

// 03. Function : A block of reusable code designed to perform a specific task.

function sum(a, b) {
    return a + b;
}
console.log(sum(4,4)); //8