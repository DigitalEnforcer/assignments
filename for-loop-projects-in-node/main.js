const readline = require("readline-sync")

/*   Problem 1

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
let count = 0
for (var i = 0; i < officeItems.length; i++){
    if (officeItems[i] === "computer"){
        count++
    }
}

console.log (count)

Problem 2 with extras

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

  for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ){
      if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
          console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to go see the movie.")
          if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
              console.log ("Please let HIM in.")
          }
            else console.log ("Please let HER in.")
          
      }
      else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is NOT old enough to see the movie.")
          if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
              console.log ("Please DON'T let HIM in.")
          }
            else if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){ 
                  console.log ("Please DON'T let HER in.")
        }}
    }
*/
//Bonus Problem
let finalAnswer = 0
let light = "off"
const sample = [4,6,5,2]
for (var i = 0; i < sample.length; i++){
  finalAnswer = sample[i] + finalAnswer
  console.log(finalAnswer)
}

for (var o = 0; o < finalAnswer; o++){
  if (light === "off"){
    light = "on"
  }
  else light = "off"
}
console.log("The light is", light)

/*
let total = 1.5
for (var i = 0; i < 120; i++){
  total = (total * 1.015)
  console.log(total)
}
*/