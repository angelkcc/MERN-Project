import express from "express";
import authRoutes from "./auth.routes";
import categoryRoutes from "./category.routes";
import brandRoutes from "./brand.routes";
const router = express.Router();
//* using routes
router.use('/auth', authRoutes);
router.use('/categories', categoryRoutes);
router.use("/brands",brandRoutes);

export default router;