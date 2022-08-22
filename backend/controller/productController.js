import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc fetch products
// @route GET  '/api/products'
// @access  public

const getProducts =  asyncHandler(async (req, res) => {
  const products = await Product.find({})           // ROUTE HANDLER
  res.json(products)

})

// @desc fetch productById
// @ route GET '/api/products/:id'
// access public

const getProductById = asyncHandler(async (req, res) => {
  try {
      const product = await Product.findById(req.params.id)

      if (product) {
          res.json(product)
      } else {
          res.status(404).json({ messsage: 'product not found' })
      }
  } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'something went wrong' })
  }
})

export {getProductById, getProducts}