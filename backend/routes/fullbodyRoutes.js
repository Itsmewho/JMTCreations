/** @format */

import express from "express";
import fullbody from "../data/fullbody.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(fullbody);
});

router.get("/:id", (req, res) => {
  const fullbodys = fullbody.find((p) => p._id === req.params.id);
  res.json(fullbodys);
});

export default router;
