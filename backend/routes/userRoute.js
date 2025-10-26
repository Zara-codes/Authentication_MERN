import express from "express"
import { registerUser, verifcation } from "../controllers/userControllers.js"

const router = express.Router()


router.post('/register', registerUser)
router.post('/verify', verifcation)


export default router