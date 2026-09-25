//name description price brand category cover_iamge(1) multiple images

import mongoose, {Document } from "mongoose";
import { IImage } from "../types/global.types";
import imageSchema from "./image.model";

interface IProductDocument extends Document{
    name:string;
    price:number;
    description:string;
    stock:number;
    cover_image: IImage;
    images: IImage[];
    brand:mongoose.Types.ObjectId;
    category:mongoose.Types.ObjectId;
    is_featured?:boolean;
    new_arrival?:boolean;
}

//schema
const productSchema= new mongoose.Schema<IProductDocument>(
    {
        name:{
            type:String,
            required:[true,"product name is required"],
        },
        description:{
            type:String,
            required:[true,"product description is required"],
            minlength:[25,"product description must be at least 10 characters"],

        },
        price:{
            type:Number,
            required:[true,"product price is required"],
            min:0,
        },
        stock:{
            type:Number,
            required:[true,"product stock is required"],
            min:1,
        },
        cover_image:{
            type:imageSchema,
            required:[true,"product cover image is required"],
        },
        images:{
            type:[imageSchema],
            required:[true,"product images are required"],
        },
        brand:{
            type:mongoose.Schema.Types.ObjectId,
            required:[true,"product brand is required"],
            ref: 'Brand', //This name should exactly match the model's name.
        },
        //we reference the category id here;one category many products
        //reference is passed here like ref:''
        category:{
            type:mongoose.Schema.Types.ObjectId,
            required:[true,"product category is required"],
            ref: 'Category',
        },
        is_featured:{
            type:Boolean,
            default:true,
        },
        new_arrival:{
            type:Boolean,
            default:true,
        },
    },
    { timestamps: true }
);

//model
const Product = mongoose.model<IProductDocument>("Product", productSchema);
export default Product;
