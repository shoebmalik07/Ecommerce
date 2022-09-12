import express from 'express'
import { authUser, getUserProfile, getUsers, registerUser, updateUserProfile } from '../controller/userController.js'
import { protect, admin } from '../middleware/authMIddleware.js'

const router = express.Router()

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)

export default router