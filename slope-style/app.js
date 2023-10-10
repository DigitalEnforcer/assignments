// Animals
/*
function collectAnimals(...animals) {
    return animals;
}

let allAnimals = collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "human")
console.log(allAnimals)
// ["dog", "cat", "mouse", "jackolope", "platypus"]
*/

//Food objects
/*
function combineFruit(fruit, sweets, vegetables){
    return {fruit, sweets, vegetables}
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))

*/

//Destructuring
/*
function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
  }
  
  console.log(parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
  }))
  */

// Array Destructuring
/*
const words = ["turd","believe","time"]

function returnFirst(items){
  const [firstItem] = items; //change this line to be es6
  return firstItem
}


console.log(returnFirst(words))


const thing = ["Table", "Chair", "Fan"];
const [a, b, c] = thing;
console.log(c)
console.log(thing)
*/

/*

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [,firstFav, secondFav,, thirdFav] = arr;
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`
}

returnFavorites(favoriteActivities)

console.log(returnFavorites(favoriteActivities))
*/

/*
function combineAnimals(real, magical, mysterious) {
  return [...real, ...magical, ...mysterious]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]
*/
/*
function product(...rest) {
  // var numbers = [...rest];

  return rest.reduce((acc, number)=> acc*number,1)
}

console.log(product(1,2,3,4,5))
*/

/*
const good = ["Wow... what's wrong with you", "Can you go home"]
function unshift(array, ...rest) {
  return [...rest, ...array];
}

console.log(unshift(good, 1, 2, 3, 4, 5, 6))
*/

function populatePeople(names){
  return names.map(name => {
      name = name.split(" ");
      const [firstName, lastName] = name
      return {firstName, lastName}
      
  })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]