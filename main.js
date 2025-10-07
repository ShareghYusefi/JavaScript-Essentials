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
