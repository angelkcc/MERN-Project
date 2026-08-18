class AppError extends Error 
//we extend error which is a built-in class in javascript and it is used to create custom error classes.
{
    public status:"error" | "fail";
    public success:boolean;
    constructor(public message:string, public statusCode:number)
    {
        //super is used to call the constructor of parent class error
        super(message);
        this.statusCode=statusCode;
        this.status=statusCode>=200 && statusCode<300 ? 'fail':'error';
        this.success=false;
        Error.captureStackTrace(this,AppError);
    }
}
export default AppError;