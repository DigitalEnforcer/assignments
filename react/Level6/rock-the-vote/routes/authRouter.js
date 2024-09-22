const express = require('express')
const authRouter = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

authRouter.post('/signup', async(req, res, next) =>{
    try {
        const user = await User.findOne({username: req.body.username})  //checking to see if username is already taken
        if(user){
            res.status(403)
            return next(new Error('Username is already taken'))
        }
        const newUser = new User(req.body)                              // entering rec.body info into the User Schema
        const savedUser = await newUser.save()                          // saving the new User into the database
        const token =jwt.sign(savedUser.withoutPassword(), process.env.SECRET) // token requires the savedUser information and the 4 word password from the SECRET file to create a unique token
        return res.status(201).send({user: savedUser.withoutPassword(), token: token})    // confused as to where "user" is being pulled from

    } catch (error) {                                                   // standard error reporting process
        res.status(500)
        return next(error)
    }
})

authRouter.post('/login', async(req, res, next)=>{
    try {
        const user = await User.findOne({username: req.body.username})  // checking to see if the username is in the database and importing ALL of the information into user
        console.log(user)
        if (!user) {                                                    // if user variable is empty, then it didn't pull a user from the database
            res.status(403)
            return next (new Error("Incorrect Username or Password"))
        }

        const passwordCheck = await user.checkPassword(req.body.password)
        if (!passwordCheck){                                            // checking to see if the password matches what's being pulled from the database after it's been hashed
            res.status(403)
            return next(new Error("Incorrect Username or Password"))
        }
        const token = jwt.sign(user.withoutPassword(), process.env.SECRET)     // creating the token for the newly logged in user / while also deleting the password
        return res.status(201).send({user: user.withoutPassword(), token})                      // sends back the full user information plus the token
    } catch (error) {
        res.status(500)
        return next(error)
    }
})
module.exports = authRouter