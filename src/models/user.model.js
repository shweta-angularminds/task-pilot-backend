import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 5,
    },
    avatar: {
      type: String,
    },
    preferences: {
      reminderTime: {
        type: String,
        default: "09:00",
      },
      theme: {
        type: String,
        default: "light",
      },
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    timezone: {
      type: String,
      default: "Asia/Kolkata",
    },
  },
  {
    timestamps: true,
  }
);



export const User = mongoose.model("users",userSchema);