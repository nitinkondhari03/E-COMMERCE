const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
      name: {
            type: String,
            required: [true, "please Enter Product Name"],
            trim: true
      },
      descripition: {
            type: String,
            required: [true, "please Enter Product Descripition"]
      },
      price: {
            type: Number,
            required: [true, "please Enter Product Price"],
            maxLength: [8, "Price cannot exceed 8 characters"]
      },
      ratings: {
            type: Number,
            default: 0
      },
      images: [
            {
                  public_id: {
                        type: String,
                        required: true
                  },
                  url: {
                        type: String,
                        required: true
                  }
            }
      ],
      category: {
            type: String,
            required: [true, "please Enter Product Category"]
      },
      stock:{
            type:Number,
            required: [true, "please Enter Product S  Stock"],
            maxLength:[4,"Price cannot exceed 8 characters"],
            default:1

      },
      numOfReviews:{
            type:Number,
            default:0
      },
      reviews:[
            {
                  name:{
                        type:String,
                        required:true
                  },
                  rating:{
                        type:Number,
                        required:true
                  },
                  comment:{
                        type:String,
                        required:true
                  }
            }
      ],
      createdAt:{
            type:Date,
            default:Date.now()
      }
})

module.exports=mongoose.model("Product",productSchema)