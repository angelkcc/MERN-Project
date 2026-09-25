class AppError extends Error 
//we extend error which is a built-in class in javascript and it is used to create custom error classes.
{
    public status:"error" | "fail";
    public success:boolean;
    public details?:{message:string, path:string}[];
    constructor(public message:string, public statusCode:number, details?:{message:string, path:string}[])
    {
        //super is used to call the constructor of parent class error
        super(message);
        this.statusCode=statusCode;
        this.details=details;

        this.status= String(statusCode).startsWith("4") ? "fail" : "error";
        this.success=false;
        Error.captureStackTrace(this,AppError);
    }
}
export default AppError;