import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
// import user from '../models/userModel.js' 


const authUser  = asyncHandler(async(req,res)=>{
  const {email,password} = req.body

  const user = await User.findOne({email})
  // console.log(user)

  if(user && (await user.matchPassword(password))){
    res.json({
      _id :  user._id,
      name : user.name,
      email:user.email,
      isAdmin : user.isAdmin,
      // password: user.password,
      token: null,
    }

    )
  }else{
      res.status(401)  // unAuthorized
      throw new Error ('Invalid email or password')
  }




})

export {authUser}