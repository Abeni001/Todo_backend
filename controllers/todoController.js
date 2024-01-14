import Todo from "../models/todo.js"
export const getAllTodos =async(req,res)=>{
    try{
        const todos = await Todo.find()
        return res.status(200).json({
            'data':todos
        })
    }catch{
        return res.status(400).json({
            'message':'error occured'
        })
    }
}
export const show = async(req,res)=>{
    try{
        const {id} = req.params
    const todo = await Todo.find({_id:id})
    if(!todo){
        return res.status(404).json({
            'message':"this todo can't be found"
        })
    }

    return res.status(202).json({
        'data':todo
    })
    }catch{
        return res.status(400).json({
            'message':'error occured'
        })
    }
}
export const store =async(req,res)=>{
    try{
        const {text} = req.body
    if(!text){
        return res.status(422).json({
            'message':"text can't be empty"
        })
    }
    const todo = await Todo.create({text})
    return res.status(202).json({
        'data':todo
    })
    }catch(e){
        return res.status(400).json({
            'message':'error occured'
        })
    }
}

export const update =async(req,res)=>{
    try{
        const {id} = req.params
        const {text} = req.body
    if(!text){
        return res.status(422).json({
            'message':"text can't be empty"
        })
    }
    const todo = await Todo.findOneAndUpdate({_id:id},{text},{new:true}) // { new: true } returns the updated document
    if(!todo){
        return res.status(404).json({
            'message':"this todo can't be found"
        })
    }

    return res.status(202).json({
        'data':todo
    })
    }catch{
        return res.status(400).json({
            'message':'error occured'
        })
    }
}

export const destroy =async(req,res)=>{
    try{
        const {id} = req.params
    const todo = await Todo.findOneAndDelete({_id:id})
    if(!todo){
        return res.status(404).json({
            'message':"this todo can't be found"
        })
    }
    return res.status(202).json({
        'data':todo
    })
    }catch{
        return res.status(400).json({
            'message':'error occured'
        })
    }
}