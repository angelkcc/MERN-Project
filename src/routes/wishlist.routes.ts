import express from "express";
import { toggleWishList } from "../controllers/wishlish.controllers";
import { getAll } from "../controllers/wishlish.controllers";
import { authenticate } from "../middlewares/auth.middleware";
import { Role } from "../types/enum.types";

const router = express.Router();
//get all
router.get("/",authenticate([Role.USER]),getAll);
//* toggle wishlist
router.post("/:productId", toggleWishList);

export default router;