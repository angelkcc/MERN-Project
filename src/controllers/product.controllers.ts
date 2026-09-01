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

    

    // upload cover image
    const cover = await uploadFileToCloudinary(coverImageFile, folder);

    product.cover_image = {
        path: cover.path,
        public_id: cover.public_id,
    };

    //promise.all(promise[])-> all promises are resolved or rejected, if any promise is rejected, the whole promise.all is rejected
    //promise.allSettled(promise[])-> all promises are resolved or rejected, but it returns the result of all promises, even if some are rejected
    //promise.race(promise[])-> returns the result of the first promise that is resolved or rejected
    //promise.any(promise[])-> returns the result of the first promise that is resolved, if all promises are rejected, it throws an error

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
export const update = catchAsync(async (req, res) => {
    const { id } = req.params;
    const{cover_image,images} = req.files as {
        cover_image:Express.Multer.File[];
        images:Express.Multer.File[];
    };
    const { name, description, price, stock, category, brand,is_featured,new_arrival,deleted_images } = req.body;
    //suppose the user wants to keep 2 images as is and wants to delete the rest 

    const product = await Product.findOne({ _id: id });
    

    if (!product) {
        throw new AppError("product not found", 404);
    }
    if(name)product.name=name;
    if(description)product.description=description;
    if(price)product.price=price;
    if(stock)product.stock=stock;
    if(category)product.category=category;
    if(brand)product.brand=brand;
    if(is_featured)product.is_featured=is_featured;
    if(new_arrival)product.new_arrival=new_arrival;

    // update cover image
    if(cover_image[0]){
        await deleteFileFromCloudinary(product.cover_image.public_id);
        const{path, public_id}= await uploadFileToCloudinary(cover_image[0],folder);
        product.cover_image={path,public_id};
    }
    sendResponse(res, {
        message: "product updated",
        data: product,
        statusCode: 200,
    });
});

//delete


//get product by category



//by brand

//featured products

//new arrivals


