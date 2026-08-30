import { NextFunction, Request, Response } from "express"
import AppError from "../utlis/appError.utlis";
import { verifyToken } from "../utlis/jwt.utlis";
import { Role } from "../types/enum.types";

export const authenticate=(roles?:Role[])=>{
    return(req:Request,res:Response,next:NextFunction)=>{
        try{
        //get access token
        const token= req.cookies["access_token"];

        if(!token){
            throw new AppError("unauthorized, login required",401);
        }
        //verify token
        const decoded_data= verifyToken(token);

        if(!decoded_data){
            throw new AppError("unauthorized, login required",401);
        }

        //role based access
        if(roles && !roles.includes(decoded_data.role)){
            throw new AppError("unauthorized, you are not allowed to access this resource",403);
        }

        req.user={
            _id:decoded_data._id,
            role:decoded_data.role,
            email:decoded_data.email
        };
        next();
        } catch(error){
            next(error);
        }

    };
};
