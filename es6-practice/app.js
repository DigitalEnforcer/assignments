//Let and Const
/*
const name = "John"
let age = 101
function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name ="";
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}
runForLoop(["cat", "dog"])
*/

//Task 1
/*
const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(carrot => ({ type: "carrot", name: carrot })
    )
}
console.log(mapVegetables(carrots))
*/

//Task 2
/*
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => person.friendly)
}

console.log(filterForFriendly(people))
*/

//Task 3
/*
let doMathSum= (a, b) => a + b

let produceProduct = (a, b)=> a*b

console.log(doMathSum(5,5))
console.log(produceProduct(9,3))
*/

//Task 4
/*
let printString = (firstName, lastName, age)=> `Hi ${firstName} ${lastName}, How does it feel to be ${age}?`
console.log(printString("Jane", "Doe", "100"))
*/

//Task 5
/*
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
//  function filterForDogs(arr) {
//     return arr.filter(animal => {
//         if (animal.type === "dog") {
//             return true
//         } else {
//             return false
//         }
//     })
// }
 let filterForDogs= arr => arr.filter(animal => animal.type === "dog")
 
 console.log(filterForDogs(animals))
 */

 //Task 6
/*
 let greeting = (firstName, location) => `Hi ${firstName}!\n\nWelcome to ${location}.\n\nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`

 console.log(greeting("Kate", "Hawaii"))
 */