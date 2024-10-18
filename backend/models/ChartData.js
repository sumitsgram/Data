const mongoose = require("mongoose");

const ChartDataSchema = new mongoose.Schema({
  feature: {
    type: String,
    required: true,
  },
  totalTimeSpent: {
    type: Number,
    required: true,
  },
  age: {
    type: String,
    required: true, // "15-25" or ">25"
  },
  gender: {
    type: String,
    required: true, // "male" or "female"
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("ChartData", ChartDataSchema);
