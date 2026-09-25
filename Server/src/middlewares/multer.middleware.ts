import multer from "multer";
import fs from "fs";
import { Request } from "express";

const multerFileUploader=()=>{
    
const folder= "uploads/";
const maxFileSize= 5 * 1024 * 1024; //5MB
if(!fs.existsSync(folder)){
    fs.mkdirSync(folder, {recursive:true});
}
//disk storage 
const storage = multer.diskStorage({
    destination: (req:Request, file:Express.Multer.File, cb)=>{
        cb(null, folder);
    },
    filename:(req: Request, file:Express.Multer.File,cb)=>{
        const fileName= Date.now()+ "-" +file.originalname;
        cb(null, fileName);
    },
});

//file filter

//multer upload instance
const upload= multer(
    {
        storage:storage,
        limits:{fileSize:maxFileSize},
    });
    return upload;
};

export default multerFileUploader;