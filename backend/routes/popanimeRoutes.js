/** @format */

import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import Popanime from "../models/popanimeModel.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const popanime = await Popanime.find({});
    res.json(popanime);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const popanime = await Popanime.findById(req.params.id);

    if (popanime) {
      return res.json(popanime);
    }

    res.status(404).json({ message: "Product not found" });
  })
);

export default router;
