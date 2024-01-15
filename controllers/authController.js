import User from "../models/user.js";
import bcrypt from 'bcryptjs'
import jwt  from "jsonwebtoken";
import { SECRET_STR } from "../key.js";

const generateToken =(id)=>{
  return jwt.sign({id},SECRET_STR)
}

export const store =async(req,res)=>{
    const {name,email,password} = req.body

    if(!name||!email||!password){
        return res.status(422).json({
            'message':'please enter useful information like email,password and name'
        })
    }
    try{
        const user = await User.findOne({email})
        if(user){
            return res.status(409).json({
                'message':"this email is already registered here"
            })
        }
        // hashing password on model file is best exercise
        await User.create({name,password,email})
        return res.status(201).json({
            'message':"Successfully signed up"
        })
    }catch{
        return res.status(400).json({
            'message':'some error occured try agian'
        })
    }
}

export const signIn=async(req,res)=>{
    const {email,password} = req.body
    if(!email||!password){
        return res.status(422).json({
            'message':'please enter useful information email and password'
        })
    }
    try{
        const user = await User.findOne({email}).select("+password")
        if(!user){
            return res.status(404).json({
                'message':'invalid email or password'
            })
        }
        const passwordMatch = await bcrypt.compare(password,user.password)
        if(!passwordMatch){
            return res.status(404).json({
                'message':'invalid email or password'
            })
        }
        const clearUser = {...user.toObject()}
        delete clearUser.password
        const token = generateToken(user._id)
        return res.status(200).json({
            'message':"succesfully logged in",
            'user':clearUser,
            'token':token
        })

    }
    catch(e){
        return res.status(400).json({
            'message':'some error occured try agian'
        })
    }
}