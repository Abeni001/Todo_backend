import mongoose, { Mongoose } from "mongoose";

const todoSchema = new mongoose.Schema({

    text:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    }
})

const Todo = mongoose.model('Todo',todoSchema)
export default Todo