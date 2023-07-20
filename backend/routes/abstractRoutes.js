/** @format */

import express from "express";
import abstract from "../data/abstract.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(abstract);
});

router.get("/:id", (req, res) => {
  const abstracts = abstract.find((p) => p._id === req.params.id);
  res.json(abstracts);
});

export default router;
