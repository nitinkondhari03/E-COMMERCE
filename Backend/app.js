const express = require("express");
const cors =require("cors")
const app = express();
const cookieParaser=require("cookie-parser")
const bodyParaser=require("body-parser")
const fileUpload=require("express-fileupload")
const dotenv=require("dotenv")


const errorMiddleware = require("./middleware/error");




dotenv.config({path:"config/config.env"})

app.use(express.json());
app.use(cors())
app.use(cookieParaser())
app.use(bodyParaser.urlencoded({extended:true}))
app.use(fileUpload())
//Routes import
const product = require("./routes/productRoutes");
const user=require("./routes/userRoutes")
const order=require("./routes/orderRoutes")
const payment = require("./routes/paymentRoute");


app.use("/api/v1", product);
app.use("/api/v1",user)
app.use("/api/v1",order)
app.use("/api/v1", payment);

//middleware for Errors
app.use(errorMiddleware);

module.exports = {app};
