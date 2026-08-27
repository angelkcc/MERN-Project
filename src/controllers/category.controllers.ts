import Category from "../models/category.model";
import AppError from "../utlis/appError.utlis";
import { catchAsync } from "../utlis/catchAsync.utlis";
import { deleteFileFromCloudinary, uploadFileToCloudinary } from "../utlis/cloudinary.utlis";
import sendResponse from "../utlis/sendResponse.utlis";

//* get all
const folder = "/categories";
export const getAll = catchAsync(async (req, res) => {
  const filter = {};

  const categories = await Category.find(filter);
  

  //* send success response
  sendResponse(res, {
    message: "categories fetched",
    data: categories,
    statusCode: 200,
  });
});

//* get by id
export const getById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const category = await Category.findOne({ _id: id });

  if (!category) throw new AppError("category not found", 404);

  //* send success response
  sendResponse(res, {
    message: "category fetched",
    data: category,
    statusCode: 200,
  });
});

//* create
export const create = catchAsync(async (req, res) => {
  const { name, description } = req.body;
  const file = req.file;

  if(!file)
  {
    throw new AppError("category image is required", 400);
  }

  const category = new Category({ name, description });
  

  //todo: upload image using cloudinary
  const {path, public_id}= await uploadFileToCloudinary(file, folder);
  category.image={
    path,
    public_id,
  }
  

  //* save category
  await category.save();

  sendResponse(res, {
    message: `category: ${category.name} created`,
    statusCode: 201,
    data: category,
  });
});

//* update
export const update = catchAsync(async (req, res) => {
  //to update category we need to find the category by id and then update it
  const { id } = req.params;
  const { name, description } = req.body;
  const file = req.file;

  const category = await Category.findOne(
    { _id: id },
  );
  if(!category) throw new AppError("category not found", 404);
  if(name)category.name=name;
  if(description)category.description=description;
  if(file)
  {
    //upload new image
    const {path, public_id}= await uploadFileToCloudinary(file, folder);
    //delete old image
    await deleteFileFromCloudinary(category.image.public_id);

    //replace old image with new image
    category.image={
      path,
      public_id,
    };
  }

  //save category
  await category.save();

//send response
  sendResponse(res, {
    message: `category: ${category.name} updated`,
    statusCode: 200,
    data: category,
  });
});

//* delete
export const remove = catchAsync(async (req, res) => {
  const { id } = req.params;

  const category = await Category.findOne({ _id: id });

  if (!category) throw new AppError("category not found", 404);

  //delete image
  await deleteFileFromCloudinary(category.image.public_id);

  //delete category
  await Category.deleteOne({ _id: id });

  sendResponse(res, {
    message: `category: ${category.name} deleted`,
    statusCode: 200,
    data: category,
  });
});