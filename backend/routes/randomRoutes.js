/** @format */

import express from "express";
import random from "../data/random.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(random);
});
router.get("/:id", (req, res) => {
  const randoms = random.find((p) => p._id === req.params.id);
  res.json(randoms);
});

export default router;
