const readline = require("readline-sync");
const name = readline.question("What is your name? ");

//Story Time
console.log("")
console.log("You wake to find yourself in a dark gloomy room. There are no windows and the only light emminating from the room is from a lit candle sitting on a table located in the middle of the room. You don't remember how you got here or what led to your situation. Looking around you see a dark hole in one of the walls. It's big enough to fit your hand in, but nothing else. You hear whispers coming from the hole.")
console.log("")
console.log('Behind you there is a metal door with symbols written all over it. Looking closer you notice a door handle and a keyhole in the bottom left corner covered in spider webs. "Maybe there is a hidden key somewhere", you think to yourself.')
console.log("")
let inventory = [];
let win = 0

function response (){
    console.log("")
    console.log("Here are your options:")
    console.log("")
    console.log("[1] Put your hand in the hole")
    console.log("[2] Search for the Key")
    console.log("[3] Open the Door")
    const result = readline.question("What would you like to do? ")
    console.log("")
    return result
}

while (win === 0){
const answer = response()

if (answer === "1"){
    console.log (name, "walks over to the hole and peers in. The whispers get louder the closer",name,"gets. Suddenly a black slimes emerges from the hole and swallows",name,"right up.")
    console.log(name,"is DEAD.")
    win = 1
} else if (answer === "2"){
    if (inventory[0] === "key"){
        console.log(name,"searches the area again, but finds nothing new.")
    } else {
    console.log (name, "searches the room for any sign of the key. Looking closer at the candle,",name,"notices something under it. Picking up the candle reveals a key taped to the bottom.",name,'takes the key and thinks, "This has to be for that weird door!"')
    console.log("")
    console.log ("You have gained the Skeleton Key")
    inventory.push("key")
    console.log(inventory)
    }
} else if (answer === "3"){
    if (inventory[0] === "key"){
        console.log (name,"pulls out the key and slips it into the door lock. The key begins to glow as it turns slowly to the right on it's own.",name,"steps back as the door opens on it's own to reveal a sunny beach on the other side.",name,"takes a deep breath and walks through the door while feeling extremely proud for figuring out this complicated puzzle.")
        console.log(name,"has escaped. Congratulations!")
        win = 1;
    }
    else {
        console. log (name,'tries the door handle, but it is locked."There must be another way...",',name,"thinks.")
    }
}
}
    