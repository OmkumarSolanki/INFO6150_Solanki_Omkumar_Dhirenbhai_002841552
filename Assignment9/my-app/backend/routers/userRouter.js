const express = require("express");
const router = express.Router();

userController = require("../controllers/userController");

// POST: /user/create
router.post("/create", async (req, res) => {
  userController.createUser(req, res);
});

// GET: /user/getAll
router.get("/getAll", async (req, res) => {
  userController.getUser(req, res);
});

// DELETE: /user/delete
router.delete("/delete", async (req, res) => {
  userController.deleteUser(req, res);
});

// PUT: /user/edit
router.put("/edit", async (req, res) => {
  userController.editUser(req, res);
});

router.post("/login", async (req, res) => {
  userController.loginUser(req, res);
});

module.exports = router;
