const mongoose = require("mongoose");

const DOCUMENT_NAME = "Food";
const COLLECTION_NAME = "Foods";

const FoodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter food name"],
      unique: true,
    },
    description: { type: String },
    price: { type: Number, required: [true, "Please enter food price"] },
    category: { type: String, required: [true, "Please enter food category"] },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      // required: [true, "Please enter user id"],
    },
    status: {
      type: String,
      enum: ["best seller", "new", "loved", "normal"],
      default: "normal",
    },
    thumbnail: {
      type: String,
      // required: [true, "Please provide thumbnail"],
    },
    photos: {
      type: [String],
      // required: [true, "Please provide photos"],
    },
    isDisable: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

//index
FoodSchema.index({ name: "text" });
FoodSchema.index({ category: 1 });

module.exports = mongoose.model(DOCUMENT_NAME, FoodSchema);
