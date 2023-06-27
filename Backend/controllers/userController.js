const ErrorHander = require("../utils/errorhander");
const catchAsynError = require("../middleware/catchAsyncErrors");

const User = require("../model/userModel");
const sendToken = require("../utils/jwtToken");
const sendEmail=require("../utils/sendEmail")
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

  const isPasswordMatched =await user.comparePassword(password);

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


//Forgot Password

exports.forgotPassword=catchAsynError(async(req,res,next)=>{
  const user=await User.findOne({email:req.body.email})

  if(!user){
     return next(new ErrorHander("User not found",404));

  }

  //Get ResetPassword Token 

  const  resetToken=user.getResetPaaswordToken()

  await user.save({validateBeforeSave:false});

  const resetPasswordUrl=`${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;

  const message=`Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not request this email then ,please ignore it`


  try {

    await sendEmail({
       email:user.email,
       subject:`Ecommerce Password Recovery`,
       message,
    });

    res.status(200).json({
      success:true,
      message:`Email sent to ${user.email} successfully`
    })
    
  } catch (error) {
    user.resetPasswordToken=undefined;
    user.resetPasswordExpire=undefined;

    await user.save({validateBeforeSave:false});

    return next(new ErrorHander(error.message,500))
  }
})


