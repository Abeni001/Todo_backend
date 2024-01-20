import express from "express";
import { getAllTodos,store,show,destroy,update } from "../controllers/todoController.js";
import { authMiddleware } from "../middlewares/auth.js";
const router = express.Router()

router.route('/')
                .get(getAllTodos)
                .post(authMiddleware,store)

router.route('/:id')
                    .get(show)
                    .put(authMiddleware,update)
                    .delete(authMiddleware,destroy)

export default router