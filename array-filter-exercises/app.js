/* Example 1: filter out numbers lower than 5

const arr = [2,5,3,12,6,7,3,9]

const numbersFiveAndUp = arr.filter(function(numbers){
    if (numbers >= 5){
        return true
    }
})

console.log (numbersFiveAndUp)
*/

/* Example 2: Using .filter() only include even numbers in new array

const arr = [2,5,3,12,6,7,3,9]

const numbersEven = arr.filter(numbers => numbers %2 === 0)

console.log (numbersEven)
*/

/* Example 3: Returns array that only has items 5 characters or less

const arr = ["dog", "wolf", "by", "family", "eaten", "camping"]

const fiveCharacters = arr.filter(function(character){
    if (character.length <= 5){
        return true
    }
})

console.log(fiveCharacters)
*/

/* Example 4: Filter out people who don't belong

const arr = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

const peopleWhoBelong = arr.filter(function(people){
    if (people.member === true){
        return true
    }
})

console.log (peopleWhoBelong)
*/

/* Example 5: Old enough to see the Matrix

const arr = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

const oldEnough = arr.filter(function(people){
    if (people.age >= 18){
        return true
    }
})

console.log (oldEnough)
*/