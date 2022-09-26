const form = document.enemyForm

form.addEventListener("submit", function(event){
    event.preventDefault()
    const goombaPrice = (form.numOfGoomba.value) * 5
    const bombOmbPrice = (form.numOfBombOmb.value) * 7
    const cheepCheepPrice = (form.numOfCheepCheep.value) * 11

    document.getElementById("finalPrice").textContent = "You owe us " + (goombaPrice + bombOmbPrice + cheepCheepPrice) + " Coins!"
    form.numOfGoomba.value = ""
    form.numOfBombOmb.value = ""
    form.numOfCheepCheep.value = ""

})