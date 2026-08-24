//name description, image

import mongoose, { Document } from "mongoose";

//interface
interface ICategoryDocument extends Document {
    name:string;
    description:string;
    image:string;
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
        type:String,
        required:[true,"category image is required"],
    },
}
 , { timestamps: true });

 //model
 const Category = mongoose.model<ICategoryDocument>("Category", categorySchema);
 export default Category;