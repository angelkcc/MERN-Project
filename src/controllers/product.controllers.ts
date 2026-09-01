import Product from "../models/product.model";
import AppError from "../utlis/appError.utlis";
import {catchAsync} from "../utlis/catchAsync.utlis";
import { deleteFileFromCloudinary, uploadFileToCloudinary } from "../utlis/cloudinary.utlis";
import sendResponse from "../utlis/sendResponse.utlis";

// folder for Cloudinary
    const folder = "/products";

//get all
export const getAll= catchAsync(async(req,res)=>{
    const products= await Product.find({});

    sendResponse(res,{
        message:"products fetched",
        data:products,
        statusCode:200,
    });
});

//get by id
export const getById= catchAsync(async(req,res)=>{
    const {id}= req.params;
    const product= await Product.findOne({_id:id});

    if(!product)
    {
        throw new AppError("product not found",404);
    }

    sendResponse(res,{
        message:"product fetched",
        data:product,
        statusCode:200,
    });
});

//create
export const create = catchAsync(async (req, res) => {
  const { cover_image, images } = req.files as {
    cover_image: Express.Multer.File[];
    images: Express.Multer.File[];
  };
  const {
    name,
    description,
    price,
    stock,
    category,
    brand,
    is_featured,
    new_arrival,
  } = req.body;

  if (!cover_image[0]) {
    throw new AppError("cover image is required", 400);
  }

  if (!images || images.length < 2) {
    throw new AppError("at least 2 images required", 400);
  }

  const product = new Product({
    name,
    description,
    price,
    stock,
    category,
    brand,
    is_featured,
    new_arrival,
  });

  const { path, public_id } = await uploadFileToCloudinary(
    cover_image[0],
    folder,
  );

  product.cover_image = {
    path,
    public_id,
  };

  // Promise.all(promise[]) ->
  // Promise.allSettled(promise[]) ->

  //* upload images
  const promises = images.map((file) => uploadFileToCloudinary(file, folder));
  const settledPromises = await Promise.allSettled(promises); // [{status:'fulfilled',value:{}}]
  const files = settledPromises
    .filter((file) => file.status === "fulfilled")
    .map((file) => file.value);

  product.images = files;

  await product.save();

  //* send success response
  sendResponse(res, {
    message: "product created",
    data: product,
    statusCode: 201,
  });
});
//update
//update
export const update = catchAsync(async (req, res) => {
  const { id } = req.params;

  const { cover_image, images } = req.files as {
    cover_image: Express.Multer.File[];
    images: Express.Multer.File[];
  };

  const {
    name,
    description,
    price,
    stock,
    category,
    brand,
    is_featured,
    new_arrival,
    deleted_images,
  } = req.body;

  // find product
  const product = await Product.findOne({ _id: id });

  if (!product) {
    throw new AppError("product not found", 404);
  }

  // update normal fields
  if (name) product.name = name;
  if (description) product.description = description;
  if (price) product.price = price;
  if (stock) product.stock = stock;
  if (category) product.category = category;
  if (brand) product.brand = brand;
  if (is_featured) product.is_featured = is_featured;
  if (new_arrival) product.new_arrival = new_arrival;

  // update cover image
  if (cover_image && cover_image[0]) {
    await deleteFileFromCloudinary(product.cover_image.public_id);

    const { path, public_id } = await uploadFileToCloudinary(
      cover_image[0],
      folder,
    );

    product.cover_image = {
      path,
      public_id,
    };
  }

  // delete images
  if (
    deleted_images &&
    Array.isArray(deleted_images) &&
    deleted_images.length > 0
  ) {
    await Promise.allSettled(
      deleted_images.map(async (public_id) => {
        await deleteFileFromCloudinary(public_id);
      }),
    );

    const oldImages = product.images.filter(
      (image) => !deleted_images.includes(image.public_id),
    );

    product.images = oldImages;
  }

  // upload new images
  if (images && images.length > 0) {
    const files = (
      await Promise.allSettled(
        images.map((image) => uploadFileToCloudinary(image, folder)),
      )
    )
      .filter((file) => file.status === "fulfilled")
      .map((file) => file.value);

    product.images = [...product.images, ...files];
  }

  await product.save();

  sendResponse(res, {
    message: "product updated",
    data: product,
    statusCode: 200,
  });
});

//delete
export const deleteProduct = catchAsync(async (req, res) => {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
        throw new AppError("product not found", 404);
    }
    await deleteFileFromCloudinary(product.cover_image.public_id);
    await Promise.allSettled(
        product.images.map(async (image) => {
            await deleteFileFromCloudinary(image.public_id);
        })
    );

    sendResponse(res, {
        message: "product deleted",
        data: product,
        statusCode: 200,
    });
});

//get product by category



//by brand

//featured products

//new arrivals


