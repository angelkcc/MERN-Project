import { NextFunction, Request, Response } from "express"
import AppError from "../utlis/appError.utlis";
import { ZodObject } from "zod";

export const validate =(schema:ZodObject)=>{
    return (req:Request,res:Response,next:NextFunction)=>{
        const result= schema.safeParse({
            body:req.body,
            query:req.query,
            params:req.params
        });

        if(result.error){
            console.log(result.error.issues);
            const errors = result.error.issues.map(({path,message})=>({
                message,
                path:path.join(".")
            }));
            next(new AppError(errors[0]?.message || "validation error",400, errors));
            return;
        }
        req.body=result.data.body;
        Object.assign(req.query,result.data.query);
        Object.assign(req.params,result.data.params);
        next();
    };
        

};