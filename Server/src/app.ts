import express, { NextFunction, Request, Response } from "express";
import errorHandler from "./middlewares/errorHandler.middleware";
//!@types/express --if we are using package which is not in ts
//npm i --save-dev package-name
//npm i -D pkg name //we use this when we do not want to use this package in production
//*express app
const app= express();

//*using middleware
app.use(express.json({limit: "10MB"}));


//*using health check route
app.get("/",(_:Request,res:Response)=> //_is used when we are not using the first parameter
    { 
    res.status(200).json({
        message:"Server is up and running",
        status:"success",
        success:true,
        data:null
    });
});


//*path not found
app.use((req:Request,_:Response,next:NextFunction)=>{
    const message= `can not find ${req.method} on ${req.path}`;
    const error:any= new Error(message);
    error.statusCode=404;
    error.status="fail";
    error.success=false;
    next(error);
})

//*error handler middleware
app.use(errorHandler);



export default app;