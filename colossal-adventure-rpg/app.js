const readline = require("readline-sync");
let player = {
    userName: "",
    hp: 100,
    inventory: []
}
let runAway = false;

console.log ("Welcome to the Wild World of a Bored Teenager")
player.userName = readline.question ("What shall your name be, adventurer? ")

while (player.hp > 0){
    whatToDo()
    runAway = false;
    if (player.inventory.indexOf(" Colossal's Heart ") !== (-1)){
        console.log("Would you like to use the Colossal's Heart to rid this world of all evil?")
        let finalMission = readline.keyIn("(Y)es or (N)o? ", {limit:'yn'})
        if ((finalMission === "y") || (finalMission === "Y")){
            console.log("You lift the heart to the skies and it glows with a reddish hue. It lifts from your hands higher into the sky until you can barely see it anymore. KABOOOOM! An explosion erupts in the sky as it rains down burning hot coals onto every enemy in the region. They all fall to the ground and wither away and then you realize it is finished. All of your hard work has come to an end. You are no longer needed in this world. You drink what potions you have left and lay your head on the nearest rock. 'I'm Finally Done...' you murmur as you fall fast asleep.")
            break
        }
        else {
            console.log("The Heart of the Colossal begins to seep black liquid. It slowly pours out from the cracks and covers your hands as you hold it. You begin to feel horrible and wish that you didn't make such a horrible decision to keep the heart. The poison spreads throughout your body and you lose \x1b[31m300 HP\x1b[0m");
            player.hp = player.hp - 300;
        }
    }
    if (player.hp <= 0){
        deathScreen()
    }
 }

//Asks the User what they would like to do next
function whatToDo (){
    let direction = readline.keyIn ('(W)alk, (R)estore Health, Check (I)nventory or (P)layer Status: ', {limit:'wrip'})
    
    if ((direction === "w") || (direction === "W")){
        console.log("You decide to continue walking...")
        let walkingNumber = Math.random();
        if (walkingNumber >= 0.75){
            fight();
        }
        else if (walkingNumber <= 0.25){
            console.log("As you travel you notice a village up ahead full of very loud children. You run through the crowd of kids and tap each one of them on the head. 'Please be quiet', you say as you take their candy from their little hands. You continue on your way.")
            console.log("You gain \x1b[32m5 HP!\x1b[0m");
            console.log("");
            player.hp = player.hp + 5;
        }
        else {
            console.log("You come upon a beautiful blue lake. There's trees lining the edges and birds drinking from the water. You decide to run through the hundreds of birds and laugh as they all take flight. You kneel next to the lake and take a sip of the divine waters that touch your lips.");
            console.log("You gain \x1b[32m5 HP!\x1b[0m");
            console.log("");
            player.hp = player.hp + 5;
        }

    }
    else if ((direction === "r") || (direction === "R")){
        useItem()
    }
    else if ((direction === "i") || (direction === "I")){
        console.log("Here is what's in your inventory: " + player.inventory)
    }
    else if ((direction === "p") || (direction === "P")){
        console.log(player)
    }
}

//Fight and Attack
function fight(){
    let fightNumber = Math.random()
        if (fightNumber >= 0.7){
            console.log("You encounter a \x1b[31mZombie\x1b[0m. He looks at you with distain and readies to attack");
            zombie();

        }
        else if (fightNumber <= 0.5){
            console.log("You stumble across a \x1b[31mVenomous Snake\x1b[0m lurking in the grass. It notices you and stands up ready to attack!");
            venomSnake();

        }
        else {
            console.log("A \x1b[31mColossal Giant\x1b[0m rises from the earth beneath and towers over you. With a quick stomp, he smashes you into the ground with a thud. You lose \x1b[31m25 HP\x1b[0m immediately. You get back up from the surprise attack and ready yourself...");
            player.hp = player.hp - 25;
            giant();
        }

}

//This is your attack menu and redirects where the program should go next
function attackOptions (enemyHealth, enemyName){
    console.log("What will you do? ")
    let decision = readline.keyIn ('(A)ttack, (R)un, or (U)se Potion Item: ', {limit:'aru'})
    if ((decision === "u") || (decision === "U")){
        useItem();
        return enemyHealth;
    }
    else if ((decision === "a") || (decision === "A")){
        let damage = Math.floor(Math.random()*(25-10 + 1))+10
        if (damage > 20){
            console.log("You shoot the \x1b[31m" + enemyName + "\x1b[0m with a\x1b[36m Kamehameha Blast\x1b[0m and do \x1b[31m" + damage + " damage\x1b[0m.");
        }
        else {
            console.log("You hit the \x1b[31m" + enemyName + "\x1b[0m with a\x1b[36m Hard Slash\x1b[0m and do \x1b[31m" + damage + " damage\x1b[0m.");
        }
        return (enemyHealth - damage);
    }
    else if ((decision === "r") || (decision === "R")){
        let runOdds = Math.random()
        if (runOdds > 0.5){
            runAway = true;
            console.log("You successfully run away, but just before you're out of reach...")
            return enemyHealth;
        }
        console.log ("You failed to get away because you tripped.");
        return enemyHealth;
    }
}



//Player Uses a potion item -- Must make it subtract a potion from the inventory
function useItem(){
    const index = player.inventory.indexOf(" potion ")
    if (index !== (-1)){
        console.log("You use 1 potion from your inventory and it restores \x1b[32m40 HP\x1b[0m. You feel rejuvinated from the Berry Punch Liquid");
        player.hp = player.hp + 40;
        player.inventory.splice(index, 1)
        console.log("You have \x1b[32m" + player.inventory.length + " potions\x1b[0m left.")
    }
    else console.log("You don't have any potions to restore your health. Guess you should save some next time...")
}

