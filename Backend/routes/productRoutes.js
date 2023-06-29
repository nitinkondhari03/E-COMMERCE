const express = require("express");
const {
  getAllproduct,
  createproduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/productController");
const { isAuththenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/product").get(isAuththenticatedUser, getAllproduct);
router.route("/admin/product/new").post(isAuththenticatedUser, authorizeRoles("admin"), createproduct);
router
  .route("/admin/product/:id")
  .put(isAuththenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuththenticatedUser, authorizeRoles("admin"), deleteProduct);
router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuththenticatedUser,createProductReview)
router.route("/reviews").get(getProductReviews).delete(isAuththenticatedUser,deleteReview)
module.exports = router;
