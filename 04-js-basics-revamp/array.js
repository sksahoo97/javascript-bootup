console.log("\n*********************************");
console.log("Array Basics!");
console.log("*********************************");
console.log("\n");
/*
1] In JS, array can have elements of different types
*/
const myArray = ["Bulls", 23];
console.log("myArray: " + myArray);

/*
2] In JS, multi-dimensional are also supported
*/
const myMultiArray = [["Bulls", 23], ["White Sox", 45]];
console.log("myMultiArray: " + myMultiArray);

/*
3] Unlike strings, the entries of arrays are mutable and can be changed freely,
even if the array was declared with const.
*/
const ourArray = [50, 40, 30];
ourArray[0] = 15;
console.log("outArray: " + ourArray);

/*
4] One way to think of a multi-dimensional array, is as an array of arrays.
When you use brackets to access your array, the first set of brackets refers
to the entries in the outer-most (the first level) array, and each additional
pair of brackets refers to the next level of entries inside.
*/
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];
console.log("subarray: " + subarray);
console.log("nestedSubarray: " + nestedSubarray);
console.log("element: " + element);

/*
5] An easy way to append data to the end of an array is via the push() function.
.push() takes one or more parameters and "pushes" them onto the end of the array.
*/
const arr1 = [1, 2, 3];
arr1.push(4);
console.log("arr1: " + arr1);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
console.log("arr2: " + arr2);

/*
6] Another way to change the data in an array is with the .pop() function.
.pop() is used to pop a value off of the end of an array. We can store this
popped off value by assigning it to a variable.
In other words, .pop() removes the last element from an array and returns that element.
Any type of entry can be popped off of an array - numbers, strings, even nested arrays.
*/
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log("oneDown: " + oneDown);
console.log("threeArr: " + threeArr);

/*
7] pop() always removes the last element of an array. What if you want to remove the first?
That's where .shift() comes in. It works just like .pop(),
except it removes the first element instead of the last.
*/
const ourrArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourrArray.shift();
console.log("ourrArray: " + ourrArray);
console.log("removedFromOurArray: " + removedFromOurArray);

/*
8] Not only can you shift elements off of the beginning of an array,
you can also unshift elements to the beginning of an array i.e. add elements in front of the array.
.unshift() works exactly like .push(), but instead of adding the element
at the end of the array, unshift() adds the element at the beginning of the array.
*/
const sampleArray = ["Stimpson", "J", "cat"];
sampleArray.shift();
sampleArray.unshift("Happy");
console.log("sampleArray: " + sampleArray);

const sampleArray2 = [["John", 23], ["dog", 3]];
sampleArray2.unshift(["Paul", 35]);
console.log("sampleArray2: " + sampleArray2);