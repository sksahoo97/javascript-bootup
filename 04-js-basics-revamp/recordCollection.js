/**
 * You are creating a function that aids in the maintenance of a musical album collection. The collection is organized as an object that contains multiple albums which are also objects. Each album is represented in the collection with a unique id as the property name. Within each album object, there are various properties describing information about the album. Not all albums have complete information.
 * The updateRecords function takes 4 arguments represented by the following function parameters:
 * 
 * records - an object containing several individual albums
 * id - a number representing a specific album in the records object
 * prop - a string representing the name of the album’s property to update
 * value - a string containing the information used to update the album’s property
 * Complete the function using the rules below to modify the object passed to the function.
 * 
 * Your function must always return the entire records object.
 * If value is an empty string, delete the given prop property from the album.
 * If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
 * If prop is tracks and value isn't an empty string, you need to update the album's tracks array. First, if the album does not have a tracks property, assign it an empty array. Then add the value as the last item in the album's tracks array.
 */
// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if (value === "") {
      delete records[id][prop];
    } else if (prop !== "tracks" && value !== "") {
      records[id][prop] = value;
    } else if (prop === "tracks" && value !== "") {
      if (records[id].hasOwnProperty("tracks")) {
        records[id][prop].push(value);
      } else {
        records[id][prop] = [value];
      }
    }
    return records;
  }
  
  const testCaseOne = updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  console.log("1st testCase: " + testCaseOne[5439].artist);

  const testCaseTwo = updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
  console.log("2nd testCase: " + testCaseTwo[5439].tracks);

  const testCaseThree = updateRecords(recordCollection, 2548, "artist", "");
  console.log("3rd testCase: " + testCaseThree[2548].artist);

  const testCaseFour = updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
  console.log("4rth testCase: " + testCaseFour[1245].tracks);

  const testCaseFive = updateRecords(recordCollection, 2468, "tracks", "Free");
  console.log("5th testCase: " + testCaseFive[2468].tracks);

  const testCaseSix = updateRecords(recordCollection, 2548, "tracks", "");
  console.log("6th testCase: " + testCaseSix[2548].tracks);

  const testCaseSeven = updateRecords(recordCollection, 1245, "albumTitle", "Riptide");
  console.log("7th testCase: " + testCaseSeven[1245].albumTitle);