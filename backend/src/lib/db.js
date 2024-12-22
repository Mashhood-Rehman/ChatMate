const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected", con.connection.host);
  } catch (error) {
    console.log("DB Connection ERROR", error);
  }
};

module.exports = connectDB;
