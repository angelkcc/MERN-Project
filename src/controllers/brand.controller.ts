
// brand controller

import Brand from "../models/brand.model";
import AppError from "../utlis/appError.utlis";
import { catchAsync } from "../utlis/catchAsync.utlis";
import { deleteFileFromCloudinary, uploadFileToCloudinary } from "../utlis/cloudinary.utlis";
import sendResponse from "../utlis/sendResponse.utlis";

const folder = "/brands";
//get all  
export const getAll= catchAsync(async(req,res)=>{
    const filter:any={};
    const {query}=req.query;
    if(query)
  {
   /* filter.name= {
      $regex: query,
      options: "i", // case-insensitive
    };*/
    //or query
    filter.$or=[
      {
        name:{
          $regex: query,
          $options: "i",
        },
        description:{
          $regex: query,
          $options: "i",
      },
    },
    ];
  }

  
    //date range
    const brands = await Brand.find(filter);


    //send response
    sendResponse(res,{
        message:"brands fetched",
        data:brands,
        statusCode:200,
    });

});
    
//get by id
export const getById= catchAsync(async(req,res)=>{
    const {id}=req.params;

    const brand = await Brand.findOne({_id:id});

    if(!brand) throw new AppError("brand not found",404);

    //send response
    sendResponse(res,{
        message:"brand fetched",
        data:brand,
        statusCode:200,
    });
});

//create
export const create= catchAsync(async(req,res)=>{
    const {name, description}=req.body;
    const file= req.file;
    if(!file){
        throw new AppError("brand logo is required",400);
    }

    const brand = new Brand({name, description});

    const {path,public_id}= await uploadFileToCloudinary(file, folder);

    brand.logo={
        path,
        public_id,
    };

    await brand.save();

    //send response
    sendResponse(res,{
        message:"brand created",
        data:brand,
        statusCode:201,
    });
});



//update
export const update = catchAsync(async(req,res)=>{
    const {id}=req.params;
    const {name, description}=req.body;
    const file= req.file;

    const brand= await Brand.findOne({_id:id});

    if(!brand) throw new AppError("brand not found",404);

    if(name){
        brand.name=name;
    }
    if(description){
        brand.description=description;
    }

    if(file)
    {
        //update new logo
        const{path,public_id}= await uploadFileToCloudinary(file, folder);

        brand.logo={
            path,
            public_id,
        };
    }
    await brand.save();

    sendResponse(res,{
        message:"brand updated",
        data:brand,
        statusCode:200,
    });
});


//delete
export const remove= catchAsync(async(req,res)=>{
    const {id}=req.params;

    const brand = await Brand.findOne({_id:id});

    if(!brand) throw new AppError("brand not found",404);

    //delete logo from cloudinary
    await deleteFileFromCloudinary(brand.logo.public_id);

    //delete brand from database
    await Brand.deleteOne({_id:id});

    //send response
    sendResponse(res,{
        message:"brand deleted",
        statusCode:200,
        data:brand,
    });
});