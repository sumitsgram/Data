const express = require("express");
const ChartData = require("../models/ChartData");
const router = express.Router();

// Fetch chart data with filters and date range
router.post("/data", async (req, res) => {
  const { age, gender, startDate, endDate } = req.body;

  try {
    const chartData = await ChartData.find({
      age: age || { $exists: true }, // If no filter, return all
      gender: gender || { $exists: true },
      date: {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      },
    });

    res.json(chartData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching chart data" });
  }
});

module.exports = router;
