const form = document.airlineForm

form.addEventListener("submit", function(event){
    event.preventDefault()
    const firstName = form.firstName.value
    const lastName = form.lastName.value
    const gender = form.gender.value
    const age = form.age.value
    const destination = form.city.value
    const diet = []

    for(let i = 0; i < form.diet.length; i++){
            if(form.diet[i].checked){
                diet.push(form.diet[i].value)
        }
    }

    
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + destination + "\nDiet: " + diet + "\nWe look forward to serving you and all of your ridiculous needs.")


})