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
    } else {
      res.status(404);
      throw new Error("Resource not found");
    }
  })
);
export default router;
