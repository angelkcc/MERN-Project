import { NextFunction, Request, Response } from "express";

const errorHandler=(error:any, _:Request, res:Response, __:NextFunction)=> //double underscore to avoid duplicate variable name error
    {
        const message = error?.message ?? "Internal Server Error";
        const statusCode = error?.statusCode ?? 500;
        const status= error?.status??"error";
        const success= error?.success??false;

        //*send error response
        res.status(statusCode).json({
            message,
            success,
            status,
            data:null,
            stack: error?.stack ?? null,
        });
    };
    export default errorHandler;