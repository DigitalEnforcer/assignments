function sortByProperty (objects, propertyName){
    return objects.slice().sort((a, b) => a[propertyName] - b[propertyName])

    // value = objects[0][propertyName] // bases entire function off first entry

    // if (typeof value === "number") { //Confirms it's a number and then sorts it's in ascending order
    //     objects.sort((a, b) => a[propertyName] - b[propertyName])
    //     return objects
    // }
    // else if (typeof value === "string"){     //Confirms it's a string and then makes 
    //                                          //everything lowercase and then sorts it alphabetically
    //         objects.sort((a, b) => a[propertyName].toLowerCase().localeCompare(b[propertyName].toLowerCase()))
    //         return objects
    //     }
    }
    


const people = [
    { name: 'tim', age: 30 },
    { name: 'Lizzy', age: 25 },
    { name: 'Charlie', age:35 },
    { name: 'Jeffrey', age: 28 },
]

const sortedByAge = sortByProperty(people, 'name')
console.log(sortedByAge)

//--------------------------------------------------------------------------------------------------------------

// function extractUniqueCharacters(strings) {
//     const results =[]
//     splitwords = strings.map(word => word.split(''))
//     splitwords.forEach(word => {
//             word.map(letters => {
//             if (!results.includes(letters)) { 
//                 results.push(letters)}
//         })
//     })
//     return results
// }


// function extractUniqueCharacters(strings){
//     let splitWords = strings.map(word => word.split(''))
//     let allLetters = splitWords.flat()
//     let uniqueLettersSet = new Set(allLetters)
//     let uniqueLetters = Array.from(uniqueLettersSet)
//     return uniqueLetters
    
// }
// const words = ['apple', 'banana', 'cherry'];
// const uniqueChars = extractUniqueCharacters(words);
// console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']

// split each item into separate letters
// use a .map on each item and if it's not in the list, then 'push' it into the list