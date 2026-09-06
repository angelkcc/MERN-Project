"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const http_1 = __importDefault(require("http"));
const db_config_1 = __importDefault(require("./config/db.config"));
const env_config_1 = __importDefault(require("./config/env.config"));
const nodemailer_config_1 = require("./config/nodemailer.config");
const sendEmail_utlis_1 = require("./utlis/sendEmail.utlis");
const PORT = env_config_1.default.PORT || 8080;
const DB_URI = env_config_1.default.DB_URI || "";
//* connect database
(0, db_config_1.default)(DB_URI);
//* http server
const server = http_1.default.createServer(app_1.default);
//* listen
server.listen(PORT, () => {
    console.log(`server is running at http://localhost${PORT}`);
    (0, nodemailer_config_1.verifySmtpConnection)();
    (0, sendEmail_utlis_1.sendEmail)({
        to: "angelkhatriii777@gmail.com",
        subject: "Test Email",
        html: `
    <h1>Test Email</h1>
    <p>This is a test email sent from my MERN backend.</p>
    <p>If you can see this, Nodemailer is working! 🎉</p>
  `,
    });
});
//# sourceMappingURL=server.js.map