import express from "express";
import {
  create,
  getAll,
  getById,
  remove,
  update,
} from "../controllers/category.controllers";
import { validate } from "../middlewares/validator.middleware";
import { createCategoryValidator, updateCategoryValidator } from "../validators/category.validator";
import multerFileUploader from "../middlewares/multer.middleware";
import { authenticate } from "../middlewares/auth.middleware";
import { Role } from "../types/enum.types";

const router = express.Router();
const upload = multerFileUploader();

//* get all
router.get("/",authenticate(), getAll);

//* get by id
router.get("/:id", getById);

//* create
router.post(
  "/",
  authenticate([Role.ADMIN]),
  upload.single("image"),
  validate(createCategoryValidator),
  create,
);

//* update
router.put("/:id ", upload.single("image"),validate(updateCategoryValidator), update);

//* delete
router.delete("/", remove);

export default router;