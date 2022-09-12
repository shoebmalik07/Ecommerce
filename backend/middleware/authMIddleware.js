import  jwt  from "jsonwebtoken";
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'


const protect = asyncHandler(async(req,res,next)=>{
  let token;
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decoded.id).select('-password')
      next()
    } catch (error) {
      console.log(error)
      throw new Error('Not Authorized, token failed ')
    }
  }else{
    throw new Error('No token found')
  }
})

const admin =(req,res,next)=>{
  if(req.user && req.user.isAdmin){
    next()
  }else{
    res.status(401) //unauthorized
    throw new Error('not authorized. only for admin users.')
  }
}

export {protect, admin}