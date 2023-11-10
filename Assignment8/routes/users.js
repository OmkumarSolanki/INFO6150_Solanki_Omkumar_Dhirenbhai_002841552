const express = require("express");
const router = express.Router();
const userModel = require("../models/models");
const bcrpt = require("bcrypt");

const RegExpEmail = /^[a-zA-Z0-9._-]+@northeastern\.edu$/;
// should contain neu id
const RegExpPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
// Minimum eight characters, at least one letter and one number:
const RegExpName = /^[A-Za-z ]{3,}$/;
// No special chars and minimum len 3

// POST: /user/create
router.post("/create", async (req, res) => {
  try {
    const newUser = new userModel({
      fullName: req.body.fullName,
      email: req.body.emailId,
      password: req.body.password,
    });

    if (!RegExpEmail.test(newUser.email)) {
      return res.status(400).json({ message: "Invalid Email" });
    }
    if (!RegExpName.test(newUser.fullName)) {
      return res.status(400).json({ message: "Invalid Full Name" });
    }
    if (!RegExpPassword.test(newUser.password.trim())) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    if (await userModel.findOne({ email: newUser.email })) {
      return res.status(400).json({ message: "Email Id already exists" });
    }

    const saltRounds = 10;
    newUser.password = await bcrpt.hash(newUser.password, saltRounds);

    const addUSer = await newUser.save();
    // 201 - object created successfuly
    res.status(201).json({ message: "User Created successfully", addUSer });
  } catch (err) {
    // 400 - wrong with user input - nothing wrong with server
    res.status(400).json({ message: err.message });
  }
});

// PUT: /user/edit
router.put("/edit", async (req, res) => {
  try {
    var userExist = await userModel.findOne({ email: req.body.emailId });
    if (!userExist) {
      return res.status(400).json({ message: "Email Id not registered" });
    }

    if (!RegExpName.test(req.body.fullName)) {
      return res.status(400).json({ message: "Invalid Full Name" });
    }
    if (!RegExpPassword.test(req.body.password.trim())) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    userExist.fullName = req.body.fullName;

    const saltRounds = 10;
    userExist.password = await bcrpt.hash(req.body.password, saltRounds);

    const editUSer = await userExist.save();
    // 201 - object created successfuly
    res.status(201).json({ message: "User Edited successfully", editUSer });
  } catch (err) {
    // 400 - wrong with user input - nothing wrong with server
    res.status(400).json({ message: err.message });
  }
});

// DELETE: /user/delete
router.delete("/delete", async (req, res) => {
  try {
    const userDelete = await userModel.findOne({ email: req.body.emailId });
    if (!userDelete) {
      return res.status(400).json({ message: "User not registered" });
    }
    await userModel.deleteOne({ email: req.body.emailId });
    // 200 - resource deleted successfully
    res.status(200).json({ message: "User deleted successfully", userDelete });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET: /user/getAll
router.get("/getAll", async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (err) {
    // 500 - issue with server
    res.status(500).json({ message: err.message });
    // res.status(500).json({ message: "Error retrieving users" });
  }
});

module.exports = router;