//Giant Enemy - add Colossal's Heart to Inventory
function giant(){
    let giantEnemy = 400;
    let giantName = "Colossal the Giant"
    while ((giantEnemy > 0) && (runAway === false)){
        giantEnemy = attackOptions(giantEnemy, giantName);
        if (giantEnemy <= 0){
            console.log("With the final blow to \x1b[31m" + giantName + "\x1b[0m, it comes crashing down to the earth with a thunderous boom. No longer will the people be tormented by this horrible monster.")
            console.log("You see a glowing ember from the giant's chest and use your sword to dig it out. You have found \x1b[32mColossal's Heart!\x1b[0m");
            player.inventory.push(" Colossal's Heart ");
            break
        }
        if (runAway===false){
            console.log ("The \x1b[31m"+ giantName+"\x1b[0m has " + giantEnemy + " HP left.");
        }
        let enemyDamage = Math.floor(Math.random()*(35-10 + 1))+10
        player.hp = player.hp - enemyDamage;
        if (enemyDamage > 30){
            console.log (giantName + " uses Colossal Smash! You lose \x1b[31m" + enemyDamage + " HP\x1b[0m")
            if (player.hp > 0){
                console.log ("You have \x1b[32m" + player.hp + " HP\x1b[0m left")
            }
        }
        else {
            console.log (giantName + " uses Big Stomp! You lose \x1b[31m" + enemyDamage + " HP\x1b[0m")
            if (player.hp > 0){
                console.log ("You have \x1b[32m" + player.hp + " HP\x1b[0m left")
            }
        }
        if (player.hp <= 0){
            break
        }
        
    }
    
}

//Zombie Enemy - adds potion to inventory
function zombie(){
    let zombieEnemy = 60;
    let zombieName = "Blood-Thirsty Zombie"
    while ((zombieEnemy > 0) && (runAway === false)){
        zombieEnemy = attackOptions(zombieEnemy, zombieName);
        if (zombieEnemy <= 0){
            console.log("You defeat the \x1b[31m" + zombieName + "\x1b[0m and wipe the blood from your sword.")
            console.log("You find \x1b[32m1 health potion\x1b[0m. You quickly put the potion in your bag before anyone notices.");
            player.inventory.push(" potion ");
            break
        }
        if (runAway===false){
            console.log ("The \x1b[31m" + zombieName + "\x1b[0m has " + zombieEnemy + " HP left.");
        }
        let enemyDamage = Math.floor(Math.random()*(10-2 + 1))+2
        player.hp = player.hp - enemyDamage;
        if (enemyDamage > 8){
            console.log ("The \x1b[31m" + zombieName + "\x1b[0m uses Ravenous Bite! You lose \x1b[31m" + enemyDamage + " HP\x1b[0m")
            if (player.hp > 0){
                console.log ("You have \x1b[32m" + player.hp + " HP\x1b[0m left")
            }
        }
        else {
            console.log ("The \x1b[31m" + zombieName + "\x1b[0m uses Claw Slash! You lose \x1b[31m" + enemyDamage + " HP\x1b[0m")
            if (player.hp > 0){
                console.log ("You have \x1b[32m" + player.hp + " HP\x1b[0m left")
            }
        }
        if (player.hp <= 0){
            break
        }
        
    }
    
}

//Snake Enemy - adds potion to inventory
function venomSnake(){
    let snakeEnemy = 50;
    let snakeName = "Slitherin Snake";
    while ((snakeEnemy > 0) && (runAway === false)){
        snakeEnemy = attackOptions(snakeEnemy, snakeName);
        if (snakeEnemy <= 0){
            console.log("You defeat the Mighty \x1b[31m" + snakeName + "\x1b[0m and watch as it slowly dies.")
            console.log("You find \x1b[32m1 health potion\x1b[0m. You jump for joy and drop the potion into you bag.");
            player.inventory.push(" potion ");
            break
        }
        if (runAway === false){
            console.log ("The \x1b[31m" + snakeName + "\x1b[0m has " + snakeEnemy + " HP left.");
        }
        let enemyDamage = Math.floor(Math.random()*(10-2 + 1))+2
        player.hp = player.hp - enemyDamage;
        if (enemyDamage > 8){
            console.log ("The \x1b[31m" + snakeName + "\x1b[0m uses poisonous bite! You lose \x1b[31m" + enemyDamage + " HP\x1b[0m")
            if (player.hp > 0){
                console.log ("You have \x1b[32m" + player.hp + " HP\x1b[0m left")
            }
        }
        else {
            console.log ("The \x1b[31m" + snakeName + "\x1b[0m uses quick strike! You lose \x1b[31m" + enemyDamage + " HP\x1b[0m")
            if (player.hp > 0){
                console.log ("You have \x1b[32m" + player.hp + " HP\x1b[0m left")
            }
        }
        if (player.hp <= 0){
            break
        }
        
    }
    
    
}

//Ending story after you die
function deathScreen (){
console.log(player.userName, "dies a horrible death. With no one left to fend off the bloodthirsty horde of monsters and defeat the \x1b[31mMighty Colossal\x1b[0m, the world plunges deep into darkness and despair.")
console.log("Maybe next time,",player.userName +", you can try and fight a little harder...")
}