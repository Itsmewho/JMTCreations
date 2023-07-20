/** @format */

import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import Random from "../models/randomModel.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const random = await Random.find({});
    res.json(random);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const random = await Random.findById(req.params.id);

    if (random) {
      return res.json(random);
    } else {
      res.status(404);
      throw new Error("Resource not found");
    }
  })
);

export default router;
