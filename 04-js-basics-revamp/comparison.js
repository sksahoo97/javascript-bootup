console.log("\n*********************************");
console.log("Comparison Basics!");
console.log("*********************************");
console.log("\n");

/*
1] In order for JavaScript to compare two different data types (for example, numbers and strings),
it must convert one type to another. This is known as Type Coercion.
Once it does, however, it can compare terms as follows:
*/
console.log("Is 1 == 1 ?: " + (1 == 1));                 // true
console.log("Is 1 == 2 ?: " + (1 == 2));                 // false
console.log("Is 1 == '1' ?: " + (1 == '1'));             // true
console.log("Is \"3\" == 3 ?: " + ("3" == 3));           // true
console.log("\n");

/*
2] Strict equality (===) is the counterpart to the equality operator (==).
However, unlike the equality operator, which attempts to convert both
values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal,
and the strict equality operator will return false.
*/
console.log("Is 3 === 3 ?: " + (3 === 3));               // true
console.log("Is 3 == '3' ?: " + (3 === '3'));            // false
console.log("\n");

/*
3] In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:
*/
console.log("typeof 3: " + typeof 3);                    // number
console.log("typeof '3': " + typeof '3');                // string
console.log("\n");

/*
4] Like the equality operator, the inequality operator will convert data types of values while comparing.
*/
console.log("Is 1 != 2 ?: " + (1 != 2));                 // true
console.log("Is 1 != \"1\" ?: " + (1 != "1"));           // false
console.log("Is 1 != '1' ?: " + (1 != '1'));             // false
console.log("Is 1 != true ?: " + (1 != true));           // false
console.log("Is 0 != false ?: " + (0 != false));         // false
console.log("\n");

/*
5] The strict inequality operator (!==) is the logical opposite of the strict equality operator.
It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa.
The strict inequality operator will not convert data types.
*/
console.log();
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true

/*
6] Like the equality operator, the greater than operator will convert data types of values while comparing.
*/
console.log();
5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false

/*
7] The greater than or equal to operator (>=) compares the values of two numbers.
If the number to the left is greater than or equal to the number to the right, it returns true.
Otherwise, it returns false.

Like the equality operator, the greater than or equal to operator will convert data types while comparing.
*/
console.log();
6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false

/*
8] Like the equality operator, the less than operator converts data types while comparing.
*/
console.log();
2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false

/*
9] Like the equality operator, the less than or equal to operator converts data types.
*/
console.log();
4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false

/*
10] Sometimes you will need to test more than one thing at a time.
The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.
The same effect could be achieved by nesting an if statement inside another if:

11] The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.
*/