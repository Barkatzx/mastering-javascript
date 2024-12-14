//Rules for Naming Variables

//01. No Reserved Keywords: Do not use JavaScript keywords as variable names

// Invalid
var var = "John Doe";
var if = false;

// Valid
var name = "John Doe"
var isActive = false;

// 02. Start with a letter, underscore (_), or dollar sign ($): A variable name must begin with one of these characters. It cannot begin with a number.

// Invalid
var 123abc = 25;
var @var = "John";

// Valid
var abc123 = 25;
var fullName = "John Doe";

// 03. Can include numbers after the first character: You can use numbers, but not at the beginning.

// Invalid
var 1name = "John";
var 1number = 2;

// Valid 
var name1 = "John";
var number1 = 26;

// 04. Case Sensitivity: JavaScript is case-sensitive. myVariable, MyVariable, and MYVARIABLE are considered different variables.

// 05. No Spaces: Variable names cannot contain spaces. Use camelCase or underscores to separate words.

// Invalid 
var full name = "john Doe";

// Valid 
var fullName = 'John Doe';

// Best Practices for Variable Naming

// 01. Camel Case: Use camelCase (start with a lowercase letter and capitalize subsequent words) for variable and function names.
var fullName = "John Doe";

// 02. Pascal Case: Use PascalCase (capitalize every word, including the first one) for class names.
var FullName = "John Doe";

// 03. Snake Case: Snake_case (use underscores to separate words) is often used in some projects or for naming constants.
var user_id = 2555;

// 04. Descriptive Names: Choose descriptive and meaningful names that clearly indicate the purpose of the variable.
var totalAmount = 500;

// 05. Avoid Single Character Variables: Avoid using single characters for variables, except for loops or temporary variables.
var x  = 34;

// 06. Avoid Using Similar Variable Names: Try to avoid variables that are similar to each other in naming unless they're meant to represent a similar concept.
var customerAge = 24;
var customerAge = 50;
