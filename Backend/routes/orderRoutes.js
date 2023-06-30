const express=require('express')
const router=express.Router()
const { isAuththenticatedUser, authorizeRoles } = require("../middleware/auth");
const { newOrder, getSingleOrder, myOrders, getAllOrders, updateOrder, deleteOrder } = require('../controllers/orderController');

router.route('/order/new').post(isAuththenticatedUser,newOrder)

router.route("/order/:id").get(isAuththenticatedUser,getSingleOrder)

router.route("/orders/me").get(isAuththenticatedUser,myOrders);


router.route("/admin/orders").get(isAuththenticatedUser,authorizeRoles("admin"),getAllOrders);

router.route("/admin/order/:id").put(isAuththenticatedUser,authorizeRoles("admin"),updateOrder).delete(isAuththenticatedUser,authorizeRoles("admin"),deleteOrder)

module.exports=router