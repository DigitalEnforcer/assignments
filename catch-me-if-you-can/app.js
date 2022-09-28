// Example 1a,b

// function sum(num1, num2){
//     if ((typeof(num1) !== "number") || (typeof(num2) !== "number")){
//         throw new Error("You didn't enter a number")
//     }
//     else {
//         return num1 + num2
//     }
// }

// try {
//     sum(1, "2")
// }

//  catch(err) {
//      console.log(err)
// }

// Example 2

let user = {username: "sam", password: "123abc"};
function login(username, password){
    if ((username === user.username) && (password === user.password))
        console.log ("Login Successful")
    else {
        throw new Error("Your username and password don't match")
    }
}

try {
login("sam", "123abc")
}

catch (err){
    console.log(err)
}

try {
    login("sae", "123abc")
    }
    
    catch (err){
        console.log(err)
    }