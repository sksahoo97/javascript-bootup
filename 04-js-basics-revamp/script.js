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

console.log(typeof myName)              // prints string
console.log(typeof nullObj)             // prints object
console.log(typeof undefObj)            // prints undefined
console.log(typeof num)                 // prints number
console.log(typeof hugeInt)             // prints bigint
console.log(typeof sym)                 // prints symbol

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
FAV_PET = "Dogs";                       // gives error: Uncaught TypeError: Assignment to constant variable.
