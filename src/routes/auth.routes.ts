import express, { Request } from "express";
import { changePassword, login, register } from "../controllers/auth.controller";
import { validate } from "../middlewares/validator.middleware";
import { loginValidatorSchema } from "../validators/auth.validator";
import multer from "multer";

const folder= "uploads/";
const storage = multer.diskStorage({
    destination: (req:Request, file:Express.Multer.File, cb)=>{
        cb(null, folder);
    },
    filename:(req: Request, file:Express.Multer.File,cb)=>{
        const fileName= Date.now()+ "-" +file.originalname;
        cb(null, fileName);
    },
});


const upload= multer(
    {
        storage:storage,
    });
    
const router=express.Router();
//register route
router.post('/register', upload.single("profile_image"), register);

//login route

router.post('/login',validate(loginValidatorSchema), login);

//change password route

router.put('/change-password',changePassword);


export default router;