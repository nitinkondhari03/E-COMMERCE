const express = require("express");
const {
  processPayment,
  sendStripeApiKey,
} = require("../controllers/paymentController");
const router = express.Router();
const { isAuththenticatedUser } = require("../middleware/auth");

router.route("/payment/process").post(isAuththenticatedUser, processPayment);

router.route("/stripeapikey").get(isAuththenticatedUser, sendStripeApiKey);

module.exports = router;
