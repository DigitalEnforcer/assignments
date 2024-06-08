/*
function filterAnagrams(arr, target) {
  // .map to take each item in the array.
  // inside that, it needs to split each word into another array for each letter
  // reference the original word that also needs to be split into an array of letters
  //use one of the filter/sort/some to match up all the letters
  // if all match, then it comes back true / otherwise it's false


  const targetWord = target.toLowerCase().split("").sort().join() //sets the target word to lowercase, then splits it into an array of letters, the sorts it alphabetically and rejoins

  const answer = arr.filter(word => { //filters array into only matching words
    const firstWord = word.toLowerCase().split("").sort().join() //splits the individual word, sorts and rejoins so it can be compared
        if (targetWord === firstWord){
            return word //returns only the original words that are anagrams
        }
  })
  return answer
}

const words = ['listen', 'siLENT', 'dog', 'gOd', 'Hello', 'World', 'tislen'];
const target = 'enlist';

const anagrams = filterAnagrams(words, target);
console.log(anagrams)
// console.log(anagrams); // Output: ['listen', 'silent']



function sortByMultipleCriteria(people){
    const newPeople = people.sort(function (a,b){
        if (a.age === b.age){
            return a.name.localeCompare(b.name)}
        else return (a.age - b.age)
    })
    return newPeople
}

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 25 },
    ];
    
    const sortedPeople = sortByMultipleCriteria(people);
    console.log(sortedPeople);
    
    // Expected outcome: [
    //  { name: 'Bob', age: 25 },
    //  { name: 'David', age: 25 },
    //  { name: 'Alice', age: 30 },
    //  { name: 'Charlie', age: 35 }
    // ]
    */


    // Write a function called calculateTotalPrice that calculates the total price for each product in an array of objects representing products, 
    // where each object has a name (string), price (number), and quantity (number) property. The function should return a new array containing objects 
    // with the name and totalPrice properties, where totalPrice is the result of multiplying the price with the quantity for each product.

function calculateTotalPrice(products) {
  const finalPrice = products.map(item => ({
        name:item.name,
        totalPrice: (item.price * item.quantity)
  }))
  return finalPrice
}

const products = [
  { name: 'Apple', price: 1.5, quantity: 3 },
  { name: 'Banana', price: 0.75, quantity: 5 },
  { name: 'Orange', price: 1.25, quantity: 2 },
];

const totalPriceArray = calculateTotalPrice(products);
console.log(totalPriceArray);

// Output: [
//  { name: 'Apple', totalPrice: 4.5 },
//  { name: 'Banana', totalPrice: 3.75 },
//  { name: 'Orange', totalPrice: 2.5 }
// ]