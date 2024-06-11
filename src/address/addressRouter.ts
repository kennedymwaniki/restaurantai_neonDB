import { Hono } from "hono";
import {
  listAddress,
  getAddress,
  updateAddress,
  deleteAddress,
  createAddress,
} from "./addressController";
import { adminRoleAuth, bothRoleAuth } from "../middleware/authBearer";

export const addressRouter = new Hono();

addressRouter.get("/address", bothRoleAuth, listAddress);
addressRouter.post("/address", adminRoleAuth, createAddress);
addressRouter.get("/address/:id", bothRoleAuth, getAddress);
addressRouter.delete("/address/:id", deleteAddress);
addressRouter.put("/address/:id", adminRoleAuth, updateAddress);
