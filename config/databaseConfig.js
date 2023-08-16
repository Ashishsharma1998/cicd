const mongoose = require("mongoose");
const connectDB = async () => {
  const url =
    "mongodb+srv://vincenzo:test123456@cluster0.mhjv9.mongodb.net/cicdDB?retryWrites=true&w=majority" ||
    process.env.MONGO_URL;
  await mongoose.connect(url);
};

module.exports = connectDB;
