import mongoose, { Document } from "mongoose";
import { OtpType } from "../types/enum.types";

interface IOtpDocument extends Document {
  hash: string;
  user: mongoose.Types.ObjectId;
  action: OtpType;
  expireAt: Date | null;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const otpSchema = new mongoose.Schema<IOtpDocument>(
  {
    hash: {
      type: String,
      required: [true, "otp hash is required"],
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "user is required"],
      ref: "user",
    },

    action: {
      type: String,
      enum: Object.values(OtpType),
      required: [true, "action is required"],
    },

    expireAt: {
      type: Date,
      required: [true, "expiry date is required"],
    },

    active: {
      type: Boolean,
      default: true,
      required: [true, "active is required"],
    },
  },
  { timestamps: true }
);

const Otp = mongoose.model<IOtpDocument>("Otp", otpSchema);

export default Otp;