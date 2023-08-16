const express = require("express");
const { PORT } = require("./config/serverConfig");
const userRoute = require("./routes/userRoute");
const connectDB = require("./config/databaseConfig");
const app = express();

app.use(express.json());

app.use("/api", userRoute);

app.get("/home", (req, res) => {
  res.send("kya haal bha:)");
});

app.listen(PORT, async () => {
  console.log(`server started at port ${PORT}`);
  await connectDB();
  console.log("DB connected");
});
