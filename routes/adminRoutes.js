const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getAllUsersController,
  getAllDoctorsController,
} = require("../controllers/adminCtrl");

const router = express.Router();

//GET Method For Users
router.get("/getAllUsers", authMiddleware, getAllUsersController);

//GET Method for doctors
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);
module.exports = router;
