import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true, 
        select:false
    }
})

// hashing password in model is best exercise for data abstraction and it's considered as middleware

userSchema.pre('save',async function(next){
    console.log('entering here')
    if(!this.isModified("password"))   //Hash the password only if it's modified or is new
        return next()
    this.password = await bcrypt.hash(this.password,12)
        next()
})

const User = mongoose.model('User',userSchema)

export default User