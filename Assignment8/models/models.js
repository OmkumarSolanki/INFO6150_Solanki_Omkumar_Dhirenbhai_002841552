const mongoose = require("mongoose");

require("dotenv").config();
// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL);

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
});

// Create the User model
const User = mongoose.model("User", userSchema);

// Log a message when the MongoDB connection is open
const db = mongoose.connection;
db.once("open", () => {
  console.log("MongoDB Connected");
});

// Export the User model
module.exports = User;
