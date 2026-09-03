import express from "express";

import {
  getAll,
  getProfile,
  getById,
  updateProfile,
  removeProfile,
} from "../controllers/user.controller";

import { authenticate } from "../middlewares/auth.middleware";
import multerFileUploader from "../middlewares/multer.middleware";
import { Role } from "../types/enum.types";

const router = express.Router();

const upload = multerFileUploader();


//* GET ALL USERS - ADMIN ONLY
router.get(
  "/",
  authenticate([Role.ADMIN]),
  getAll,
);


//* GET MY PROFILE
router.get(
  "/profile",
  authenticate(),
  getProfile,
);


//* UPDATE MY PROFILE
router.put(
  "/profile",
  authenticate(),
  upload.single("profile_image"),
  updateProfile,
);


//* DELETE MY ACCOUNT
router.delete(
  "/profile",
  authenticate(),
  removeProfile,
);


//* GET USER BY ID - ADMIN ONLY
router.get(
  "/:id",
  authenticate([Role.ADMIN]),
  getById,
);


export default router;