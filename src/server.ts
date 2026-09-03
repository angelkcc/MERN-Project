
import app from "./app";
import http from "http";
import connectDatabase from "./config/db.config";
import ENV_CONFIG from "./config/env.config";
import { verifySmtpConnection } from "./config/nodemailer.config";
import { sendEmail } from "./utlis/sendEmail.utlis";

const PORT = ENV_CONFIG.PORT || 8080;
const DB_URI = ENV_CONFIG.DB_URI || "";

//* connect database
connectDatabase(DB_URI);

//* http server
const server = http.createServer(app);

//* listen
server.listen(PORT, () => {
  console.log(`server is running at http://localhost${PORT}`);
  verifySmtpConnection();
  sendEmail({
    to: "",
    subject: "Test Email",
    html: "<h1>Test Email</h1><p>This is a test email sent from the server.</p>",
  });
});