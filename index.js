const express = require("express");
const { PORT } = require("./config/serverConfig");
const userRoutes = require("./routes/userRoute");
const connectDB = require("./config/databaseConfig");
const app = express();

app.use(express.json());

app.use("/api", userRoutes);

app.listen(PORT, async () => {
  console.log(`server started at port ${PORT}`);
  await connectDB();
  console.log("DB connected");
});
