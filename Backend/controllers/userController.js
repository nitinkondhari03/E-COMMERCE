const ErrorHander = require("../utils/errorhander");
const catchAsynError = require("../middleware/catchAsyncErrors");

const User = require("../model/userModel");
const sendToken = require("../utils/jwtToken");

//Register a User

exports.registerUser = catchAsynError(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is a sample id",
      url: "profilepicUrl",
    },
  });

  sendToken(user,201,res)
});

//Login User

exports.loginUser = catchAsynError(async (req, res, next) => {
  const { email, password } = req.body;

  //checking if user has given passwoed and email both

  if (!email || !password) {
    return next(new ErrorHander("Please Enter Email && Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHander("Invalid email or password ", 401));
  }

  const isPasswordMatched = user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHander("Invalid email or password ", 401));
  }
  

  sendToken(user,200,res)
});



//Logout User

exports.logout=catchAsynError(async(req,res,next)=>{

res.cookie("token",null,{
  expires:new Date(Date.now()),
  httpOnly:true
})

  res.status(200).json({
    success:true,
    message:"Logged Out",
  });
})
