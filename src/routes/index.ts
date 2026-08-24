import express from "express";
import authRoutes from "./auth.routes";
import categoryRoutes from "./category.routes";
const router = express.Router();
//* using routes
router.use('/api/v1/auth', authRoutes);
router.use('/api/v1/categories', categoryRoutes);

export default router;