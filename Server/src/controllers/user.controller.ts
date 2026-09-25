import User from "../models/user.model";
import AppError from "../utlis/appError.utlis";
import { catchAsync } from "../utlis/catchAsync.utlis";
import {
  deleteFileFromCloudinary,
  uploadFileToCloudinary,
} from "../utlis/cloudinary.utlis";
import sendResponse from "../utlis/sendResponse.utlis";

//* folder for Cloudinary
const folder = "/profile_images";


//* GET ALL USERS: only admin can access this route
export const getAll = catchAsync(async (req, res) => {
  const users = await User.find({});

  sendResponse(res, {
    message: "users fetched",
    data: users,
    statusCode: 200,
  });
});


//* GET MY PROFILE
export const getProfile = catchAsync(async (req, res) => {
  const { _id } = req.user;

  const user = await User.findById(_id);

  if (!user) {
    throw new AppError("user not found", 404);
  }

  sendResponse(res, {
    message: "profile fetched",
    data: user,
    statusCode: 200,
  });
});


//* GET USER BY ID (ADMIN)
export const getById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (!user) {
    throw new AppError("user not found", 404);
  }

  sendResponse(res, {
    message: "user fetched",
    data: user,
    statusCode: 200,
  });
});


//* UPDATE MY PROFILE
export const updateProfile = catchAsync(async (req, res) => {
  const { _id } = req.user;

  const {
    full_name,
    email,
    phone_number,
  } = req.body;

  const file = req.file;

  const user = await User.findById(_id);

  if (!user) {
    throw new AppError("user not found", 404);
  }

  //* update fields
  if (full_name) user.full_name = full_name;

  if (email) user.email = email;

  if (phone_number) user.phone_number = phone_number;

  //* update profile image
  if (file) {

    //* delete old image
    if (user.profile_image?.public_id) {
      await deleteFileFromCloudinary(
        user.profile_image.public_id,
      );
    }

    //* upload new image
    const { path, public_id } =
      await uploadFileToCloudinary(file, folder);

    user.profile_image = {
      path,
      public_id,
    };
  }

  await user.save();

  sendResponse(res, {
    message: "profile updated",
    data: user,
    statusCode: 200,
  });
});


//* DELETE MY ACCOUNT
export const removeProfile = catchAsync(async (req, res) => {
  const { _id } = req.user;

  const user = await User.findByIdAndDelete(_id);

  if (!user) {
    throw new AppError("user not found", 404);
  }

  //* delete profile image
  if (user.profile_image?.public_id) {
    await deleteFileFromCloudinary(
      user.profile_image.public_id,
    );
  }

  sendResponse(res, {
    message: "account deleted",
    data: null,
    statusCode: 200,
  });
});

//deactivate user account-- only admin