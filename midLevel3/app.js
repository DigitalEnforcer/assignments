
/*
//Challenge 1
function solution(arr){
    const otherArr = []                     //creating a separate array for the other numbers besides -1
    const newArr = arr.map(function(num){
        if (num === (-1)){
            return num                      //This returns only the -1 values into the new array while leaving everything else as undefined
        }
        else {otherArr.push(num)}           //pushes the other numbers besides -1 into the separate array
        
    })

    otherArr.sort(function(a,b){            //sorts the other numbers into ascending order
        return a-b })

    let number = 0                          //just a counter
    for (let i = 0; i < newArr.length; i++){
        if (newArr[i] === -1) {             
        
        }                                   //for loop to replace all numbers besides -1 with the correctly ascending numbers of otherArr
        else {
            newArr[i] = otherArr[number]
            number ++
        }
    }
    return newArr                           //returns the new array
}
console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
console.log(solution([5, 3, 1]))
console.log(solution([-1, -1, -1, -1]))
console.log(solution([100, -1, 50, -1, 75]))







// Challenge 2

 const input = 'Hello World. I need food';

 

 function countVowels(word){
    let finalCount= 0
    for (let i=0; i < word.length; i++){
        if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u" || 
            word[i] === "A" || word[i] === "E" || word[i] === "I" || word[i] === "O" || word[i] === "U") {
            finalCount ++
        }
    }
    return finalCount
 }


 console.log(countVowels(input));

 */

 function findSumOfTwo(numbers, target) {
    for (let i = 0; i < numbers.length; i++) { //go through entire array
      for (let j = i + 1; j < numbers.length; j++) { // go through entire array +1 next number
        if (numbers[i] + numbers[j] === target) { // adding the first and second number together
          return [numbers[i], numbers[j]];
        }
      }
    }
  
    return [];
  }

  console.log(findSumOfTwo([2, 4, 7, 11, 15], 9)); // Output: [2, 7]

console.log(findSumOfTwo([5, 12, 3, 9, 1], 8)); // Output: [3, 5]

