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
console.log("Person age: ", person.age);

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

  console.log(result);

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

// String Manipulation
var firstname = "John";
var lastname = "Doe";

// string concatenation - joining two or more strings
var fullname = firstname + " " + lastname;
console.log("Full Name: ", fullname);

// using .concat method/function accessed after period with Ctrl + spacebar
var fullname2 = firstname.concat(" ", lastname);
console.log("Full Name2: ", fullname2);

// using batckticks (template literals)
var fullname3 = `${firstname} ${lastname}`;
console.log("Full Name3: ", fullname3);

// String Methods(functions) & properties(variables)
// 1.length property: returns the character count/length of the string
console.log("Firstname length: ", firstname.length);

// like arrays, strings are zero indexed
// 2. indexOf - return the index of a character in a string
console.log("Index of n: ", firstname.indexOf("n")); // 3

// 3. charAt - returns the index of a character in a string
console.log("charAt of 3: ", firstname.charAt(3)); // n

// 4. toUpperCase - converts a string to uppercase
console.log("Uppercase: ", firstname.toUpperCase());

// Arrays: zero indexed lists of items
// Creating an Array
var cars = ["BMW", "Audi", "Mercedes"];
console.log(cars);

// Array function
var numbers = Array(1, 3, 6, 9);
console.log(numbers);

// Accessing Array Elements is done via arrayVariable[indexValue]
console.log("First Element in cars: ", cars[0]);

// Assigning a new value to an element
cars[0] = "Toyota";
console.log("Updated cars: ", cars);

// Array Methods(functions) & properties (variables)
// 1. length - returns the length of array
console.log("Length of Cars Array: ", cars.length);

// 2. push: add an element to the end of an array
cars.push("Tesla");
console.log("Push Tesla to cars: ", cars);

// 3. unshift adds an element to the begining of an array
cars.unshift("Honda");
console.log("Unshfit Honda to cars: ", cars);

// 4. pop removes the last element from an array
cars.pop();
console.log("Pop Tesla from cars: ", cars);

// 5. shift removes the first element from an array
cars.shift();
console.log("Shift Honda from cars: ", cars);

// 6. sort sort elements in alphabetical or numeric order
cars.sort();
console.log("Sorted cars: ", cars);

// 7. reverse: will reverse the order of elements
cars.reverse();
console.log("Reversed cars: ", cars);

// 8. slice: return a copied portion of an array
var newCars = cars.slice(0, 2); // index 0 to 2 non-inclusive of 2
console.log("New Cars: ", newCars);

// 9a. splice: can be used to remove elements from an array at any position
cars.splice(1, 1);
console.log("Splice Remove: ", cars);

// 9b. splice: can be used to add elements to an array
cars.splice(1, 0, "Ford", "Chevy");
console.log("Splice Add: ", cars);

// 10. map: creates a new array with results from calling a function for every item within the current array
var squaredRootedNumbers = numbers.map(Math.sqrt); // => [1^1/2, 3^1/2, 6^1/2, 9^1/2]
console.log("Squared Rooted Numbers: ", squaredRootedNumbers);

// / 2D Arrays: arrays within arrays
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log("Matrix: ", matrix);
// Accessing first element of first array
console.log("Element 1: ", matrix[0][0]);

// Conditional Statements: used to perform diffrent actions based on given conditions
// 1. if, else if, else
var age = 17;
if (age >= 21) {
  console.log("You can vote in the US");
} else if (age >= 18) {
  console.log("You can drive in the US");
} else {
  console.log("You are too young to vote or drive in the US");
}

// 2. switch statement: look for an value exact match
var day = "Sunday";

switch (day) {
  case "Monday":
    console.log("Start of work week");
    break; // exiting the switch code block
  case "Friday":
    console.log("End of work week");
    break;
  // Fall through case: when no break is used, the next case will be checked against
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;

  default:
    console.log("Midweek day");

    break;
}

// Loops: used to repeat a block of code multiple times
// 1. for loop
var array = [3, 5, 9];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

// 2. while loop: used to repeat a block of code as long as a condition is true
var j = 0;
while (j < 3) {
  console.log("j is: ", j);
  j++; // increment j to avoid infinite loop issues
}

// 3. do while loop: similar to while loop, but the code block is executed at least once before checking the condition
var k = 0;
do {
  console.log("k is: ", k);
  k++; // increment k to avoid infinite loop
} while (k < 3);

// 4. for-in loop: used to iterate over the properties of an object
for (const key in person) {
  // if person does NOT have key
  if (!Object.hasOwn(person, key)) {
    // continue exits current iteration/key within the for in loop
    continue;
  }

  //   key is the property name, person[key] is the value
  console.log(`${key}: ${person[key]}`);
}

// 5. for-of loop: used to iterate over objects like arrays, strings, etc.
for (const language of languages) {
  console.log("Language: ", language); // language is the value of each element in the languages array
}
