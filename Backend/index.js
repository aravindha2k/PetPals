const express = require("express");
const connectDb = require("./config/connectDb");
const { userModel } = require("./AllSchema/userSchema");
const app = express();
require("dotenv").config();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Getting");
});

app.post("/signup", async (req, res) => {
  try {
    const user = new userModel(req.body);
    user.save();
    res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.status(401).send("Error");
  }
});
app.listen(process.env.PORT, async () => {
  console.log(`Server is running at ${process.env.PORT}`);
  await connectDb();
  console.log("Server is connected to db");
});
