/* 
for (var i = 0; i <100; i++){
    if (i%2 === 0){
        console.log(i + " is even.")
    } else {
        console.log(i + " is odd.")
    }
}

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
let count = 0
for (var i = 0; i < officeItems.length; i++){
    if (officeItems[i] === "computer"){
        count++
        console.log("There is " + count + " computers")
    } else {
        console.log (officeItems[i] + " is not a computer.")
    }
}



var car = {
    make: "Nissan",
    model: "Stanza",
    year: 1993,
    runs: true,
    address: {
        street: "2112 179th street",
        city: "Spanaway",
        state: "Washington",
        zipCode: 98387,
    },
    motorSounds: function (beep1, beep2){
        console.log(beep1+beep2)
    },
        }

console.log(car.make)
console.log(car.address.city)

car.runs = false
console.log(car.runs)

car.motorSounds(9,3)


const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for (var i = 0; i < fruit.length; i++){
    if (i%2===0){
        console.log(fruit[i])
    }
}



let numbers = []
console.log(numbers)
for (i=0; i<100; i++){
    numbers[i] = i
    if (numbers[i]%2 === 0){
        console.log(numbers[i])
    }
}

console.log(numbers[0])


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
let namesArray = []
let occupationArray = []
let counter1 =0
let counter2 =0
for (var i = 0; i < peopleArray.length; i++){
    if (i%2 === 0){
        namesArray[counter1] = peopleArray[i].name
        counter1++
    }
    if (i%2 === 1){
        occupationArray[counter2] = peopleArray[i].occupation
        counter2++
    }
}

console.log (namesArray)
console.log (occupationArray)



// Color controls
*/
var purpleBtn = document.getElementById("purple")
var greenBtn = document.getElementById("green")
var blueBtn = document.getElementById("blue")
var redBtn = document.getElementById("red")
var whiteBtn = document.getElementById("white")

purpleBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = "rebeccapurple"
})

greenBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = "forestgreen"
})

blueBtn.addEventListener("mouseup", function() {
    document.body.style.backgroundColor = "blue"
    alert ("You Are About to Make a Mistake!")
})

blueBtn.addEventListener("mousedown", function() {
    document.body.style.backgroundColor = "red"
})
redBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = "firebrick"
})

whiteBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = "white"
})
/*
// Count controls
var count = 0;
var subtractBtn = document.getElementById("subtract")
var addBtn = document.getElementById("add")

subtractBtn.addEventListener("click", function() {
    count--
    document.getElementById("counter").innerText = count;
})

addBtn.addEventListener("click", function() {
    count++
    document.getElementById("counter").innerText = count;
})


var hello = document.getElementById("hello").textContent = "Hi Friends"
hello = document.getElementById("hello").style.backgroundColor = "red"


var result = document.getElementsByClassName("hello")
result[0].innerHTML = "Hello People"

console.log(result[0])


var eventsAtWork = ["work", "pretend to work", "party", "work", "meeting", "party", "daily grind", "work", "party"]
for (var i = 0; i <= eventsAtWork.length; i++){
    if (eventsAtWork[i] === "party"){
        console.log ("it's party time")
    }
}
*/