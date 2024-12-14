// **What is a Variable?**
// A variable is a named container in programming used to store data values that can change during the execution of a program. Variables act as placeholders for data, allowing developers to reference, modify, and use the stored values in their code.

// For example:
var age = 25; // 'age' is a variable storing the value 25



// **Five Things You Need to Declare a Variable**

// 1. A Declaration Keyword In JavaScript, you can use one of three keywords to declare a variable:  

//    var: Used in older JavaScript versions (less commonly used now).  
//    let: Introduced in ES6, for variables with block scope.  
//    const: Also introduced in ES6, for constants that cannot be reassigned.

//    Example:
   var name = "John"; // Using 'let'
   var pi = 3.14;  // Using 'const'


// 2. A Variable Name 

//    The variable name is the identifier used to reference the stored value. Naming rules include:  
//  Must start with a letter, $, or _. 
//  Cannot start with a number.  
//  Cannot use reserved keywords (e.g., `let`, `function`).  
//  Case-sensitive.  

//    Example:
   var myVariable; // Valid name
   var $price;     // Valid name

// 3. An Assignment Operator (=)  

//    The = operator assigns a value to the variable. Without it, the variable is declared but not initialized (its value will be `undefined` until assigned).  

//    Example:
   var city = "Paris"; // Assigning "Paris" to the variable 'city'

// 4. A Value (Optional at Declaration)

//    You can initialize a variable with a value at the time of declaration or leave it undefined for assignment later.  

//    Example:
   var score = 100;  // Initialized with a value
   var count;        // Declared without a value (undefined by default)


// 5. Scope Context

//    Variables need to be declared in an appropriate scope where they will be used:  
//  Global Scope: Accessible throughout the entire program.  
//  Local/Block Scope: Limited to the block or function where declared (e.g., using `let` or `const`).  

//    Example:
   {
       var localVariable = "Only in this block";
       console.log(localVariable); // Accessible
   }
   // console.log(localVariable); // Error: localVariable is not defined



// Summary
// To declare a variable in JavaScript, you need: 

// 1. A declaration keyword (`let`, `const`, `var`).  
// 2. A valid variable name.  
// 3. Optionally, an assignment operator (`=`).  
// 4. Optionally, an initial value.  
// 5. An understanding of its intended scope (global or local).  

// Would you like more examples or further clarification? 😊