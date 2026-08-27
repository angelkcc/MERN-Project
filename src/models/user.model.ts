import mongoose, { Document } from "mongoose";
import { Role } from "../types/enum.types";
import imageSchema from "./image.model";
import { IImage } from "../types/global.types";

interface IUser extends Document {
  full_name: string;
  email: string;
  password: string;
  role: Role;
  profile_image?: IImage;
  phone_number?: string;
}

//* user schema
const userSchema = new mongoose.Schema<IUser>({
  full_name: {
    type: String,
    required: [true, "Full name is required"],
    minlength: [3, "Full name must be at least 3 characters long"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"],
    select: false, //this will exclude password from query results by default
  },
  role: {
    type: String,
    enum: Object.values(Role),
    default: Role.USER,
  },
  profile_image: {
    type: imageSchema,
    default: null,
  },
  phone_number: {
    type: String,
    length: [10, "Phone number must be 10 digits long"],
    default: null,
  },

}, { timestamps: true });

//* model
const User = mongoose.model<IUser>("user", userSchema);
export default User;