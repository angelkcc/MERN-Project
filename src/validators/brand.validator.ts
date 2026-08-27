import mongoose from "mongoose";
import z from "zod";

//create brand
export const createBrandValidator = z.object({
  body: z.object({
    name: z.string().min(3, "at least 3 characters required").trim(),
    description: z.string().min(10, "at least 10 characters required").trim(),
  }),
  params: z.object().default({}),
  query: z.object().default({}),
});

//update brand
export const updateBrandValidator = z.object({
  body: z.object({
    name: z.string().min(3, "at least 3 characters required").trim().optional(),
    description: z.string().min(10, "at least 10 characters required").trim().optional(),
  }),
  params: z.object({
    id: z.string().refine((value)=> mongoose.Types.ObjectId.isValid(value), 'Invalid ID'),
  }),
  query: z.object().default({}),
});
  
//delete brand
export const deleteBrandValidator = z.object({
  params: z.object({
    id: z.string().refine((value) => mongoose.Types.ObjectId.isValid(value), 'Invalid ID'),
  }),
  query: z.object().default({}),
});
