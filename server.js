require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DatabaseURL2, {
  dbName: "Test",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => console.log("error", error));
db.once("open", () => console.log("Connected to db"));

const app = express();
app.use(express.json());
const subscribersRoutes = require("./routes/subscribers");

app.use("/subscribers", subscribersRoutes);

app.listen(3000, () => console.log("serverStarted"));
