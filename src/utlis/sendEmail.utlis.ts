import ENV_CONFIG from "../config/env.config";
import transporter from "../config/nodemailer.config";

export const sendEmail= async ()=>{
    try{
        await transporter.sendMail({
            from:ENV_CONFIG.SMTP_MAIL_FROM,
            to:"angelkhatriii777@gmail.com",
            subject:"Test Email",
            //TEXT:
            html:`<div>
            <h1>Welcomeee ehehhe</h1>
            <p>This is a test email.</p>
            </div>`
        });
        console.log("Email sent successfully");

    }catch(error)
    {
        console.error("Error sending email",error);
    }
};