import { loginSchema, registerSchema } from "@/app/schema/auth.schema";
import * as yup from "yup";
export type LoginInput = yup.InferType<typeof loginSchema>;
export type RegisterInput = yup.InferType<typeof registerSchema>;
