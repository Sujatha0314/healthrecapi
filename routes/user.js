const express = require('express')

const User = require('../models/user')
const userRouter = express.Router()
const bcrypt = require('bcrypt')

const saltRounds = 5

userRouter.post('/create', async(req, res) => {
    let name = req.body.name;
    let emailAddress = req.body.emailAddress
    let age = req.body.age
    let height = req.body.height
    let weight = req.body.weight
    let password = bcrypt.hashSync(req.body.password, saltRounds);
    try{
        const userByEmail = await User.findOne({emailAddress: emailAddress})
        if(userByEmail){res.status(200).send('user already exist')}
        else{
            const newUser = new User({
                name:name,
                emailAddress: emailAddress,
                password: password,
                age: age,
                height: height,
                weight: weight
            })
            await newUser.save()
            res.status(200).send('user created successfully')
        }  
    } catch(error) {
        res.status(400).send('error occured')
    }
})

userRouter.post('/authenticate', async(req, res) => {
    let emailAddress = req.body.emailAddress;
    let password = req.body.emailAddress;
    try{
        const user = await User.findOne({emailAddress:emailAddress})
        if(user){
            if(bcrypt.compareSync(password, user.password)){res.status(200).json({status:"success", data:user})} else { res.status(400).send('invalid credentials')}
        } else {
            res.status(400).send('user not found')
        }
    } catch (error) {
        res.status(500).json({message:error})
    }
})

module.exports = userRouter