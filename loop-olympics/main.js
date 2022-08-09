const readline = require("readline-sync")

//Preliminaries
/*
for (var i = 0; i <=9; i++){
    console.log (i)
}

for (var i = 9; i >= 0; i--){
    console.log (i)
}

const fruit = ["banana", "orange", "apple", "kiwi"]

for (var i = 0; i < fruit.length; i++){
    console.log (fruit[i])
}


// Bronze Medal Assignments
    // 1.
let userNumber = []
for (var i = 0; i <= 9; i++){
        userNumber[i] = i
}
console.log(userNumber) 
    //2.
for (var i = 0; i<=100; i++){
    if (i%2 === 0){
    console.log(i)
    }
} 

    //3.
const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
const newFruit = []
for (var i = 0; i < fruit.length; i++){
    if (i%2 === 0){
        newFruit.push(fruit[i])
    }
}
console.log (newFruit)


// Silver Medal Assignments
    //1. 2. 3.
    const peopleArray = [
        {
          name: "Harrison Ford",
          occupation: "Actor"
        },
        {
          name: "Justin Bieber",
          occupation: "Singer"
        },
        {
          name: "Vladimir Putin",
          occupation: "Politician"
        },
        {
          name: "Oprah",
          occupation: "Entertainer"
        }
      ]
      //1.
const namesArray = []
const occupationArray = []
for (var i = 0; i < peopleArray.length; i++){
    console.log (peopleArray[i].name)
}
    //2.
for (var i = 0; i < peopleArray.length; i++){
    namesArray[i] = peopleArray[i].name
    occupationArray[i] = peopleArray[i].occupation
}

console.log (namesArray)
console.log (occupationArray)

    //3.
const people = []
const occupations = []
for (var i = 0; i < peopleArray.length; i++){
    if (i%2 === 0){
        people.push(peopleArray[i].name)
    }
    else occupations.push(peopleArray[i].occupation)
}

console.log (people)
console.log (occupations)
*/

// Gold Medal Assignments
    //1.
const first = []
const second = []
/*
for (var i = 0; i < 3; i++){
    first[i] = [0]
    for (var o = 0; o < 3; o++){
        first[i][o] = 0
    }
}
console.log (first)


    //2. 
for (var i = 0; i < 3; i++){
    first[i] = [0]
    for (var o = 0; o < 3; o++){
        first[i][o] = i
    }
}
console.log (first)
*/

    //3.
for (var i = 0; i < 3; i++){
    first[i] = [0]
    for (var o = 0; o < 3; o++){
        first[i][o] = o
    }
}
console.log (first) 

for (var i = 0; i < 3; i++){
    for (var o = 0; o < 3; o++){
        first[i][o] = ("x")
    }
}

console.log(first)