/** @format */
import mongoose from "mongoose";

const popanimeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    imagelong: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    slogan: {
      type: String,
      required: true,
    },
    shorttext: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Popanime = mongoose.model("Popanime", popanimeSchema);

export default Popanime;