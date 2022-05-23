
var headTitle = document.getElementById("header")
headTitle.textContent = "JavaScript Made This!!"
headTitle.style.textAlign = "center"
headTitle.style.fontSize = "40px"

const subTitle = document.createElement("p")
subTitle.textContent = "David Frohlich"
subTitle.style.fontSize = "20px"
subTitle.style.color = "red"
headTitle.append(subTitle)

const extraTitle = document.createElement("span")
extraTitle.textContent = " wrote the Javascript"
extraTitle.style.fontSize = "20px"
extraTitle.style.color = "black"
subTitle.append(extraTitle)

document.getElementsByClassName("messages")[0].setAttribute("id", "messages")

let messagesLeft = document.getElementsByClassName("message left")
let messagesRight = document.getElementsByClassName("message right")
let messages = document.getElementById('messages');

messagesLeft[0].textContent = "Hello Friend"
messagesRight[0].textContent = "Hello Friend"
messagesLeft[1].textContent = "You are really awesome"
messagesRight[1].textContent = "Thanks so much! You are too"



document.getElementById("clear-button").addEventListener("click", function(){
    while (messages.firstChild) {
        messages.removeChild(messages.firstChild)
    }
})

document.getElementById("theme-drop-down").addEventListener("change", function(){
    if (this.value === "theme-one"){
        let themesLeft = document.querySelectorAll(".left")
        for (var i = 0; i < themesLeft.length; i++){
            themesLeft[i].style.backgroundColor = "burlywood"
            themesLeft[i].style.color = "black"
        }
        let themesRight = document.querySelectorAll(".right")
        for (var i = 0; i < themesRight.length; i++){
            themesRight[i].style.backgroundColor = "lightblue"
            themesRight[i].style.color = "black"
        }
    }

        else if (this.value === "theme-two"){
            let themesLeft = document.querySelectorAll(".left")
            for (var i = 0; i < themesLeft.length; i++){
                themesLeft[i].style.backgroundColor = "black"
                themesLeft[i].style.color = "white"
            }
            let themesRight = document.querySelectorAll(".right")
            for (var i = 0; i < themesRight.length; i++){
                themesRight[i].style.backgroundColor = "red"
                themesRight[i].style.color = "black"
            }
        }
})

const message = document.message
let counter = 0

message.addEventListener("submit", function(event){
    event.preventDefault()
    if (counter%2 === 0){
        const first = document.createElement("div")
        first.className = "message left"
        first.textContent = message.input.value
        document.getElementsByClassName("messages")[0].append(first)
    }
    else if (counter%2 === 1){
        const first = document.createElement("div")
        first.className = "message right"
        first.textContent = message.input.value
        document.getElementsByClassName("messages")[0].append(first)
    }
    counter++
    message.input.value = ""
})

