"use strict"
const color ="dark";
const age = `I can't believe that this is working.
I am honestly just scared at the possibilities.
You know what I mean?`
console.log(age)

switch (color) {
    case "light":
        console.log (`Here is ${color} mode funny guy`);
        break;
    case "dark":
        console.log (`Here is ${color} mode you cutie`);
        break;
    default:
        console.log (`Wow... you really wanted ${color} mode again?`)
        break;
}