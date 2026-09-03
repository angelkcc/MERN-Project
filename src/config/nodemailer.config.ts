import nodemailer from "nodemailer";
import ENV_CONFIG from "./env.config";

const transporter= nodemailer.createTransport({
    host:ENV_CONFIG.SMTP_HOST,
    service:ENV_CONFIG.SMTP_SERVICE,
    port:ENV_CONFIG.SMTP_PORT,
    secure:ENV_CONFIG.SMTP_PORT === 465,
    auth:{
        user:ENV_CONFIG.SMTP_USER,
        pass:ENV_CONFIG.SMTP_PASS,
    },

});


export const verifySmtpConnection= async()=>{
    try{
        await transporter.verify();
        console.log("Server is ready to send emails");

    } catch(error)
    {
        console.error("Server is not ready to send emails",error);
    }
};
export default transporter;