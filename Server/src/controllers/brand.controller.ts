
// brand controller

import Brand from "../models/brand.model";
import AppError from "../utlis/appError.utlis";
import { catchAsync } from "../utlis/catchAsync.utlis";
import { deleteFileFromCloudinary, uploadFileToCloudinary } from "../utlis/cloudinary.utlis";
import { getPagination } from "../utlis/pagination.utlis";
import sendResponse from "../utlis/sendResponse.utlis";

const folder = "/brands";
//100
//page:1-> limit:10 skip:10 data:10->90
//page:2-> limit:10 skip:20 data:10->80
//page:3-> limit:10 skip:30 data:10->70
//pagination is used to limit the number of results returned in a single request. It allows clients to retrieve data in smaller chunks, improving performance and reducing the load on the server. 
// //The skip value is calculated based on the current page and the number of items per page (limit). For example, if the current page is 2 and the limit is 10, the skip value will be (2-1)*10 = 10,
//  meaning that the first 10 items will be skipped and the next 10 items will be returned.
//get all  
export const getAll= catchAsync(async(req,res)=>{
    const filter:any={};
    const {query, page=1,limit=10}=req.query;
    const currentPage= Number(page);
    const perPage= Number(limit);
    const skip= (currentPage-1)*perPage;
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
    const brands= await Brand.find(filter).limit(perPage).skip(skip);
    const total= await Brand.countDocuments(filter);

    


    //send response
    sendResponse(res,{
        message:"brands fetched",
        data:{brands,
            pagination:getPagination(currentPage,perPage,total)},
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