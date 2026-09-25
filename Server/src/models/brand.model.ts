//name description, logo


import mongoose, { Document } from "mongoose";
import imageSchema from "./image.model";

//interface
interface IBrandDocument extends Document {
    name:string;
    description:string;
    logo: {
     path: string;
     public_id: string;
};
}

//schema
const brandSchema= new mongoose.Schema<IBrandDocument>
({
    name:{
        type:String,
        required:[true,"brand name is required"],
        unique:[true,"brand name must be unique"],
        minlength:[3,"brand name must be at least 3 characters"],
        trim:true,

    },
    description:{
        type:String,
        required:[true,"brand description is required"],
        minlength:[10,"brand description must be at least 10 characters"],
        trim:true,
    },
    logo: {
        type: imageSchema,
        required:[true,"brand image is required"],
        default: null,
},
}
 , { timestamps: true });

 //model
 const Brand = mongoose.model<IBrandDocument>("Brand", brandSchema);
 export default Brand;