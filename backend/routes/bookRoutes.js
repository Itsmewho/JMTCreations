/** @format */

import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import Book from "../models/bookModel.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const book = await Book.find({});
    res.json(book);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);

    if (book) {
      return res.json(book);
    } else {
      res.status(404);
      throw new Error("Resource not found");
    }
  })
);

export default router;
