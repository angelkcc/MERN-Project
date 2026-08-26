import express, { NextFunction, Request, Response } from "express";
import errorHandler from "./middlewares/errorHandler.middleware";

//importing routes
import routes from "./routes/index";
import AppError from "./utlis/appError.utlis";

//! @types/<pkg_name>
// npm i --save-dev <pkg_name>
// npm i -D <pkg_name>

//* express app
const app = express();

//* using middlewares
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