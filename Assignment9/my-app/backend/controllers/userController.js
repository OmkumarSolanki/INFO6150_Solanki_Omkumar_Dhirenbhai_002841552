userService = require("../services/userService");

const RegExpEmail = /^[a-zA-Z0-9._-]+@northeastern\.edu$/;
// should contain neu id
const RegExpPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
// Minimum eight characters, at least one letter and one number:
const RegExpName = /^[A-Za-z ]{3,}$/;
// No special chars and minimum len 3

async function createUser(req, res) {
  try {
    if (!RegExpEmail.test(req.body.emailId)) {
      return res.status(400).json({ message: "Invalid Email" });
    }
    if (!RegExpName.test(req.body.fullName)) {
      return res.status(400).json({ message: "Invalid Full Name" });
    }
    if (!RegExpPassword.test(req.body.password.trim())) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    let createCheck = await userService.createUser(
      req.body.emailId,
      req.body.fullName,
      req.body.password.trim()
    );
    res.status(201).json({ message: "User Created successfully" });
  } catch (err) {
    // 400 - wrong with user input - nothing wrong with server
    res.status(400).json({ message: err.message });
  }
}

async function editUser(req, res) {
  try {
    await userService.checkUser(req.body.emailId);

    if (!RegExpName.test(req.body.fullName)) {
      return res.status(400).json({ message: "Invalid Full Name" });
    }
    if (!RegExpPassword.test(req.body.password.trim())) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    await userService.editUser(
      req.body.emailId,
      req.body.fullName,
      req.body.password.trim()
    );
    res.status(201).json({ message: "User Edited successfully" });
  } catch (err) {
    // 400 - wrong with user input - nothing wrong with server
    res.status(400).json({ message: err.message });
  }
}

async function getUser(req, res) {
  try {
    allUsers = await userService.getUser();
    res.json(allUsers);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function loginUser(req, res) {
  try {
    const userLogin = await userService.userLogin(
      req.body.emailId,
      req.body.password
    );
    console.log(userLogin);
    res.json(userLogin);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function deleteUser(req, res) {
  try {
    await userService.deleteUser(req.body.emailId);
    res.status(201).json({ message: "User Deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = {
  createUser,
  getUser,
  deleteUser,
  editUser,
  loginUser,
};
