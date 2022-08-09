//1.
function upperAndLowerCase (firstWord){
    let newWord = firstWord.toUpperCase().concat(firstWord.toLowerCase())
    return newWord
}
var tim = "WowzerS"
console.log(upperAndLowerCase(tim))


//2.
function stringLength (string){
    const half = Math.floor(string.length/2)
    return half
}
const welcome = "Hello Good Friend"
console.log(stringLength(welcome))

//3.
function returnFirstHalf (wholeString){
    const answer = wholeString.slice(0,stringLength(wholeString))
    return answer
}

const firstHalf = "Hello Everyone... You are all dismissed."
console.log(returnFirstHalf(firstHalf))

//4.
function capitalizeAndLowerCase(word){
    const answer1 = word.slice(0,stringLength(word)).toUpperCase()
    const answer2 = word.slice(stringLength(word), word.length).toLowerCase()
    return answer1.concat(answer2)
}
const word = "Hello This is Only a Test"
console.log(capitalizeAndLowerCase(word))