import nodemailer from "nodemailer";

const transporter= nodemailer.createTransport({
    host:"smtp.gmail.com",
    service:"gmail",
    port:465,
    secure:true,
    auth:{
        user:"angelkhatriii7@gmail.com",
        pass:"ocks dyar rmlu vczy",
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