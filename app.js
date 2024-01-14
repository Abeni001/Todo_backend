import express from "express";
import todoRoute from './routes/todoRoute.js'
import mongoose from "mongoose";
import {PORT} from './key.js'
import {MONGO_URI} from './key.js'
const app = express()

app.use(express.json())  // considered as middleware it will change the request to json

mongoose.connect(MONGO_URI).then(()=>console.log('connected to db'))
.catch((e)=>console.log('some error',e))


app.use('/api/v1/todo',todoRoute)

app.listen(PORT,()=>{
    console.log('running on '+PORT)
})