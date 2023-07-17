/** @format */

import express from "express";
import dotenv from "dotenv";
dotenv.config();
import abstract from "./data/abstract.js";
import popanime from "./data/popanime.js";
import fullbody from "./data/fullbody.js";
import expression from "./data/expression.js";
import watercolors from "./data/watercolors.js";
import random from "./data/random.js";

const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("API is running..");
});
// for the abstract file

app.get("/api/abstract", (req, res) => {
  res.json(abstract);
});

app.get("/api/abstract/:id", (req, res) => {
  const abstracts = abstract.find((p) => p._id === req.params.id);
  res.json(abstracts);
});

// for the popanime file

app.get("/api/popanime", (req, res) => {
  res.json(popanime);
});

app.get("/api/popanime/:id", (req, res) => {
  const popanimes = popanime.find((p) => p._id === req.params.id);
  res.json(popanimes);
});

// for the fullbody file

app.get("/api/fullbody", (req, res) => {
  res.json(fullbody);
});

app.get("/api/fullbody/:id", (req, res) => {
  const fullbodys = fullbody.find((p) => p._id === req.params.id);
  res.json(fullbodys);
});

// for the watercolors file

app.get("/api/watercolors", (req, res) => {
  res.json(watercolors);
});
app.get("/api/watercolors/:id", (req, res) => {
  const watercolor = watercolors.find((p) => p._id === req.params.id);
  res.json(watercolor);
});

// for the random file

app.get("/api/random", (req, res) => {
  res.json(random);
});
app.get("/api/random/:id", (req, res) => {
  const randoms = random.find((p) => p._id === req.params.id);
  res.json(randoms);
});

// for the expression file

app.get("/api/expression", (req, res) => {
  res.json(expression);
});

app.get("/api/expression/:id", (req, res) => {
  const expressions = expression.find((p) => p._id === req.params.id);
  res.json(expressions);
});

app.listen(port, () => console.log(`server is running on port: ${port}`));
