console.log("\n*********************************");
console.log("Function Basics!");
console.log("*********************************");
console.log("\n");

/*
1] In JavaScript, we can divide up our code into reusable parts called functions.
You can call or invoke this function by using its name followed by parentheses, like this: functionName();
*/
function reusableFunction() {
    console.log("Hi World");
}

console.log("Output from reusableFunction:");
reusableFunction();

/*
2] Variables which are declared without the let or const keywords are automatically created
in the global scope. This can create unintended consequences elsewhere in your code or
when running a function again. You should always declare your variables with let or const.
*/

/*
3] It is possible to have both local and global variables with the same name.
When you do this, the local variable takes precedence over the global variable.
*/
const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = "Sweater";
  return outerWear;
}

console.log("Output from myOutfit: " + myOutfit());
