import express, { NextFunction, Request, Response } from "express";
import errorHandler from "./middlewares/errorHandler.middleware";
import cookieParser from "cookie-parser";
import cors from "cors";

//importing routes
import routes from "./routes/index";
import AppError from "./utlis/appError.utlis";
import ENV_CONFIG from "./config/env.config";

//! @types/<pkg_name>
// npm i --save-dev <pkg_name>
// npm i -D <pkg_name>

//* express app
const app = express();
const origins= ENV_CONFIG.ORIGINS.split(",")??[];
console.log(origins);

//* using middlewares
app.use(cookieParser()); //this parser parses the cookie from request and adds it to req.cookies object
app.use(
  cors({
    origin: origins,
    credentials: true,
  }),
)
//also parser makes key value pair of cookie
app.use(express.json({ limit: "10mb" }));
//for static files
app.use("/api/v1/uploads", express.static("uploads"));

//* health check route
app.get("/", (_: Request, res: Response) => {
  res.status(200).json({
    message: "server is up & running!!!",
    status: "success",
    success: true,
    data: null,
  });
});

//using routes
app.use("/api/v1/", routes);

//* path not found
app.use((req: Request, _: Response, next: NextFunction) => {
  const message = `can not ${req.method} on ${req.path}`;
  const error: any = new Error(message);
  error.statusCode = 404;
  error.status = "fail";
  error.success = false;
  next(new AppError(message, 404));
});

//* error handler middleware
app.use(errorHandler);

export default app;