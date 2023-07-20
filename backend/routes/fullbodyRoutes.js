/** @format */

import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import Fullbody from "../models/fullbodyModel.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const fullbody = await Fullbody.find({});
    res.json(fullbody);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const fullbodys = await Fullbody.findById(req.params.id);

    if (fullbodys) {
      res.json(fullbodys);
    }
    res.status(404).json({ message: "Product not found" });
  })
);

export default router;
