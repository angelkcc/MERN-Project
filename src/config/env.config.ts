import "dotenv/config";
const ENV_CONFIG={
    NODE_ENV:process.env.NODE_ENV ?? "development",
    PORT:process.env.PORT ?? 8000,
    DB_URI:process.env.DB_URI,
    

    //1.JWT
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN:process.env.JWT_EXPIRES_IN ?? "7d",

    //COOKIE
    COOKIE_EXPIRES_IN:process.env.COOKIE_EXPIRES_IN ?? 7,

    //NODE MAILER


    //CLOUDINARY


};

export default ENV_CONFIG;