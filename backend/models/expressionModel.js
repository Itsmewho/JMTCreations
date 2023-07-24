/** @format */
import mongoose from "mongoose";

const expressionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    imagelong: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    slogan: {
      type: String,
      required: true,
    },
    meta: {
      type: String,
      required: true,
    },
    metaDescription: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Expression = mongoose.model("Expression", expressionSchema);

export default Expression;
