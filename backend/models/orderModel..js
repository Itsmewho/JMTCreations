/** @format */

import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      default: 0,
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        abstract: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Abstract",
        },
        random: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Random",
        },
        watercolors: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Watercolors",
        },
        fullbody: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Fullbody",
        },
        expression: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Expression",
        },
        popanime: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Popanime",
        },
      },
    ],
    shippingAddres: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_addres: { type: String },
    },
    itemsPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    taxPrice: {
      type: String,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDeliverd: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliverdAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
