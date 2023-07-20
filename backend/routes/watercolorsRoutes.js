/** @format */

import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import Watercolors from "../models/watercolorsModel.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const watercolors = await Watercolors.find({});
    res.json(watercolors);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const watercolors = await Watercolors.findById(req.params.id);

    if (watercolors) {
      return res.json(watercolors);
    } else {
      res.status(404);
      throw new Error("Resource not found");
    }
  })
);

export default router;
