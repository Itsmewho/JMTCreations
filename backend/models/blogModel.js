/** @format */
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
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
    subheader: {
      type: String,
      required: true,
    },
    maincontent: {
      type: String,
      required: true,
    },
    shorttext: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    metaDescription: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
