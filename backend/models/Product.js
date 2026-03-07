import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },

  itemName: {
    type: String,
    required: true,
    trim: true,
  },

  brand: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
    enum: [
      "Baby & Kids",
      "Beauty & Personal Care",
      "Books & Media",
      "Clothing & Apparel",
      "Electronics",
      "Grocery",
      "Home & Kitchen",
      "Office & Stationery",
      "Pet Supplies",
      "Sports & Outdoors",
    ],
  },

  price: {
    type: Number,
    required: true,
    min: 0,
  },

  mrp: {
    type: Number,
    min: 0,
  },

  discountPercentage: Number,

  currency: {
    type: String,
    default: "INR",
  },

  images: [String],

  stock: {
    type: Number,
    default: 0,
  },

  ratings: {
    average: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    totalReviews: {
      type: Number,
      default: 0,
    },
  },

  deliveryInfo: {
    estimatedDeliveryDays: Number,
    deliveryCharge: Number,
    cashOnDelivery: Boolean,
  },

  isReturnable: {
    type: Boolean,
    default: false,
  },

  returnDays: Number,

  isFeatured: {
    type: Boolean,
    default: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
