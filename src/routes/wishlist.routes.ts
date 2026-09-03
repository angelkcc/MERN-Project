import express from "express";
import { clearWishlist, toggleWishList } from "../controllers/wishlish.controllers";
import { getAll } from "../controllers/wishlish.controllers";
import { authenticate } from "../middlewares/auth.middleware";
import { Role } from "../types/enum.types";

const router = express.Router();
//get all
router.get("/",authenticate([Role.USER]),getAll);

//* ADD OR REMOVE PRODUCT
router.post("/:productId", authenticate(), toggleWishList);


//* CLEAR WISHLIST
router.delete("/", authenticate(), clearWishlist);


export default router;