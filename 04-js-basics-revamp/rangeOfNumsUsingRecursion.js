/**
 * We have defined a function named rangeOfNumbers with two parameters. 
 * The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. 
 * The starting number will always be less than or equal to the ending number. 
 * Your function must use recursion by calling itself and not use loops of any kind. 
 * It should also work for cases where both startNum and endNum are the same.
 */
function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
        return [];
      } else {
        const countArray = rangeOfNumbers(startNum, endNum - 1);
        countArray.push(endNum);
        return countArray;
      }
};

console.log("Printing Range of numbers from 1 and 7: " + rangeOfNumbers(1, 7));
console.log("Printing Range of numbers from 6 and 9: " + rangeOfNumbers(6, 9));
console.log("Printing Range of numbers from 4 and 4: " + rangeOfNumbers(4, 4));