const mongoose = require("mongoose");

const transectionSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: [true, "amount is required"],
    },
    type: {
      type: String,
      required: [true, "type is required"],
    },
    category: {
      type: String,
      required: [true, "category is required"], // Fixed typo
    },
    description: {
      type: String,
      required: [true, "description is required"], // Fixed typo
    },
    date: {
      type: Date,
      required: [true, "date is required"], // Fixed typo
    },
  },
  { timestamps: true }
);

const transectionModel = mongoose.model("transections", transectionSchema);
module.exports = transectionModel;
