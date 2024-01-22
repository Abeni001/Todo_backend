import express from "express";
import { getAllTodos,store,show,destroy,update } from "../controllers/todoController.js";
const router = express.Router()

router.route('/')
                .get(getAllTodos)
                .post(store)

router.route('/:id')
                    .get(show)
                    .put(update)
                    .delete(destroy)

export default router