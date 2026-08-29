// cart:
//user:
//items:[{product:product_id,quantity:number}]

import mongoose from "mongoose";

interface ICartItem{
        product: mongoose.Types.ObjectId;
        quantity: number;  
}
interface ICartDocument extends Document {
    user: mongoose.Types.ObjectId;
    items: ICartItem[];
}
const cartItemSchema= new mongoose.Schema<ICartItem>({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true,"product id is required"],
        ref:"Product",
    },
    quantity:{
        type:Number,
        required:[true,"quantity is required"],
        min:[1,"quantity must be at least 1"],
        default:1,
    },
},{_id:false});

const cartSchema= new mongoose.Schema<ICartDocument>({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:[true,"user id is required"],
        unique:true,
    },
    items:{
        type:[cartItemSchema],
        default:[],
    },
},{timestamps:true});

const Cart= mongoose.model<ICartDocument>("Cart",cartSchema);
export default Cart;




