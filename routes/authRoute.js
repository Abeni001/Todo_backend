import express from 'express'
import { signIn, store } from '../controllers/authController'
const router = express.Router()

router.route('/sign-up').post(store)
router.route('/login').post(signIn)

export default router