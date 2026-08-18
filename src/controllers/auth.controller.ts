import { NextFunction, Request, Response } from "express";
import User from "../models/user.model";
import { hashPassword } from "../utlis/bcrypt.utlis";

//register
export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        //data:fullname, email, password, role, profile_image, phone_number
        const { full_name, email, password, phone_number } = req.body;

        if(!full_name)
        {
            const error: any= new Error("full_name is required");
            error.status="fail";
            error.statusCode=400;
            error.success=false;
            throw error;
        }
        if(!email)
        {
            const error: any= new Error("email is required");
            error.status="fail";
            error.statusCode=400;
            error.success=false;
            throw error;
        }
        if(!password)
        {
            const error: any= new Error("password is required");
            error.status="fail";
            error.statusCode=400;
            error.success=false;
            throw error;
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

        //save user to database
        await user.save(); //this method called as save will save the user instance to database and it will return a promise

        //pass everything except password to response
        const {password:_, ...rest}=user.toObject(); //toObject method will convert mongoose document to 
        //plain javascript object and we are using destructuring to exclude password from response



        //send response
        res.status(201).json({
            message: "user registered successfully",
            success: true,
            status: "success",
            data: rest
        });
    } catch(error){
        next(error);
    }

}

//login

//change password

//forgot password


//change email

//update profile image

