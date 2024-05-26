const word = "palidrome"
const anotherWord ="dad"



function compare(var1){
    const myArray = var1.split("").reverse().join("")
    return myArray === var1
}

console.log(compare(anotherWord))