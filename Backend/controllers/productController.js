const Product = require("../model/productmodel")
const ErrorHander = require("../utils/errorhander")
const catchAsynError = require("../middleware/catchAsyncErrors")


//create products --Admin
exports.createproduct = catchAsynError(async (req, res, next) => {

      const product = await Product.create(req.body)

      res.status(201).json({
            success: true,
            product
      })

})





//Get All Products

exports.getAllproduct = catchAsynError( async (req, res) => {

      const products = await Product.find()

      res.status(200).json({
            success: true,
            products
      })
})

//Get All Product

exports.getProductDetails = catchAsynError( async (req, res, next) => {

      let product = await Product.findById(req.params.id);

      if (!product) {
            return next(new ErrorHander("product not found", 404))
      }


      res.status(200).json({
            success: true,
            product
      })
})


//Upadate Product

exports.updateProduct = catchAsynError( async (req, res, next) => {

      let product = await Product.findById(req.params.id)

      if (!product) {
            return next(new ErrorHander("product not found", 404))
      }

      product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
      })

      res.status(200).json({
            success: true,
            product
      })
})


//Delete Product

exports.deleteProduct = catchAsynError( async (req, res, next) => {

      let product = await Product.findById(req.params.id);

      if (!product) {
            return next(new ErrorHander("product not found", 404))
      }

      product = await Product.findByIdAndRemove(req.params.id);

      res.status(200).json({
            success: true,
            message: "Product Delete Successfully"
      })
})