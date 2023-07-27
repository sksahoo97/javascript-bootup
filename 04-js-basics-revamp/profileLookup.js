/**
 * We have an array of objects representing different people in our contacts lists.
 * 
 * A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
 * 
 * The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
 * 
 * If both are true, then return the "value" of that property.
 * 
 * If name does not correspond to any contacts then return the string No such contact.
 * 
 * If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
 */
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    if (contacts.filter(c => c.firstName === name).length > 0) {
        let result = contacts.filter(c => c.firstName === name);
        return result[0][prop] ? result[0][prop] : "No such property";
    } else
        return "No such contact";
  }
  
  console.log("Profile lookup for Akira for likes: " + lookUpProfile("Akira", "likes"));
  console.log("Profile lookup for Kristian for lastName: " + lookUpProfile("Kristian", "lastName"));
  console.log("Profile lookup for Bob for number: " + lookUpProfile("Bob", "number"));
  console.log("Profile lookup for Bob for potato: " + lookUpProfile("Bob", "potato"));
  console.log("Profile lookup for Harry for address: " + lookUpProfile("Harry", "address"));