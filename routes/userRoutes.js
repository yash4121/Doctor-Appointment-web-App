const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//login route
router.post("/login", loginController);

//register route

router.post("/register", registerController);

//Auth
router.post("/getUserData", authMiddleware, authController);

//Apply-doctor
router.post("/apply-doctor", authMiddleware, applyDoctorController);

//Notification Doctor || POST
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);

//
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);
module.exports = router;
