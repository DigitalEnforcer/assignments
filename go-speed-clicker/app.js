let countdown = 10
let totalClicks = 0
let previousTotal = localStorage.getItem("clicks")

let time = setInterval(function(){
    document.getElementById("counter").textContent = countdown
    console.log(countdown);
    countdown -= 1
 }, 1000);

    
console.log("totalClicks = " + totalClicks)
console.log("previousTotal = " + previousTotal)


const btn2 = document.getElementById("clicker")
btn2.addEventListener('click', function(){
    if (countdown >= 0){
        totalClicks += 1
        let finalClicks = totalClicks + Number(previousTotal)
        console.log("totalClicks = " + totalClicks)
        console.log("previousTotal = " + previousTotal)
        console.log(`You have clicked ${finalClicks} times`);
        document.getElementById("clickDisplay").textContent = finalClicks;
        localStorage.setItem("clicks", finalClicks)
    }
   
})

function stopTime(){
    clearInterval(time)
 }

setTimeout(stopTime,  11000)


const btn = document.getElementById("button")
btn.addEventListener("click", function(){
    localStorage.removeItem("clicks")
    finalClicks = 0;
    totalClicks = 0;
    previousTotal = 0;
    console.log("All Clear")
})



 


