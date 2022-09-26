/* Example 1: Sort an Array of Numbers from least to greatest

const numbers = [1, 3, 5, 2, 90, 20]

numbers.sort(function(a,b){
    return a-b
})

console.log (numbers)
*/

/* Example 2: Sort an Array of Numbers from greatest to least

const numbers = [1, 3, 5, 2, 90, 20]

numbers.sort(function(a,b){
    return b-a
})

console.log (numbers)
*/

/* Example 3: Sort an Array from shortest string to longest

const arr = ["dog", "wolf", "by", "family", "eaten"]

arr.sort(function (a,b){
    return a.length - b.length
})

console.log (arr)

*/

/* Example 4: Sort an Array alphabetically

const arr = ["dog", "wolf", "by", "family", "eaten"]

arr.sort()

console.log(arr)
*/

/* Example 5: Sort objects in array by age

const arr = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

arr.sort(function(a,b){
    return a.age - b.age
})

console.log(arr)
*/