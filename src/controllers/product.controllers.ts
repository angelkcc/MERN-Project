import Product from "../models/product.model";
import AppError from "../utlis/appError.utlis";
import {catchAsync} from "../utlis/catchAsync.utlis";
import { uploadFileToCloudinary } from "../utlis/cloudinary.utlis";
import sendResponse from "../utlis/sendResponse.utlis";

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
//create
export const create = catchAsync(async (req, res) => {
  const { name, description, price, stock, category, brand} = req.body;

    const files = req.files as { [fieldname: string]: Express.Multer.File[];
    };

    // get cover image
    const coverImageFile = files?.cover_image?.[0];

    // get other images
    const imageFiles = files?.images || [];

    // cover image is required
    if (!coverImageFile) {
        throw new AppError("product cover image is required", 400);
    }

    // other images are required
    if (imageFiles.length === 0) {
        throw new AppError("product images are required", 400);
    }

    // create product
    const product = new Product({name,description,price,stock,category,brand,
    });

    // folder for Cloudinary
    const folder = "/products";

    // upload cover image
    const cover = await uploadFileToCloudinary(coverImageFile, folder);

    product.cover_image = {
        path: cover.path,
        public_id: cover.public_id,
    };

    // upload multiple images
    const uploadedImages = await Promise.all(
        imageFiles.map(async (file) => {
            const image = await uploadFileToCloudinary(
                file,
                folder
            );

            return {
                path: image.path,
                public_id: image.public_id,
            };
        })
    );

    product.images = uploadedImages;

    // save product
    await product.save();

    sendResponse(res, {
        message: "product created",
        data: product,
        statusCode: 201,
    });
});

//update


//delete


