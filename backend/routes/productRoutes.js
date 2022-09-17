import express from 'express'
import { deleteProduct, getProductById, getProducts } from '../controller/productController.js'
import {protect, admin} from '../middleware/authMIddleware.js'

const router = express.Router()

router.route('/').get(getProducts)

router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct)

export default router