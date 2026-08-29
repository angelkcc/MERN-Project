import Cart from "../models/cart.model";
import AppError from "../utlis/appError.utlis";
import { catchAsync } from "../utlis/catchAsync.utlis";
import sendResponse from "../utlis/sendResponse.utlis";
import Product from "../models/product.model";

//get cart by user id
export const getCart= catchAsync(async(req,res)=>{
    const {userId}= req.params;

    const cart = await Cart.findOne({
        user:userId,

    }).populate("items.product");
    if(!cart){
        throw new AppError("cart not found",404);
    }
    sendResponse(res,{
        message:"cart fetched",
        data:cart,
        statusCode:200,
    });
});

//add item to cart
export const addToCart= catchAsync(async(req,res)=>{
    const {userId}= req.params;
    const {productId,quantity}= req.body;

    const product= await Product.findById(productId);
    if(!product)
    {
        throw new AppError("product not found",404);
    }

    let cart = await Cart.findOne({user:userId});
    if(!cart){
        cart= new Cart({
            user:userId,
            items:[
                {
                    product:productId,
                    quantity:quantity||1,
                },
            ],
        });
    }else{
        const existingItem=cart.items.find(
            (item)=>item.product.toString()===productId,
        );
        if(existingItem){
            existingItem.quantity+=quantity||1;
        }else{
            cart.items.push({
                product:productId,
                quantity:quantity||1,
            });
        }
    }
    await cart.save();

    sendResponse(res,{
        message:"item added to cart",
        data:cart,
        statusCode:200,
    });
});

//remove product from cart
export const removeFromCart= catchAsync(async(req,res)=>{
    const {userId, productId}= req.params;

    const cart= await Cart.findOne({user:userId});

    if(!cart){
        throw new AppError("cart not found",404);
    }
    cart.items= cart.items.filter(
        (item)=>item.product.toString()!==productId,
    );
    await cart.save();
    sendResponse(res,{
        message:"item removed from cart",
        data:cart,
        statusCode:200,
    });
});

//update product quantity in cart
export const updateCartItem = catchAsync(async (req, res) => {
  const { userId, productId } = req.params;
  const { quantity } = req.body;

  const cart = await Cart.findOne({
    user: userId,
  });

  if (!cart) {
    throw new AppError("cart not found", 404);
  }

  const item = cart.items.find(
    (item) => item.product.toString() === productId,
  );

  if (!item) {
    throw new AppError("product not found in cart", 404);
  }

  item.quantity = quantity;

  await cart.save();

  sendResponse(res, {
    message: "cart quantity updated",
    data: cart,
    statusCode: 200,
  });
});

//delete entire cart
export const clearCart = catchAsync(async (req, res) => {
  const { userId } = req.params;

  const cart = await Cart.findOne({
    user: userId,
  });

  if (!cart) {
    throw new AppError("cart not found", 404);
  }

  cart.items = [];

  await cart.save();

  sendResponse(res, {
    message: "cart cleared",
    data: cart,
    statusCode: 200,
  });
});