require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const userRoutes = require("./routers/userRouter");
app.use("/user", userRoutes);

app.listen(3000, () => {
  console.log("Server Started");
});
