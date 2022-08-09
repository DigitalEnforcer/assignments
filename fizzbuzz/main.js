let array = [];

function tallyUp (numarray){
    let finalTotal = {
        FizzBuzz:0,
        Fizz:0,
        Buzz: 0,
    }
    
    for(var i = 0; i<numarray.length; i++){
        
        if (numarray[i] === "Fizz"){
            finalTotal.Fizz = finalTotal.Fizz + 1;
            
        }
        if (numarray[i] === "Buzz"){
            finalTotal.Buzz = finalTotal.Buzz + 1;
            
        }if (numarray[i] === "FizzBuzz"){
            finalTotal.FizzBuzz = finalTotal.FizzBuzz + 1;
            
        }
    }
    console.log(finalTotal)
}

for(var i = 1; i < 101; i += 1) {
    if (i%3 === 0 && i%5===0){
        array.push("FizzBuzz");
    }
    else if (i%3 === 0){
        array.push("Fizz");
    }
    else if (i%5 === 0){
        array.push("Buzz");
    }
    else {
        array.push(i);
    }
}
var joinedName = array.join("")
console.log(joinedName)
tallyUp(array)