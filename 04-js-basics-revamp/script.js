/*
1] JavaScript provides eight different data types which are undefined, null, boolean, 
string, symbol, bigint, number, and object. 

2] null value is of type object in JS.

3] 'null', 'undefined' and 'not defined' are 3 different things in JS 

4] When JavaScript variables are declared, they have an initial value of undefined.
If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number".
If you concatenate a string with an undefined variable, you will get a string of undefined.
*/
var myName = 'Shivshankar';
var nullObj = null;
var undefObj = undefined;
var num = 98;
var hugeInt = BigInt(9007199254740991);
var sym = Symbol('foo');

console.log(typeof myName);             // prints string
console.log(typeof nullObj);            // prints object
console.log(typeof undefObj);           // prints undefined
console.log(typeof num);                // prints number
console.log(typeof hugeInt);            // prints bigint
console.log(typeof sym);                // prints symbol

/* 
5] One of the biggest problems with declaring variables with the 'var' keyword is that you can
easily overwrite variable declarations.
Keyword 'let' was introduced to solve this potential issue with the 'var' keyword.
*/
var camper = "James";
var camper = "David";
console.log(camper);                    // prints David

let newCamper = "James";
//let newCamper = "David";              // gives error: Uncaught SyntaxError: Identifier 'camper' has already been declared

/*
6] you can also declare variables using the 'const' keyword.
'const' has all the awesome features that 'let' has, with the added bonus that
variables declared using 'const' are read-only.
They are a constant value, which means that once a variable is assigned with 'const', it cannot be reassigned.
*/
const FAV_PET = "Cats";
//FAV_PET = "Dogs";                     // gives error: Uncaught TypeError: Assignment to constant variable.
console.log(FAV_PET);

/*
7] String values in JavaScript may be written with single or double quotes,
as long as you start and end with the same type of quote. Unlike some other programming languages,
single and double quotes work the same in JavaScript.
*/
const doubleQuoteStr = "This is a string";
console.log(doubleQuoteStr);
const singleQuoteStr = 'This is also a string';
console.log(singleQuoteStr);

/*
8] Bracket notation is a way to get a character at a specific index within a string.
Most modern programming languages, like JavaScript, don't start counting at 1 like humans do.
They start at 0. This is referred to as Zero-based indexing.
*/
const firstName = "Charles";
const firstLetter = firstName[0];
console.log("firstLetter: " + firstLetter);

/*
9] In JavaScript, String values are immutable, which means that they cannot be altered once created.
For example, the following code will produce an error because the letter B in the string Bob cannot be
changed to the letter J:
*/
let myStr = "Bob";
myStr[0] = "J";
console.log("myStr: " + myStr)

/*
Note that this does not mean that myStr could not be re-assigned.
The only way to change myStr would be to assign it with a new value, like below:
*/
let myStrr = "Bob";
myStrr = "Job";
console.log("myStrr: " + myStrr);

/*
10] In JS, array can have elements of different types
*/
// const myArray = ["Bulls", 23];
// console.log("myArray: " + myArray);

// /*
// 11] In JS, multi-dimensional are also supported
// */
// const myMultiArray = [["Bulls", 23], ["White Sox", 45]];
// console.log("myMultiArray: " + myMultiArray);

// /*
// 12] Unlike strings, the entries of arrays are mutable and can be changed freely,
// even if the array was declared with const.
// */
// const ourArray = [50, 40, 30];
// ourArray[0] = 15;
// console.log("outArray: " + ourArray);

// /*
// 13] One way to think of a multi-dimensional array, is as an array of arrays.
// When you use brackets to access your array, the first set of brackets refers
// to the entries in the outer-most (the first level) array, and each additional
// pair of brackets refers to the next level of entries inside.
// */
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [[10, 11, 12], 13, 14]
// ];

// const subarray = arr[3];
// const nestedSubarray = arr[3][0];
// const element = arr[3][0][1];
// console.log("subarray: " + subarray);
// console.log("nestedSubarray: " + nestedSubarray);
// console.log("element: " + element);

// /*
// 14] An easy way to append data to the end of an array is via the push() function.
// .push() takes one or more parameters and "pushes" them onto the end of the array.
// */
// const arr1 = [1, 2, 3];
// arr1.push(4);
// console.log("arr1: " + arr1);

// const arr2 = ["Stimpson", "J", "cat"];
// arr2.push(["happy", "joy"]);
// console.log("arr2: " + arr2);

// /*
// 15] Another way to change the data in an array is with the .pop() function.
// .pop() is used to pop a value off of the end of an array. We can store this
// popped off value by assigning it to a variable.
// In other words, .pop() removes the last element from an array and returns that element.
// Any type of entry can be popped off of an array - numbers, strings, even nested arrays.
// */
// const threeArr = [1, 4, 6];
// const oneDown = threeArr.pop();
// console.log("oneDown: " + oneDown);
// console.log("threeArr: " + threeArr);

// /*
// 16] pop() always removes the last element of an array. What if you want to remove the first?
// That's where .shift() comes in. It works just like .pop(),
// except it removes the first element instead of the last.
// */
// const ourrArray = ["Stimpson", "J", ["cat"]];
// const removedFromOurArray = ourrArray.shift();
// console.log("ourrArray: " + ourrArray);
// console.log("removedFromOurArray: " + removedFromOurArray);

// /*
// 17] Not only can you shift elements off of the beginning of an array,
// you can also unshift elements to the beginning of an array i.e. add elements in front of the array.
// .unshift() works exactly like .push(), but instead of adding the element
// at the end of the array, unshift() adds the element at the beginning of the array.
// */
// const sampleArray = ["Stimpson", "J", "cat"];
// sampleArray.shift();
// sampleArray.unshift("Happy");
// console.log("sampleArray: " + sampleArray);

// const sampleArray2 = [["John", 23], ["dog", 3]];
// sampleArray2.unshift(["Paul", 35]);
// console.log("sampleArray2: " + sampleArray2);


//Use Conditional Logic with If Statements