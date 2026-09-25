import cloudinary from "../config/cloudinary.config";
import AppError from "./appError.utlis";
import fs from "fs";

//* upload
export const uploadFileToCloudinary = async (
  file: Express.Multer.File,
  dir = "/",
) => {
  try {
    const folder = "/mern_project" + dir;
    //* upload to cloud
    const { public_id, secure_url: path } = await cloudinary.uploader.upload(
      file.path,
      {
        folder: folder,
        unique_filename: true,
      },
    );

    //* delete file form local uploads folder
    if (fs.existsSync(file.path)) {
      fs.unlinkSync(file.path);
    }
    
    return {
      path,
      public_id,
    };
  } catch (error) {
    console.log(error);
    throw new AppError("Something went wrong", 400);
  }
};

//* delete
export const deleteFileFromCloudinary = async (public_id: string) => {
  try {
    const deletedfile = await cloudinary.uploader.destroy(public_id);
    console.log(deletedfile);
    return true;
  } catch (error) {
    console.log(error);
    throw new AppError("Something went wrong", 400);
  }
};