const express = require("express");

const app = express();
const cookieParaser=require("cookie-parser")
const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParaser())
//Routes import
const product = require("./routes/productRoutes");
const user=require("./routes/userRoutes")

app.use("/api/v1", product);
app.use("/api/v1",user)

//middleware for Errors
app.use(errorMiddleware);

module.exports = app;
