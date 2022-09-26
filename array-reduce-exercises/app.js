/* Example 1: use reduce() to add up all numbers in array
const arr = [1,2,3,4,1,2,3,4]
const sum = arr.reduce(function(final,num){
    return final += num
},0)

console.log(sum)
*/

/* Example 2: Turn an array of numbers into a long string

const arr = [1,2,3,4,1,2,3,4]
const together = arr.reduce(function(final,num){
    return final+num
},[])

console.log(together)
*/

/* Example 3: Turn an array of voter objects into an array of how many voted

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: true}]

const whoVoted = voters.reduce(function(final, voters){
    if (voters.voted){
        final++
    }
        return final
    
},0)

console.log(whoVoted)
*/

/* Example 4: Figure out how much it would cost to buy everything at once

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]

const total = wishlist.reduce(function(final, list){
    return final = final + list.price
},0)

console.log(total)
*/

/* Example 5: Flatten the arrays into one array

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

const flatten = arrays.reduce(function(final, array){
    final = final.concat(array)
    return final
})

console.log(flatten)
*/

/* Example 6: Find the number of voters

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const voterResults = voters.reduce(function(final, voters){
    if (voters.age >= 18 && voters.age <= 25){
        final.numYoungPeople ++
        if (voters.voted){
            final.numYoungVotes ++
        }
    }
    if (voters.age >= 26 && voters.age <= 35){
        final.numMidsPeople ++
        if (voters.voted){
            final.numMidVotesPeople ++
        }
    }
    if (voters.age >= 36 && voters.age <= 55){
        final.numOldsPeople ++
        if (voters.voted){
            final.numOldVotesPeople ++
        }
    }
    return final
},{ numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0 })

console.log (voterResults)
*/