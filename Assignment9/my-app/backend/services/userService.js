userModel = require("../models/userModel");
bcrypt = require("bcrypt");

async function createUser(email, fullName, password) {
  const saltRounds = 10;

  if (await userModel.findOne({ email: email })) {
    throw new Error("User with given Email Id alredy exist");
  }

  const newUser = new userModel({
    fullName: fullName,
    email: email,
    password: await bcrypt.hash(password, saltRounds),
  });

  newUser.save();
}

async function getUser() {
  const users = await userModel.find();
  return users;
}

async function deleteUser(email) {
  const userDelete = await userModel.findOne({ email: email });
  if (!userDelete) {
    throw new Error("User Not Found");
  }
  await userModel.deleteOne({ email: email });
}

async function checkUser(email) {
  var userExist = await userModel.findOne({ email: email });
  if (!userExist) {
    throw new Error("Email Id Not Registered");
  }
  return userExist;
}

async function userLogin(email, password) {
  var userExist = await userModel.findOne({ email: email });
  if (!userExist) {
    return { message: "Email Id Not Registered" };
  }

  const isPassValid = await bcrypt.compare(password, userExist.password);
  if (isPassValid) {
    return { message: "Log In Successful" };
  } else {
    return { message: "Incorrect Password" };
  }
}

async function editUser(email, fullName, password) {
  var userFind = await userModel.findOne({ email: email });
  userFind.fullName = fullName;

  const saltRounds = 10;
  userFind.password = await bcrypt.hash(password, saltRounds);

  await userFind.save();
}

module.exports = {
  createUser,
  getUser,
  deleteUser,
  checkUser,
  editUser,
  userLogin,
};
