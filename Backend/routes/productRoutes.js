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
  getAdminProducts
} = require("../controllers/productController");
const { isAuththenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();
router
  .route("/admin/products")
  .get( getAdminProducts);

router.route("/product").get(getAllproduct);
router.route("/admin/product/new").post(isAuththenticatedUser, authorizeRoles("admin"), createproduct);
router
  .route("/admin/product/:id")
  .put(isAuththenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuththenticatedUser, authorizeRoles("admin"), deleteProduct);
router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuththenticatedUser,createProductReview)
router.route("/reviews").get(getProductReviews).delete(isAuththenticatedUser,deleteReview)
module.exports = router;
