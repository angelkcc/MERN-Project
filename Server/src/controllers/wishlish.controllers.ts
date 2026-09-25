import WishList from "../models/wishlist.model";
import Product from "../models/product.model";
import AppError from "../utlis/appError.utlis";
import { catchAsync } from "../utlis/catchAsync.utlis";
import sendResponse from "../utlis/sendResponse.utlis";

//* GET USER WISHLIST
export const getAll = catchAsync(async (req, res) => {
  const { _id } = req.user;

  const wishlists = await WishList.find({
    user: _id,
  })
    .populate("user")
    .populate("product");

  sendResponse(res, {
    message: "wishlist fetched",
    data: wishlists,
    statusCode: 200,
  });
});


//* ADD OR REMOVE PRODUCT FROM WISHLIST
export const toggleWishList = catchAsync(async (req, res) => {
  const { _id } = req.user;

  const productId = req.params.productId as string;

  //* check whether product exists
  const product = await Product.findById(productId);

  if (!product) {
    throw new AppError("product not found", 404);
  }

  //* check whether product is already in wishlist
  const wishlistItem = await WishList.findOne({
    user: _id,
    product: productId,
  });

  //* if already exists -> REMOVE
  if (wishlistItem) {
    await WishList.deleteOne({
      _id: wishlistItem._id,
    });

    return sendResponse(res, {
      message: "product removed from wishlist",
      data: null,
      statusCode: 200,
    });
  } else {
    //* if it doesn't exist -> ADD
    const WishlistItem = await WishList.create({
      user: _id,
      product: productId,
    });

    return sendResponse(res, {
      message: "product added to wishlist",
      data: WishlistItem,
      statusCode: 201,
    });
  }
});


//* CLEAR WISHLIST
export const clearWishlist = catchAsync(async (req, res) => {
  const { _id } = req.user;

  await WishList.deleteMany({
    user: _id,
  });

  sendResponse(res, {
    message: "wishlist cleared",
    data: null,
    statusCode: 200,
  });
});