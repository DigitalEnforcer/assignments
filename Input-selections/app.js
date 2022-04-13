document.getElementById("submitButton").addEventListener('click', function(){
    console.log("You clicked me!")
    var userInput = document.getElementById("text1").value
    console.log(userInput)
    document.body.append(userInput)

})




