// GET's THE TODO's FROM THE DATABASE
function getData(){
    axios.get("https://api.vschool.io/davidfrohlich/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}



// LISTS THE TODO TITLES TO THE DOM
function listData(data){
    
    clearList()
    
    for(let i = 0; i < data.length; i++){
        //adds the item container
        const itemContainer = document.createElement('div')
        itemContainer.id = data[i]._id
        itemContainer.classList.add("item")
        document.getElementById("todoList").appendChild(itemContainer)
        
        //adds the details Div
        const detailsDiv = document.createElement('div')
        detailsDiv.classList.add("details")
        document.getElementById(data[i]._id).appendChild(detailsDiv)

        //adds the title to the detailsDiv
        const title = document.createElement('h2')
        title.textContent = data[i].title
        title.classList.add("title")
        detailsDiv.appendChild(title)

        //adds the description to the detailsDiv
        const description = document.createElement('p')
        description.textContent = data[i].description
        description.classList.add("description")
        detailsDiv.appendChild(description)

        //adds the price to the detailsDiv
        const price = document.createElement('div')
        price.textContent = "Price $" + data[i].price 
        price.classList.add("price")
        detailsDiv.appendChild(price)

        //adds the CheckBox Div
        const checkboxContainer = document.createElement("div");
        checkboxContainer.classList.add("checkbox-container");
        detailsDiv.appendChild(checkboxContainer);

        //adds a CheckBox
        const checkBox = document.createElement("input")
        checkBox.type = "checkbox"
        checkBox.classList.add("checkbox")
        checkBox.addEventListener("change", function(event){
            if(event.target.checked){
                checkedBox(data[i]._id)
            }
            else{
                unCheckedBox(data[i]._id)
            }
        })
        checkboxContainer.appendChild(checkBox)
        
        //adds label to  Checkbox
        const label = document.createElement('label');
        label.htmlFor = 'checkbox';
        label.classList.add("label")
        label.appendChild(document.createTextNode('Completed'));
        checkboxContainer.appendChild(label)
        
        //adds a Delete Button
        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        deleteBtn.classList.add("deleteButton")
        deleteBtn.addEventListener("click", function(){
            deleteItem(data[i]._id)
        })
        detailsDiv.appendChild(deleteBtn)
        

        //adds the div and appends the image to it if it exists
        if (data[i].imgUrl){
            const myImage = document.createElement('img')
            myImage.classList.add("image")
            myImage.src = data[i].imgUrl    
            document.getElementById(data[i]._id).appendChild(myImage)
        }
        //Puts a strikethrough if item is completed and clears the strikethrough if not completed
        if (data[i].completed){
            title.style.textDecoration = 'line-through';
            description.style.textDecoration = 'line-through';
            price.style.textDecoration = 'line-through';
            checkBox.checked= true;
            }
        else {
            title.style.textDecoration = 'none';
            description.style.textDecoration = 'none';
            price.style.textDecoration = 'none';
            checkBox.checked=false;
        }
    }
}

function clearList(){
    const el = document.getElementById('todoList')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

getData()

function deleteItem (data){
    axios.delete("https://api.vschool.io/davidfrohlich/todo/"+data)
        .then(res => getData())
        .catch(err => console.log(err))

}

function checkedBox (data){
    const update = {
        completed:true
    }
    axios.put("https://api.vschool.io/davidfrohlich/todo/"+data, update)
        .then(res => getData())
        .catch(err => console.log(err))

}

function unCheckedBox (data){
    const update = {
        completed:false
    }
    axios.put("https://api.vschool.io/davidfrohlich/todo/"+data, update)
        .then(res => getData())
        .catch(err => console.log(err))
}


// FORM FOR THE POST REQUEST
const todoForm = document["todo-form"]

todoForm.addEventListener("submit", e=>{
    e.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value,
        imgUrl: todoForm.imgUrl.value
    }
    
    todoForm.title.value = ""
    todoForm.description.value = ""
    todoForm.price.value = ""
    todoForm.imgUrl.value = ""
    
    axios.post("https://api.vschool.io/davidfrohlich/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})