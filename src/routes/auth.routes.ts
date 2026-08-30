import express from "express";
import {
  changePassword,
  login,
  register,
} from "../controllers/auth.controller";
import { validate } from "../middlewares/validator.middleware";
import { loginValidatorSchema } from "../validators/auth.validator";
import multerFileUploader from "../middlewares/multer.middleware";
import { authenticate } from "../middlewares/auth.middleware";

//* express route
const router = express.Router();

//* multer uploader
const upload = multerFileUploader();

//* register user
router.post("/register", upload.single("profile_image"), register);

//* login
router.post("/login", validate(loginValidatorSchema), login);

//* change password
router.put("/password",authenticate(), changePassword);

export default router;