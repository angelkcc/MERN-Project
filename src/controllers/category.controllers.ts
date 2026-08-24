import Category from "../models/category.model";
import AppError from "../utlis/appError.utlis";
import { catchAsync } from "../utlis/catchAsync.utlis";
import sendResponse from "../utlis/sendResponse.utlis";

//* get all
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

  const category = new Category({ name, description });

  //todo: upload image

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

  const category = await Category.findByIdAndUpdate(
    id,
    { name, description },
    { new: true }
  );

  if (!category) throw new AppError("category not found", 404);

  sendResponse(res, {
    message: `category: ${category.name} updated`,
    statusCode: 200,
    data: category,
  });
});

//* delete
export const remove = catchAsync(async (req, res) => {
  const { id } = req.params;

  const category = await Category.findByIdAndDelete(id);

  if (!category) throw new AppError("category not found", 404);

  sendResponse(res, {
    message: `category: ${category.name} deleted`,
    statusCode: 200,
    data: category,
  });
});