import express from "express";
import {
  changeEmail,
  changePassword,
  login,
  register,
} from "../controllers/auth.controller";
import { validate } from "../middlewares/validator.middleware";
import { loginValidatorSchema, registerValidatorSchema } from "../validators/auth.validator";
import multerFileUploader from "../middlewares/multer.middleware";
import { authenticate } from "../middlewares/auth.middleware";
import {logout} from "../controllers/auth.controller";
import { getProfile } from "../controllers/user.controller";

//* express route
const router = express.Router();

//* multer uploader
const upload = multerFileUploader();

//* register user
router.post("/register", upload.single("profile_image"),validate(registerValidatorSchema), register);

//* login
router.post("/login", validate(loginValidatorSchema), login);

//* change password
router.put("/password",authenticate(), changePassword);

//* logout
router.post("/logout",authenticate(),logout);

//get profile
router.get("/profile", authenticate(), getProfile);

//change email
router.put("/email", authenticate(), changeEmail);

//* forgot password

//reset password

export default router;