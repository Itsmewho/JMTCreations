/** @format */

import express from "express";
import abstract from "./data/abstract.js";
const port = 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("API is running..");
});

app.get("/api/abstract", (req, res) => {
  res.json(abstract);
});

app.get("/api/abstract/:id", (req, res) => {
  const product = abstract.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => console.log(`server is running on port: ${port}`));
