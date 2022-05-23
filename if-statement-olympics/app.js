var num1 = 5
var num2 = 3

if (num1 > num2){
    console.log(num1 + " is greater than " + num2)
}

var word = "cat"
var pet2 = "dogs"
if (word.length === 3){
    console.log (word + " has a length of " + word.length)
} else {console.log (word + " doesn't have a length of 3")
}

if (word.length === pet2.length){
    console.log ("Both " + word + " and " + pet2 + " have the same length")
} else {console.log ("They are not equal")
}

var person = {
    name: "Bobby",
    age: 19
}

if (person.age >= 18 && person.name[0] === "B"){
    console.log ("You are Old Enough for this movie")
} else {
    console.log ("You are too young... go home")
}


if (1 === 1){
    console.log("strict")
} else if (1 == "1"){
    console.log("abstract")
} else {
    console.log("not equal at all")
}


