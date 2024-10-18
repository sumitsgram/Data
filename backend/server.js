require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

// Store cookies
router.post("/store-preferences", (req, res) => {
  const { filters, dateRange } = req.body;
  res.cookie(
    "preferences",
    { filters, dateRange },
    { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }
  );
  res.json({ message: "Preferences stored successfully" });
});

// Retrieve cookies
router.get("/get-preferences", (req, res) => {
  const preferences = req.cookies.preferences || {};
  res.json(preferences);
});

// Routes (Will be added later)
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/charts", require("./routes/chartRoutes"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
