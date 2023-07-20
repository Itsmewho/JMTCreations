/** @format */

import express from "express";
import popanime from "../data/popanime.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(popanime);
});

router.get("/:id", (req, res) => {
  const popanimes = popanime.find((p) => p._id === req.params.id);
  res.json(popanimes);
});

export default router;
