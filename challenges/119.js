// # Different Robot Map
//
// You are working on the Robot from Chapter 7 of Eloquent JavaScript.
// After you have already written the `buildGraph` function,
// someone gives you an input file for a different town
// and they didn't follow the same format as the `const roads` array
// of strings in the book. So you need to write new code to process this different format.


function addRoad(startName, endingName) {
  console.log(`called addRoad, start: '${startName}' end: '${endingName}'`);
  /* the rest is the same as the book
   you DON'T need to implement this */
}

const otherRoads = [
  "Osito's Treehouse <=> Oscuro's Lair",
  "Zorro's Den <=> Bella's Casa",
  "Bella's Casa <=> Rayo's Mansion",
  "Oscuro's Lair <=> Bella's Casa",
  "Osito's Treehouse <=> Zorro's Den"
];

/*
  Process the "otherRoads" array of strings so you can call addRoad for each pair of locations.
*/

function applyAddRoad(arr) {  
  let a;
  let b;
  let newArr = [];
    for (let i = 0; i<arr.length; i++)  {
    let newElem = arr[i].split(" <=> ");
    a= newElem[0];
    b= newElem[1];
    newArr.push(addRoad(a,b));
  } return newArr;

}

// trial line
// applyAddRoad(otherRoads);

module.exports = addRoad;

/* Meia's sandbox notes:

console.log(otherRoads[0].split([" <=> "]));

let exSplit = otherRoads[0].split([" <=> "]);
console.log(exSplit[1]);
let a = exSplit[0];
let b = exSplit[1];

console.log(addRoad(a, b));
*/