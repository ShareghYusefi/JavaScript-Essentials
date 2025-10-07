// Single line comment
/* 
    Multi-line comment
    var is a keyword used to declare or initialize a variable in memory

*/

// Primitive Data Types
// 1. String
var firstname = "John";
console.log(firstname);

// 2. Number
var age = 25;
console.log(age);

// Boolean (true or false)
var isAdult = false;
console.log(isAdult);

// Empty Data Types
// 1. Null - a variable is declared as an empty value
var emptyVariable = null;
console.log(emptyVariable);

// 2. Undefined - a variable is declared but no value has been assigned
var undefinedVariable;
console.log(undefinedVariable);

// Object Data Types - collection of different data types
// Object literal is define by {}
var person = {
  firstname: "Jane",
  lastname: "Doe",
  age: 30,
  isAdult: true,
};
console.log(person);

// Array Objects are defined using [] - zero indexed list of items
var languages = ["Javascript", "Python", "Java"];
// index        [0           ,         1,     2]
console.log(languages);

// Function Data type - block of code that performs a specific task and returns a value
var date = Date();
console.log(date);

// Arithmetic Operators: +, -, *, /, %, ++, --
var x = 10;
var y = 15;
var a = 7;
var b = 3;

console.log("Addition: ", x + y);
console.log("Addition: ", x - y);
console.log("Multiplication: ", a * b);
console.log("Division: ", y / x);

// Modulus Operator (%): return the remainder of a division operation
console.log("Modulus: ", a % b); // remainder should be 1

// Increment Operator (++): increases a value by 1
console.log("Increment x: ", x++); // 10
console.log("After Increment x: ", x); // 11
console.log("Increment x again: ", ++x); // 12

// Decrement Operator (--): decreases a value by 1
console.log("decrement y: ", y--); // 15
console.log("After decrement y: ", y); // 14
console.log("decrement y again: ", --y); // 13

// Compound Assignment Operators: +=, -=, *=, /=, %=
var t = 9;
var p = 11;
var r = 3;
var g = 5;

console.log("+= :", (t += p)); // t = t + p => 20
console.log("-= :", (p -= t)); // p = p - t => -9
console.log("*= :", (r *= g)); // r = r * g => 15
console.log("/= :", (r /= g)); // r = r / g => 3

// Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
// Comparison operators are used to compare two values and return a boolean result (true or false)

// !: not operator
// !=: not equal to, typically used to flip result of a camparison
// ==: equals in only value and not data type
// ===: strict equal in value and data type

var num1 = 10; // number type
var num2 = "10"; // string type
var num3 = 20;
console.log("Equal to: ", num1 == num2); // true since value is equal.
console.log("Strict Equal to: ", num1 === num2); // false since value is equal, but data type is not.
console.log("Not Equal to: ", num1 != num2); // false, value is equal
console.log("Strict Not Equal to: ", num1 !== num2); // true since value is equal, but data type is not.
console.log("Greater than: ", num1 > num2); // false
console.log("Less than: ", num1 < num2); // false
console.log("Greater than or equal to: ", num1 >= num2); // true
console.log("Greater than or equal to: ", num1 <= num2); // true

// Logical Operators: &&, ||, !
// &&: AND operator
// ||: OR operator
// !: Negation operator

console.log("&&: ", num1 == num2 && num1 === num2); // false since one of the conditions returns false

// When using || operator, if first condition is true, the second condition is not checked
console.log("||: ", num3 > num1 || num3 < num2); // true since first condition is true

console.log("&&: ", num1 == num2 && !(num1 === num2)); // true

// Function: block of code that performs a specific task
// Parameters: A placeholder inside a function definition. It acts as a variable for the value that is passed through when the function is called.
// return keyword can be used to exit and return a value from the function

// Function definition
// The function expects two values to be passed to it and assigns them to parameters a and b
function sum(a, b) {
  var result = a + b;

  return result; // will be spit out of the function once called
}

// We store the returned value from a function call in a variable
// The function is called using curly brackets and values
// Arguments: The actual value or variable that contains a value to be passed into the function.
var total1 = sum(20, 15);
console.log(total1);

var total2 = sum(total1, 9);
console.log(total2);

var finalValue = sum(total1, total2);
console.log(finalValue);
