var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
//1
vegetables.pop()
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
//2
fruit.shift()
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
//3
const orangeIndex = fruit.indexOf("orange")
//4
fruit.push(orangeIndex)
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
//5
const vegLength = vegetables.length
//6
vegetables.push(vegLength)
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
//7
const food = fruit.concat(vegetables)
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
console.log("food: ", food)
//8
food.splice(4, 2)
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
console.log("food: ", food)
//9
food.reverse()
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
console.log("food: ", food);
//10
let final = food.join(", ")
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
console.log(final)