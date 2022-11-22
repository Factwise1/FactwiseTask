import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    first: {
      type: String,
      required: true
    },
    last: {
      type: String,
      required: true,
      unique: true
    },
    dob: {
      type: Date,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
