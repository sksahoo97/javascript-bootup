/**
 * The keyword let is not the only new way to declare variables. In ES6, you can also declare variables using the const keyword.
 * const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, 
 * which means that once a variable is assigned with const, it cannot be reassigned:
 *      const FAV_PET = "Cats";
 *      FAV_PET = "Dogs";
 * The console will display an error due to reassigning the value of FAV_PET.
 * 
 * However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. 
 * Using the const declaration only prevents reassignment of the variable identifier.
 *      const s = [5, 6, 7];
 *      s = [1, 2, 3];
 *      s[2] = 45;
 * s = [1, 2, 3] will result in an error. After commenting out that line, the console.log will display the value [5, 6, 45].
 * As you can see, you can mutate the object [5, 6, 7] itself and the variable s will still point to the altered array [5, 6, 45]. 
 * Like all arrays, the array elements in s are mutable, but because const was used, 
 * you cannot use the variable identifier s to point to a different array using the assignment operator.
 */
const s = [5, 7, 2];
function editInPlace() {
    for (let i = 0; i < 1; i++) { //1 indicates that the array is to be rotated only once
        const last = s[s.length - 1];
        for (let j = (s.length - 1); j > 0; j--) {
            s[j] = s[j - 1];
        }
        s[0] = last;
    }
};

console.log("Array before rotating: " + printArray(s));
editInPlace();
console.log("Array after rotating: " + printArray(s));

function printArray(array) {
    let arrayElements = "[ ";
    for (let k=0; k<array.length; k++) {
        arrayElements += array[k].toString() + " ";
    }
    arrayElements += "]";
    return arrayElements;
};