/** @format */

import express from "express";
import expression from "../data/expression.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(expression);
});

router.get("/:id", (req, res) => {
  const expressions = expression.find((p) => p._id === req.params.id);
  res.json(expressions);
});

export default router;
