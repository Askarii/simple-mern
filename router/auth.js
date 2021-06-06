import express, {Router} from 'express'
import {ConnectionDb} from '../database/db.js'
import User from '../models/userSchema.js'
const routes = Router()

ConnectionDb()
routes.get('/',  (req, res, next) => {
    console.log("Hello world")
})

routes.post('/register', async (req, res, next) => {
    const {name, email, password, passwordConfirm, work, phone} = req.body

    if(!name || !email || !password || !passwordConfirm || !work || !phone) {
        return res.status(422).json({error: "Please Fill the field"})
    }

    try {
        const userExist = await User.findOne({email})

        if(userExist) {
            return res.status(422).json({error: "Email already exist"})
        }
        const user = new User({name, email, work, phone, password, passwordConfirm})
        const userRegister = await user.save()

        if(userRegister) {
            return res.status(200).json({message: "User successfully registered"})
        }
    }catch (err) {
        console.log(err)
    }

})

export default routes;
