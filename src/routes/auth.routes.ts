import express from "express";
import { register } from "../controllers/auth.controller";

const router=express.Router();

//register route
router.post('/register', register);

//login route




export default router;