var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet){

    const alphabetLetters = alphabet.toUpperCase().split("")
    const newArray = []
    for (var i = 0; i < people.length; i ++){
        newArray.push(people[i]+":")
        for (var o = 0; o < alphabetLetters.length; o++){
            newArray.push(alphabetLetters[o])
        }
    }
    console.log(newArray)
}

forception(people, alphabet)
