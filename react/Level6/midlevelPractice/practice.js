/*
function extractInitials(names) {
  const initials = names.map(names => {
        const splitName=names.split(' ')
        const splitLetters = splitName.map(name => {
                return name.split('').splice(0,1)})
            combinedInitials = splitLetters[0] + splitLetters[1]                       
            return (combinedInitials) }
    )
    return (initials)
};


const fullNames = ['John Doe', 'Alice Johnson', 'Bob Smith'];
const initialsArray = extractInitials(fullNames);
console.log(initialsArray); // Output: ['JD', 'AJ', 'BS']

*/


/*--------------------------CHATGPT----------------------------------
function extractInitials(names) {
    return names.map(name => 
      name.split(' ').map(word => word[0]).join('')                 
    );
  }
  
  const fullNames = ['John Doe', 'Alice Johnson', 'Bob Smith'];
  const initialsArray = extractInitials(fullNames);
  console.log(initialsArray); // Output: ['JD', 'AJ', 'BS']
  */




  function filterByProperty(objects, propertyName, propertyValue) {
        const finalAnswer = objects.filter(item => (item[propertyName] === propertyValue))
           return finalAnswer
  }
  
  const people = [
    { name: 'Alice', age: 30, country: 'USA' },
    { name: 'Bob', age: 25, country: 'Canada' },
    { name: 'Charlie', age: 35, country: 'USA' },
    { name: 'David', age: 28, country: 'Australia' },
  ];
  
  const filteredByCountry = filterByProperty(people, 'age', 30);
  console.log(filteredByCountry);