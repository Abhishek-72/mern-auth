import { timeStamp } from "console";
import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://img.freepik.com/premium-vector/stylish-default-user-profile-photo-avatar-vector-illustration_664995-353.jpg",
    },
  },
  { timestamps: true }
); // timestamp will give info of timeof cration and edit

const User = mongoose.model("User", userSchema);

export default User;
