import jwt  from "jsonwebtoken"
import { SECRET_STR } from "../key.js"
import User from "../models/user.js"

export const authMiddleware = (req,res,next)=>{
    //protects the authorized routes
    const testToken = req.headers.authorization
    let token 

    if(testToken && testToken.startsWith('Bearer')){
        token = testToken.split(' ')[1]      //splitting to get the token only  
    }

    if(!token){
        return res.status(400).json({'message':"you are not logged in"})   
    }

    jwt.verify(token,SECRET_STR,async(err,decoded)=>{
        if(err){
            return res.status(401).json({'message':"you must be logged in"})   
        }
        try{
            const{ id } = decoded
            const user = await User.findById(id)
            if(!user){
                return res.status(401).json({'message':"you must be logged in"})   
            }
            req.user = user
            next()
        }catch(e){
            return res.status(400).json({'message':"something went wrong"})    
        }
    })

}