require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

const userRoutes = require("./routes/users");
app.use("/user", userRoutes);

app.listen(3000, () => {
  console.log("Server Started");
});
