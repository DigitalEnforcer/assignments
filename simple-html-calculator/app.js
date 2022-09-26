const additionForm = document.additionForm
const subtractionForm = document.subtractionForm
const multiplyForm = document.multiplyForm

additionForm.addEventListener("submit", function(event){
    event.preventDefault()
    const add1 = additionForm.add1.value
    const add2 = additionForm.add2.value
    const addAnswer = Number(add1) + Number(add2)
    document.getElementById("addAnswer").textContent = addAnswer
    additionForm.add1.value = ""
    additionForm.add2.value = ""

})

subtractionForm.addEventListener("submit", function(event){
    event.preventDefault()
    const sub1 = subtractionForm.sub1.value
    const sub2 = subtractionForm.sub2.value
    const subAnswer = Number(sub1) - Number(sub2)
    document.getElementById("subAnswer").textContent = subAnswer
    subtractionForm.sub1.value = ""
    subtractionForm.sub2.value = ""
})

multiplyForm.addEventListener("submit", function(event){
    event.preventDefault()
    const mult1 = multiplyForm.mult1.value
    const mult2 = multiplyForm.mult2.value
    const multAnswer = Number(mult1) * Number(mult2)
    document.getElementById("multAnswer").textContent = multAnswer
    multiplyForm.mult1.value = ""
    multiplyForm.mult2.value = ""
})