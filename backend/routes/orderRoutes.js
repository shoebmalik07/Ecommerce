import express from "express";
import { addOrderItems, getOrderById} from "../controller/orderController.js";
import {protect} from '../middleware/authMIddleware.js'

const router = express()


router.route('/').post(protect,addOrderItems)
router.route('/:id').get(protect, getOrderById)

export default router