import mongoose from "mongoose";
import dotenv from "dotenv";

import Product from "../models/Product.js";

import babyAndKids from "./allData/babyAndKids.js";
import beautyAndPersonalCare from "./allData/beautyAndPersonalCare.js";
import booksAndMedia from "./allData/booksAndMedia.js";
import clothing from "./allData/clothing.js";
import electronics from "./allData/electronics.js";
import grocery from "./allData/grocery.js";
import homeAndKitchen from "./allData/homeAndKitchen.js";
import officeAndStationery from "./allData/officeAndStationery.js";
import petSupplies from "./allData/petSupplies.js";
import sportsAndOutdoors from "./allData/sportsAndOutdoors.js";

dotenv.config({ path: "../.env" });

const initDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to DB");

    await Product.deleteMany({});

    const allProducts = [
      ...grocery,
      ...electronics,
      ...clothing,
      ...beautyAndPersonalCare,
      ...babyAndKids,
      ...booksAndMedia,
      ...homeAndKitchen,
      ...officeAndStationery,
      ...petSupplies,
      ...sportsAndOutdoors,
    ];

    await Product.insertMany(allProducts);

    console.log("Data was initialized successfully");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

initDB();
