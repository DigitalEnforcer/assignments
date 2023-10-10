
const readlineSync = require("readline-sync")

// let answer = (Math.random())*10
// console.log (answer)

const namePicked = ["Mario", "Luigi"]

class Player {
     constructor (){
        this.name = "",
        this.totalCoins = 0,
        this.status = "small",
        this.hasStar = false,
        this.gameActive = true
     }
     setName(){
        //you can use readlineSync's keyInSelect method to choose between mario and luigi
        //example:
        const names = readlineSync.keyInSelect(namePicked)
        //conditional statement stating if names === 0 , return this.name = "Mario", else if names === 1, return this.name = "Luigi"
        if(names === 0) {
            this.name = "Mario"
        }else if(names === 1){
            this.name = "Luigi"
        }
     }

     gotHit(){
        if (this.hasStar === true){
            this.hasStar = false; 
            console.log ("Your Star protected you!") //need to console log this status somewhere
        } else if (this.status === "small"){
            this.status = "Dead"
        } else if (this.status === "Big"){
            this.status = "small"
        } else if (this.status === "Powered Up"){
            this.status = "Big"
        }
        if (this.status === "Dead"){
            this.gameActive = false;
        }
     }
     gotPowerup(){
        if (this.status === "Powered Up" && this.hasStar === false){
            this.hasStar = true
            console.log ("Congratulations! You got a Star!")
            //console.log (this.hasStar)
        } else if (this.status === "Big"){
            this.status = "Powered Up"
        } else if (this.status === "small"){
            this.status = "Big"
        }
     }
     addCoin(){
        this.totalCoins ++
     }

     print(){
        console.log(`Name: ${this.name}`)
        console.log(`Status: ${this.status}`)
        console.log(`Total Coins: ${this.totalCoins}`)
        if (this.hasStar === true){
        console.log(`You have a Star`)
        }
     }

 }

 function generateRandomInteger() {
    return Math.floor(Math.random() * 3);
  }


const character = new Player()
 //grabbing player name
character.setName()



 //create a function called startGame(or whatever variable you want to give it)
function startGame (){
    let battleNumber = generateRandomInteger()
    //console.log (battleNumber)
    if (battleNumber === 0){
        character.gotHit()
    } else if (battleNumber === 1){
        character.gotPowerup()
    } else if (battleNumber === 2){
        character.addCoin()
    }
    character.print()
    if (character.gameActive === false){
        console.log (`Oh no... ${character.name} has died. Game Over`)
        clearInterval(intervalId)
    }
    console.log("\n")

}
 //set interval goes outside of function
 
 let intervalId = setInterval(startGame, 1000)

 
 