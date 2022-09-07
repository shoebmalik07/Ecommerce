import express from "express";
import { addOrderItems, getOrderById, updateOrderToPaid} from "../controller/orderController.js";
import {protect} from '../middleware/authMIddleware.js'

const router = express()


router.route('/').post(protect,addOrderItems)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)

export default router