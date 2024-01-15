import User from "../models/user";

export const store =async(req,res)=>{
    const {name,email,password} = req.body

    if(!name||!email||!password){
        return res.status(422).json({
            'message':'please enter useful information like email,password and name'
        })
    }
    try{
        const user = await User.create({name,password,email})
        return res.status(201).json({
            'data':user
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
        if(user.password != password){
            return res.status(404).json({
                'message':'invalid email or password'
            })
        }
        return res.status(200).json({
            'message':"succesfully logged in"
        })

    }
    catch{
        return res.status(400).json({
            'message':'some error occured try agian'
        })
    }
}