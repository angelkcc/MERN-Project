import mongoose from "mongoose";
//user: user_id, product: product_id


interface IWishListDocument extends mongoose.Document{
    user:mongoose.Types.ObjectId;
    product:mongoose.Types.ObjectId;
}
const wishListSchema= new mongoose.Schema<IWishListDocument>(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            required:[true,"user id is required"],
            ref:"user",
        },
        product:{
            type:mongoose.Schema.Types.ObjectId,
            required:[true,"product id is required"],
            ref:"Product",
        }

},
{timestamps:true}
);
const WishList= mongoose.model<IWishListDocument>("WishList",wishListSchema);
export default WishList;

