/** @format */

import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

// data--->

import users from "./data/users.js";
import abstract from "./data/abstract.js";
import watercolors from "./data/watercolors.js";
import fullbody from "./data/fullbody.js";
import random from "./data/random.js";
import popanime from "./data/popanime.js";
import blog from "./data/blog.js";
import expression from "./data/expression.js";
import User from "./models/userModel.js";

//models ->

import Blog from "./models/blogModel.js";
import Abstract from "./models/abstractModel.js";
import Expression from "./models/expressionModel.js";
import Fullbody from "./models/fullbodyModel.js";
import Random from "./models/randomModel.js";
import Watercolors from "./models/watercolorsModel.js";
import Popanime from "./models/popanimeModel.js";
import Order from "./models/orderModel..js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Expression.deleteMany();
    await Watercolors.deleteMany();
    await Random.deleteMany();
    await Fullbody.deleteMany();
    await Abstract.deleteMany();
    await Popanime.deleteMany();
    await User.deleteMany();
    await Blog.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleAbstract = abstract.map((abstract) => {
      return { ...abstract, user: adminUser };
    });
    await Abstract.insertMany(sampleAbstract);

    const sampleExpression = expression.map((expression) => {
      return { ...expression, user: adminUser };
    });
    await Expression.insertMany(sampleExpression);

    const sampleWatercolors = watercolors.map((watercolors) => {
      return { ...watercolors, user: adminUser };
    });
    await Watercolors.insertMany(sampleWatercolors);

    const sampleRandom = random.map((random) => {
      return { ...random, user: adminUser };
    });
    await Random.insertMany(sampleRandom);

    const sampleFullbody = fullbody.map((fullbody) => {
      return { ...fullbody, user: adminUser };
    });
    await Fullbody.insertMany(sampleFullbody);

    const samplePopanime = popanime.map((popanime) => {
      return { ...popanime, user: adminUser };
    });
    await Popanime.insertMany(samplePopanime);

    const sampleBlog = blog.map((blog) => {
      return { ...blog, user: adminUser };
    });
    await Blog.insertMany(sampleBlog);

    console.log("Data imported!".green.inverse);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Expression.deleteMany();
    await Watercolors.deleteMany();
    await Random.deleteMany();
    await Fullbody.deleteMany();
    await Abstract.deleteMany();
    await Popanime.deleteMany();
    await User.deleteMany();

    console.log("Data destroyed!".red.inverse);
    process.exit(1);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
