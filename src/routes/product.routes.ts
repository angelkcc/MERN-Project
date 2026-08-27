import express from "express";
import {
  create,
  getAll,
  getById,
  //remove,
  //update,
} from "../controllers/product.controllers";

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
  upload.fields([
    {
        name:"cover_image",
        maxCount:1,
    },
    {
        name:"images",
        maxCount:6,
    }
  ]),
  create,
);



export default router;