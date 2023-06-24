const express=require("express")
const { getAllproduct,createproduct, updateProduct, deleteProduct, getProductDetails } = require("../controllers/productController")


const router=express.Router()

router.route('/product').get(getAllproduct);
router.route('/product/new').post(createproduct)
router.route('/product/:id').put(updateProduct).delete(deleteProduct).get(getProductDetails)


module.exports=router