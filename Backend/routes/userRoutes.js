const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  UpdatePassword,
  updateProfile,
  getAlluser,
  getSingleUser,
  updateUserRole,
  deleteUserRole,
  portfolio,
} = require("../controllers/userController");
const {isAuththenticatedUser,authorizeRoles}=require("../middleware/auth")
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout").get(logout);
router.route("/me").get(isAuththenticatedUser,getUserDetails);
router.route("/password/update").put(isAuththenticatedUser,UpdatePassword)
router.route("/me/update").put(isAuththenticatedUser,updateProfile)

router.route("/admin/users").get(isAuththenticatedUser,authorizeRoles("admin"),getAlluser);
router.route("/admin/user/:id").get(isAuththenticatedUser,authorizeRoles("admin"),getSingleUser).put(isAuththenticatedUser,authorizeRoles("admin"),updateUserRole).delete(isAuththenticatedUser,authorizeRoles("admin"),deleteUserRole)
router.route("/portfolio").post(portfolio)

module.exports = router;
