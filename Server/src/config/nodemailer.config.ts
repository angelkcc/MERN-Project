import nodemailer from "nodemailer";
import ENV_CONFIG from "./env.config";
import dns from "dns";
import SMTPTransport from "nodemailer/lib/smtp-transport";

//globally forces node.js to use ipv4 over ipv6
dns.setDefaultResultOrder("ipv4first");

//1. move the typing to the configuration object literal
const smtpConfig: SMTPTransport.Options & { family?: number } ={
    host:ENV_CONFIG.SMTP_HOST || "smtp.gmail.com",
    service:ENV_CONFIG.SMTP_SERVICE,
    port:ENV_CONFIG.SMTP_PORT,
    secure:ENV_CONFIG.SMTP_PORT === 465,
    family: 4, //explicity safe for rendering, use IPv4
    auth:{
        user:ENV_CONFIG.SMTP_USER,
        pass:ENV_CONFIG.SMTP_PASS,
    },
    connectionTimeout: 60000,
    greetingTimeout: 30000,
    socketTimeout: 300000,

};
//2.create the transporter using the smtpConfig object
const transporter = nodemailer.createTransport(smtpConfig);

export const verifySmtpConnection= async()=>{
    try{
        await transporter.verify();
        console.log("Server is ready to send emails");

    } catch(error)
    {
        console.error("SMTP Verification Error",error);
    }
};
export default transporter;