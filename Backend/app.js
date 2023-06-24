const express=require("express")

const app=express()

const errorMiddleware=require("./middleware/error")

app.use(express.json())


//Routes import
const product=require("./routes/productRoutes")

app.use("/api/v1",product)

//middleware for Errors
app.use(errorMiddleware)


module.exports=app