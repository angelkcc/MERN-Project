"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errorHandler_middleware_1 = __importDefault(require("./middlewares/errorHandler.middleware"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
//importing routes
const index_1 = __importDefault(require("./routes/index"));
const appError_utlis_1 = __importDefault(require("./utlis/appError.utlis"));
//! @types/<pkg_name>
// npm i --save-dev <pkg_name>
// npm i -D <pkg_name>
//* express app
const app = (0, express_1.default)();
//* using middlewares
app.use((0, cookie_parser_1.default)()); //this parser parses the cookie from request and adds it to req.cookies object
//also parser makes key value pair of cookie
app.use(express_1.default.json({ limit: "10mb" }));
//for static files
app.use("/api/v1/uploads", express_1.default.static("uploads"));
//* health check route
app.get("/", (_, res) => {
    res.status(200).json({
        message: "server is up & running!!!",
        status: "success",
        success: true,
        data: null,
    });
});
//using routes
app.use("/api/v1/", index_1.default);
//* path not found
app.use((req, _, next) => {
    const message = `can not ${req.method} on ${req.path}`;
    const error = new Error(message);
    error.statusCode = 404;
    error.status = "fail";
    error.success = false;
    next(new appError_utlis_1.default(message, 404));
});
//* error handler middleware
app.use(errorHandler_middleware_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map