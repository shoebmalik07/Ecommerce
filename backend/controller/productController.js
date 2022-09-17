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
// @route GET '/api/products/:id'
// @access public

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

//@desc delete a product
//@route  DELETE '/api/products/:id'
//@access private/admin

const deleteProduct = asyncHandler(async(req,res)=>{
  const product = await Product.findById(req.params.id)

  if(product){
    await product.remove()
    res.json({message: 'Product removed'})
  }else{
    res.status(404)
    throw new Error('product not found')
  }
})

//@desc create a product
//@route POST /api/products
//access private/admin

const createProduct = asyncHandler(async(req,res)=>{
  const product = new Product({
    name:'Sample product',
    price:0,
    user:req.user._id,
    image:'/image/sample.jpg',
    brand:'Sample brand',
    category:'Sample category',
    countInStock:0,
    numReviews:0,
    description:'Sample description'
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

//@desc update product
//route PUT /api/products/:id
//access private/admin

const updateProduct = asyncHandler(async(req,res)=>{
  const {name,price,image,description,brand,category,countInStock,} = req.body

  const product = await Product.findById(req.params.id)
  if(product){
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save()
    req.json(updatedProduct)
  }else{
    res.status(404)
    throw new Error('product not found')
  }
})



export {getProductById, getProducts, deleteProduct,createProduct, updateProduct}