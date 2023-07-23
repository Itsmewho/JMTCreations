/** @format */

import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import Blog from "../models/blogModel.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const blog = await Blog.find({});
    res.json(blog);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id);

    if (blog) {
      return res.json(blog);
    } else {
      res.status(404);
      throw new Error("Resource not found");
    }
  })
);

export default router;
