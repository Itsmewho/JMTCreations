/** @format */

import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";

// import routes ->

import abstractRoutes from "./routes/abstractRoutes.js";
import expressionRoutes from "./routes/expressionRoutes.js";
import popanimeRoutes from "./routes/popanimeRoutes.js";
import watercolorsRoutes from "./routes/watercolorsRoutes.js";
import randomRoutes from "./routes/randomRoutes.js";
import fullbodyRoutes from "./routes/fullbodyRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";

// connections ->

const port = process.env.PORT || 5000;

connectDB(); // connect to MongoDB

const app = express();

app.get("/", (req, res) => {
  res.send("API is running..");
});

// for the abstract file

app.use(`/api/abstract`, abstractRoutes);

// for the popanime file

app.use(`/api/popanime`, popanimeRoutes);

// for the fullbody file

app.use(`/api/fullbody`, fullbodyRoutes);

// for the watercolors file

app.use(`/api/watercolors`, watercolorsRoutes);

// for the random file

app.use(`/api/random`, randomRoutes);

// for the expression file

app.use(`/api/expression`, expressionRoutes);

// for the blog file

app.use(`/api/blog`, blogRoutes);

// for the book file

app.use(`/api/book`, bookRoutes);

app.listen(port, () => console.log(`server is running on port: ${port}`));
