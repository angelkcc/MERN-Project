import express from "express";
import multerFileUploader from "../middlewares/multer.middleware";
import { create, getAll, getById, remove, update } from "../controllers/category.controllers";
import { validate } from "../middlewares/validator.middleware";
import { createBrandValidator, updateBrandValidator } from "../validators/brand.validator";
import { authenticate } from "../middlewares/auth.middleware";
import { Role } from "../types/enum.types";

const router = express.Router();

const upload = multerFileUploader();

//get all
router.get("/", getAll);

//get by id
router.get("/:id", getById);

//create
router.post(
    "/",
    authenticate([Role.ADMIN]),
    upload.single("logo"),
    validate(createBrandValidator),
    create,
);

//update
router.put("/:id",
    upload.single("logo"),
    validate(updateBrandValidator),
    update,
);

//delete
router.delete("/:id", remove);

export default router;