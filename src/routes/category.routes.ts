import express from "express";
import {
  create,
  getAll,
  getById,
  remove,
  update,
} from "../controllers/category.controllers";
import { validate } from "../middlewares/validator.middleware";
import { createCategoryValidator } from "../validators/category.validator";
import multerFileUploader from "../middlewares/multer.middleware";

const router = express.Router();
const upload = multerFileUploader();

//* get all
router.get("/", getAll);

//* get by id
router.get("/:id", getById);

//* create
router.post(
  "/",
  upload.single("image"),
  validate(createCategoryValidator),
  create,
);

//* update
router.put("/", upload.single("image"), update);

//* delete
router.delete("/", remove);

export default router;