/* function 1

const arrayOfNumbers = [-123, -90, -49, -59, 900, 200, 398, 102]

function biggestNumber (num1) {
    let finalNumber = num1[0];
    for (var i = 0; i < num1.length; i++){
        if (num1[i] > finalNumber){
            finalNumber = num1[i]
        }
    }
    console.log(finalNumber)
}
biggestNumber(arrayOfNumbers)
*/

// function 2


function lettersWithStrings (array, character){
    let newString = [];
    for (let i = 0; i < array.length; i++){
        if (array[i].indexOf(character) !== (-1)){
            newString.push(array[i])
        }
    }
    return newString
}

console.log(lettersWithStrings(["$hello!", "%%^%%", "test!", "Wowzers!", "TimmyBuckTooth", "(ste!"], "!"))

/* function 3

function isDivisible (num1, num2){
    if (num1%num2 === 0){
        return true
    }
    else return false
}

console.log(isDivisible(903,3))
*/