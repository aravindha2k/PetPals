const express = require("express");
const connectDb = require("./config/connectDb");
const userRouter = require("./Routes/userRouter");
const { serviceRouter } = require("./Routes/serviceRouter");
const { petRouter } = require("./Routes/petRouter");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use("/pet", petRouter)



app.get("/", (req, res) => {
  res.send("this is home");
});

app.use("/user",userRouter)
app.use("/service",serviceRouter)



app.listen(process.env.PORT, async () => {
  console.log(`Server is running at ${process.env.PORT}`);
  await connectDb();
  console.log("Server is connected to db");
});
