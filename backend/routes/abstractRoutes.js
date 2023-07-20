/** @format */

import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import Abstract from "../models/abstractModel.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const abstract = await Abstract.find({});
    res.json(abstract);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const abstract = await Abstract.findById(req.params.id);

    if (abstract) {
      return res.json(abstract);
    } else {
      res.status(404);
      throw new Error("Resource not found");
    }
  })
);

export default router;
