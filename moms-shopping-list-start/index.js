const form = document.addItem


form.addEventListener ("submit", function(event){
    event.preventDefault()
    const liItem = document.createElement("li")
    
    
    
//adds user item name
    const spanItem = document.createElement("span")
    spanItem.textContent = form.title.value + " "
    spanItem.classList.add("itemName")
    liItem.append(spanItem)

//adds Edit button
    const editButton = document.createElement("button")
    editButton.textContent = "Edit"
    editButton.classList.add("edit")
    liItem.append(editButton)
    const editItem = document.createElement("input")
    editButton.addEventListener("click", ()=>{
        if (editButton.textContent === "Edit"){
            editButton.textContent = "Save"
            editItem.value = spanItem.textContent
            liItem.append(editItem)
            console.log(editButton.textContent)
        }
        else if (editButton.textContent === "Save"){
            spanItem.textContent = editItem.value
            editButton.textContent = "Edit"
            editItem.remove()
            console.log(spanItem.textContent)
        }
    })

//adds cancel button
    const xButton = document.createElement("button")
    xButton.textContent = "X"
    xButton.classList.add("cancel")
    liItem.append(xButton)
    xButton.addEventListener ("click", ()=>{
       liItem.remove()
    })

//adds entire element to list
    document.getElementById("list").append(liItem)
    form.title.value = ""


    console.dir(liItem)
})
