const peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
function sortOfAge (arr){
    const oldEnough = arr.filter(function(people){
        if (people.age >= 18){
            return true
        }
    })
    oldEnough.sort(function(a,b){
         return (a.lastName.localeCompare(b.lastName))
    })
    
    const namesOnly = oldEnough.map(function(peopleInfo){
        return ("<li>" + peopleInfo.firstName + " " + peopleInfo.lastName + " is " + peopleInfo.age + "</li>")
    })

    return namesOnly
    
}

console.log (sortOfAge(peopleArray))

   