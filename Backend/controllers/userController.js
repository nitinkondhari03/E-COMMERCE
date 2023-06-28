const ErrorHander = require("../utils/errorhander");
const catchAsynError = require("../middleware/catchAsyncErrors");

const User = require("../model/userModel");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto=require("crypto")

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

  sendToken(user, 201, res);
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

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHander("Invalid email or password ", 401));
  }

  sendToken(user, 200, res);
});

//Logout User

exports.logout = catchAsynError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

//Forgot Password

exports.forgotPassword = catchAsynError(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHander("User not found", 404));
  }

  //Get ResetPassword Token

  const resetToken = user.getResetPaaswordToken();

  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;

  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not request this email then ,please ignore it`;

  try {
    await sendEmail({
      email: user.email,
      subject: `Ecommerce Password Recovery`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHander(error.message, 500));
  }
});

//Reset Password

exports.resetPassword = catchAsynError(async (req, res, next) => {
  
  //creating token hash
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

    const user=await User.findOne({
      resetPasswordToken,
      resetPasswordExpire:{$gt:Date.now()}

    })

    if(!user){
      return next(new ErrorHander("Reset Password Token is invalid has been expired",404));
    }

    if(req.body.password!==req.body.confirmPassword){
      return next(new ErrorHander("Password does not password",404));
    }

    user.password=req.body.password
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save() 
    sendToken(user,200,res)
    
});


//Get User Detail

exports.getUserDetails=catchAsynError(async(req,res,next)=>{
  const user=await User.findById(req.user.id)

  res.status(200).json({
    success:true,
    user,
  })
})



//Update User Password
exports.UpdatePassword=catchAsynError(async(req,res,next)=>{
  const user=await User.findById(req.user.id).select("+password")

  const isPasswordMatched=await user.comparePassword(req.body.oldPassword);

  if(!isPasswordMatched){
    return next(new ErrorHander("Old password in incorrect",400));

  }

  if(req.body.newPassword!== req.body.confirmPassword){
    return next(new ErrorHander("Password does not match"));

  }

  user.password=req.body.newPassword;

  await user.save();
  sendToken(user,200,res);

  res.status(200).json({
    success:true,
    user,
  })
})

//Update user Profile

exports.updateProfile=catchAsynError(async(req,res,next)=>{
 
const newUserData={
  name:req.body.name,
  email:req.body.email,
}
//we will add cloudinary later
const user=await User.findByIdAndUpdate(req.user.id,newUserData,{
  new:true,
  runValidators:true,
  useFindModify:false,
})

res.status(200).json({
  success:true,
})

})


//Get all User(Admin)

exports.getAlluser=catchAsynError(async(req,res,next)=>{
 
  const users=await User.find();

  res.status(200).json({
    success:true,
    users,
  })

  })


  //Get single user Details
  exports.getSingleUser=catchAsynError(async(req,res,next)=>{
 
    const users=await User.findById(req.params.id)

    if(!users){
      return next(new ErrorHander(`User does not exist with id ${req.params.id}`))
    }
    
    res.status(200).json({
      success:true,
      users,
    })
  
    })

//UPdate user --Admin
    exports.updateUserRole=catchAsynError(async(req,res,next)=>{
 
      const newUserData={
        name:req.body.name,
        email:req.body.email,
        role:req.body.role,
      }
      //we will add cloudinary later
      const user=await User.findByIdAndUpdate(req.params.id,newUserData,{
        new:true,
        runValidators:true,
        useFindModify:false,
      })
      
      res.status(200).json({
        success:true,
      })
      
      })

//Delete user --Admin

      exports.deleteUserRole=catchAsynError(async(req,res,next)=>{
 
      let user=await User.findById(req.params.id);
      
      if(!user){
        return next(new ErrorHander(`User does not exist with Id ${req.params.id}`))

      }
      user = await User.findByIdAndRemove(req.params.id);
        //we will add cloudinary later
    
        
        res.status(200).json({
          success:true,
          message:"User Deleted Successfully"
        })
        
        })