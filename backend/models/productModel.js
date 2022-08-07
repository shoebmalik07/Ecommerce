import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required:true,
        },
        name:{
            type: String,
            required:true,
        },
        comment:{
            type:String,
            required:true,
        },
        rating:{
            type:String,
            required:true,
        },
    },
    {timeStamps:true}
);

const productSchema = mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required:true,
        },
        name:{
            type:String,
            required:true,
        },
        brand:{
            type:String,
            required:true,
        },
        image:{
            type:String,
            required:true,
        },
        category:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        rating:{
            type:Number,
            required:true,
            default:0,
        },
        numReviews:{
            type:Number,
            required:true,
            default:0,
        },
        countInStock:{
            type:Number,
            required:true,
            default:0,
        },
        price:{
            type:Number,
            required:true,
     
        },
        reviews : [reviewSchema]
    },

)


const Product  = mongoose.model('Product', productSchema)

export default Product