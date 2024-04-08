//Example 1: Double the numbers in the array


const numbers = [3, 15, 192]
const double = numbers.map(numbers => numbers * 2)
console.log(double)


//Example 2: Stringify

/*
const numbers = [11, 23, 35, 43, 56, 62, 98, 190, 399]
const stringOfNumbers = numbers.map(function(numbers){
    return numbers.toString()
})
console.log(stringOfNumbers)
*/

// Example 3: Capitalize first letter and lowercase the rest

/*
const arr = ["ArrOn", "toMmy", "WiLBUR", "PoPpy"]
const correctNames = arr.map(function(arr){
    arr = arr.toLowerCase()
    return arr[0].toUpperCase() + arr.substring(1)
})

console.log (arr)
console.log (correctNames)
*/

// Example 4: Make and array of strings of names

/*
const peopleInfo = [
        {
            name: "Angelina Jolie",
            age: 80
        },
        {
            name: "Eric Jones",
            age: 2
        },
        {
            name: "Paris Hilton",
            age: 5
        },
        {
            name: "Kayne West",
            age: 16
        },
        {
            name: "Bob Ziroll",
            age: 100
        }]
const namesOnly = peopleInfo.map(function(peopleInfo){
    return peopleInfo.name
})
console.log(peopleInfo)
console.log(namesOnly)
*/

// Example 5: Make an array of strings of the names saying whether or not they can go to The Matrix

/*
const peopleInfo = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }]

const namesOnly = peopleInfo.map(function(peopleInfo){
    if (peopleInfo.age >= 18){
        return (peopleInfo.name + " is old enough to go see the Matrix")
    }
    else {
        return (peopleInfo.name + " is UNDER AGE.")
    }
})

console.log(namesOnly)
*/

// Example 6: Make an array of the names in h1s, and the ages in h2s

/*
const peopleInfo = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }]

    const namesOnly = peopleInfo.map(function(peopleInfo){
        return (peopleInfo.name = "<h1>" + peopleInfo.name + "</h1>"+"<h2>" + peopleInfo.age + "</h2>")
    })

    console.log (namesOnly)
    */