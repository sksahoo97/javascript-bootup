/**
 * You can generate random decimal numbers with Math.random(), but sometimes you need to generate random whole numbers. The following process will give you a random whole number less than 20:
 * 
 * Use Math.random() to generate a random decimal number.
 * Multiply that random decimal number by 20.
 * Use Math.floor() to round this number down to its nearest whole number.
 * 
 * Remember that Math.random() can never quite return a 1, so it's impossible to actually get 20 since you are rounding down with Math.floor(). This process will give you a random whole number in the range from 0 to 19.
 * 
 * Putting everything together, this is what your code looks like:
 * Math.floor(Math.random() * 20);
 * 
 * You are calling Math.random(), multiplying the result by 20, then passing the value to Math.floor() to round the value down to the nearest whole number.
 */

//Below is the function to generate random whole numbers between 0 to 9.
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

console.log("Random Whole Number: " + randomWholeNum());


/**
 * Creating a function called randomRange that takes a range myMin and myMax and 
 * returns a random whole number that's greater than or equal to myMin and 
 * less than or equal to myMax.
 */
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
let myMin = 3;
let myMax = 11;
console.log("Random Whole Number between " + myMin + " and " + myMax + ": " + randomRange(myMin, myMax));
