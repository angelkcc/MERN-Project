"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//!@types/express --if we are using package which is not in ts
//npm i --save-dev package-name
//npm i -D pkg name //we use this when we do not want to use this package in production
//*express app
const app = (0, express_1.default)();
//*using middleware
//*using health check route
app.get("/", (_, res) => //_is used when we are not using the first parameter
 {
    res.status(200).json({
        message: "Server is up and running",
        status: "success",
        success: true,
        data: null
    });
});
//*path not found
//*error handler middleware
exports.default = app;
//# sourceMappingURL=app.js.map