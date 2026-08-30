import WishList from "../models/wishlist.model";
import Product from "../models/product.model";
import AppError from "../utlis/appError.utlis";
import { catchAsync } from "../utlis/catchAsync.utlis";
import sendResponse from "../utlis/sendResponse.utlis";

//* GET USER WISHLIST
export const getAll = catchAsync(async (req, res) => {
  const { userId } = req.params;

  const wishlists = await WishList.find({
    user: userId,
  }).populate("product");

  sendResponse(res, {
    message: "wishlist fetched",
    data: wishlists,
    statusCode: 200,
  });
});


//* ADD PRODUCT TO WISHLIST
export const create = catchAsync(async (req, res) => {
  const { userId, productId } = req.body;

  // Check whether product exists
  const product = await Product.findById(productId);

  if (!product) {
    throw new AppError("product not found", 404);
  }

  // Check whether product is already in wishlist
  const existingWishList = await WishList.findOne({
    user: userId,
    product: productId,
  });

  if (existingWishList) {
    throw new AppError("product already exists in wishlist", 400);
  }

  // Create wishlist item
  const wishlist = await WishList.create({
    user: userId,
    product: productId,
  });

  sendResponse(res, {
    message: "product added to wishlist",
    data: wishlist,
    statusCode: 201,
  });
});


//* REMOVE PRODUCT FROM WISHLIST
export const remove = catchAsync(async (req, res) => {
  const { userId, productId } = req.params;

  const wishlist = await WishList.findOneAndDelete({
    user: userId,
    product: productId,
  });

  if (!wishlist) {
    throw new AppError("product not found in wishlist", 404);
  }

  sendResponse(res, {
    message: "product removed from wishlist",
    data: wishlist,
    statusCode: 200,
  });
});