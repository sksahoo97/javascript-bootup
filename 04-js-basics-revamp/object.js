/*
1] Objects are similar to arrays, except that instead of using indexes to access
and modify their data, you access the data in objects through what are called properties.

Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.
*/
const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};

/*
2] You can also use numbers as properties.
You can even omit the quotes for single-word string properties, as follows:
However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.
*/
const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};

/*
3] There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.
Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

Below is a sample of using dot notation (.) to read an object's property:
*/
const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;

/*
4] The second way to access the properties of an object is bracket notation ([]).
If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.
However, you can still use bracket notation on object properties without spaces.
Note that property names with spaces in them must be in quotes (single or double).

Below is a sample of using bracket notation to read an object's property:
*/
const myObj2 = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj2["Space Name"];
myObj2['More Space'];
myObj2["NoSpace"];

/*
5] You can update its properties at any time just like you would update any other variable.
You can use either dot or bracket notation to update.
*/
const ourDog = {
    "name": "Camper",
    "legs": 3,
    "tails": 1,
    "friends": ["everything!"]
};
ourDog.name = "Happpy Camper";
ourDog["legs"] = 4;
console.log(ourDog);

/*
6] You can add new properties to existing JavaScript objects the same way you would modify them.
*/
ourDog.bark = "woof";
ourDog.love = ["lucy", "linda"];
console.log(ourDog);

/*
7] We can also delete properties from objects like this:
*/
delete ourDog.tails;
console.log(ourDog);

/*
8] Objects can be thought of as a key/value storage, like a dictionary.
If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain.
This is most useful when you know that your input data is limited to a certain range.
*/