
import User from "../models/user.model";
import { comparePassword, hashPassword } from "../utlis/bcrypt.utlis";
import AppError from "../utlis/appError.utlis";
import sendResponse from "../utlis/sendResponse.utlis";
import { catchAsync } from "../utlis/catchAsync.utlis";
import { generateJwtToken } from "../utlis/jwt.utlis";
import ENV_CONFIG from "../config/env.config";
import { uploadFileToCloudinary } from "../utlis/cloudinary.utlis";

//register
export const register = catchAsync(async(req,res)=>{
      
        //data:fullname, email, password, role, profile_image, phone_number
        const { full_name, email, password, phone_number } = req.body;
        const file = req.file; //multer will add file property to request object if file is uploaded

        if(!full_name)
        {
            /*const error: any= new Error("full_name is required");
            error.status="fail";
            error.statusCode=400;
            error.success=false;
            throw error;*/
            throw new AppError("full_name is required",400);
        }
        if(!email)
        {
           /* const error: any= new Error("email is required");
            error.status="fail";
            error.statusCode=400;
            error.success=false;
            throw error;*/
            throw new AppError("email is required",400);
        }
        if(!password)
        {
            /*const error: any= new Error("password is required");
            error.status="fail";
            error.statusCode=400;
            error.success=false;
            throw error;*/
            throw new AppError("password is required",400);
        }

        //create user instance--instance is created because of mongoose model and it is not saved in database yet
        const user = new User({
            full_name,
            email,
            password,
            phone_number
        });
        //hash password before saving to database
        const hash = await hashPassword(password);
        user.password = hash; //set hashed password to user instance

        //upload profile image 
            const folder = "/users";
            if(file){
            const {path, public_id}= await uploadFileToCloudinary(file, folder);
            user.profile_image={
                path,
                public_id,
            }
        }
  

        //save user to database
        await user.save(); //this method called as save will save the user instance to database and it will return a promise

        //pass everything except password to response
        const {password:_, ...rest}=user.toObject(); //toObject method will convert mongoose document to 
        //plain javascript object and we are using destructuring to exclude password from response



        //send response
        /*res.status(201).json({
            message: "user registered successfully",
            success: true,
            status: "success",
            data: rest
        });*/
        sendResponse(res, {
            statusCode: 201,
            message: "user registered successfully",
            data: rest
        });
    });

//login
export const login = catchAsync(async(req,res)=>{
    
        const{email,password}=req.body;
        if(!email)
        {
            throw new AppError("email is required",400);
        }
        if(!password)
        {
            throw new AppError("password is required",400);
        }

        //find user by email
        const user= await User.findOne({email}).select("+password");

        //if user not found
        if(!user)
        {
            throw new AppError("Invalid email or password",400);
        }

        //compare password
        const isPasswordMatched= await comparePassword(password,user.password);
        if(!isPasswordMatched)
        {
            throw new AppError("Invalid email or password",400);
        }

        //to do: generate jwt (json web token) and send it to client
        const access_token= generateJwtToken({
            _id:user._id,
            role:user.role,
            email:user.email
        });


        //dont send password in response
        const{password:_,...rest}=user.toObject();

        //set cookie header
        res.cookie("access_token", access_token, {
            secure:ENV_CONFIG.NODE_ENV === "development" ? false : true,
            httpOnly:ENV_CONFIG.NODE_ENV === "development" ? false : true,
          // expires: new Date(Date.now() + Number(ENV_CONFIG.COOKIE_EXPIRES_IN) * 24 * 60 * 60 * 1000),
          maxAge:ENV_CONFIG.COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000, //cookie will expire in 7 days
           sameSite:ENV_CONFIG.NODE_ENV === "development" ? "lax" : "none",
           
        });

        //send response
        sendResponse(res,{
            message:"user logged in successfully",
            data:{
                user:rest,
                access_token
            },
            statusCode:201
        });


    });

   


//change password
export const changePassword = catchAsync(async(req,res)=>
{
    const {oldPassword,newPassword,id}=req.body;
    

    if(!newPassword)
    {
        throw new AppError("new password is required",400);
    }
    if(!oldPassword)
    {
        throw new AppError("old password is required",400);
    }
   const user= await User.findById(id).select("+password");
   if(!user)
   {
    throw new AppError("user not found",404);
   }

   //check old password is correct or not
   const isPasswordMatched= await comparePassword(oldPassword,user.password);
    if(!isPasswordMatched)
    {
        throw new AppError("old password is incorrect",400);
    }

    //hash new password
    const hash = await hashPassword(newPassword);
    user.password= hash;
    await user.save();

    sendResponse(res,{
        message:"password changed successfully",
        data:null,
        statusCode:200
    });
});
//LOGOUT
export const logout = catchAsync(async (req, res) => {

    res.clearCookie("access_token", {
        secure: ENV_CONFIG.NODE_ENV === "development" ? false : true,
        httpOnly: ENV_CONFIG.NODE_ENV === "development" ? false : true,
        sameSite: ENV_CONFIG.NODE_ENV === "development" ? "lax" : "none",
    });

    sendResponse(res, {
        message: "user logged out successfully",
        data: null,
        statusCode: 200,
    });
});


//GET PROFILE

export const getProfile= catchAsync(async(req,res)=>{
    const {_id}= req.user;

    const profile= await User.findOne({_id});

    if(!profile) throw new AppError("user not found",404);

    sendResponse(res,{
        message:"user profile fetched successfully",
        data:profile,
        statusCode:200
    });
});

//forgot password


//change email

//update profile image

