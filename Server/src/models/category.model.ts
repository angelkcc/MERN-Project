//name description, image

import mongoose, { Document } from "mongoose";
import imageSchema from "./image.model";
import { IImage } from "../types/global.types";

//interface
interface ICategoryDocument extends Document {
    name:string;
    description:string;
    image:IImage;
}
mongoose.Types.ObjectId.isValid('')
//schema
const categorySchema= new mongoose.Schema<ICategoryDocument>
({
    name:{
        type:String,
        required:[true,"category name is required"],
        unique:[true,"category name must be unique"],
        minlength:[3,"category name must be at least 3 characters"],

    },
    description:{
        type:String,
        required:[true,"category description is required"],
        minlength:[10,"category description must be at least 10 characters"],
        trim:true,
    },
    image:{
        type: imageSchema,
        required:[true,"category image is required"],
        default: null,
    },
    },
  { timestamps: true });

 //model
 const Category = mongoose.model<ICategoryDocument>("Category", categorySchema);
 export default Category;