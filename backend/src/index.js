const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();
const port = process.env.PORT;
const authRoutes = require("./routes/auth.route");
const connectDB = require("./lib/db");
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.listen(port, () => {
  console.log("the port is running on");
  connectDB();
});
