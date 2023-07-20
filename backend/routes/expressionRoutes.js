/** @format */

import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import Expression from "../models/expressionModel.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const expression = await Expression.find({});
    res.json(expression);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const expression = await Expression.findById(req.params.id);

    if (expression) {
      return res.json(expression);
    }

    res.status(404).json({ message: "Product not found" });
  })
);
export default router;
