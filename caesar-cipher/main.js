var readline = require('readline-sync');
var input = readline.question ('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));


//I need to get the individual letter and find the index of it on the AlphaShift. Once that happens then I can use shift to add to the 
//index and find the new letter it should be and return that


function cipher(input, shift) {
    const alphaShift = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    newArray = input.split("");
    finalArray = newArray.map(letter => {
        if (alphaShift.includes(letter)) {
            const index = alphaShift.indexOf(letter);
            const newIndex = (index + shift) % 26; // wraps around to start at the beginning
            return alphaShift[newIndex];
        } else {
            return letter; // returns spaces
        }
    });
    console.log(finalArray.join(""));
}

cipher(input, shift);