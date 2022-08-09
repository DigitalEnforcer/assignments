const form = document.airlineForm

form.addEventListener("submit", function(event) {
    event.preventDefault()
    var firstName = form.firstName.value; //document.getElementById()
    var lastName = form.lastName.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = document.getElementById("travel-location").value;
    var diet = [];
    console.log("hello");
    if (document.getElementById("vegan").checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (document.getElementById("gluten").checked) {
        diet.push(document.getElementById("gluten").value);
    }
    if (document.getElementById("paleo").checked) {
        diet.push(document.getElementById("paleo").value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
})


