/** @format */

import express from "express";
import watercolors from "../data/watercolors.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(watercolors);
});
router.get("/:id", (req, res) => {
  const watercolor = watercolors.find((p) => p._id === req.params.id);
  res.json(watercolor);
});

export default router;
