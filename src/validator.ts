import { z } from "zod";
export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  contact_phone: z.number(),
  phone_verified: z.boolean(),
  email: z.string(),
  email_verified: z.boolean(),
  confirmation_code: z.number(),
  password: z.number(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
});

export const loginUserSchema = z.object({
  username: z.string(),
  password: z.string(),
});
export const registerUserSchema = z.object({
  userId: z.number(),
  username: z.string(),
  name: z.string(),
  email: z.string(),
  contact_phone: z.string(),
  password: z.string(),
  confirmation_code: z.string(),
  role: z.string().optional(),
});
