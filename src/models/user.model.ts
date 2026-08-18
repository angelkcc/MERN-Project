import mongoose, { Document } from "mongoose";

enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

interface IUser extends Document {
  full_name: string;
  email: string;
  password: string;
  role: Role;
  profile_image?: string;
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
  },
  role: {
    type: String,
    enum: Object.values(Role),
    default: Role.USER,
  },
  profile_image: {
    type: String,
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