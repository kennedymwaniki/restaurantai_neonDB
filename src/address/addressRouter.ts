import { Hono } from "hono";
import {
  listAddress,
  getAddress,
  updateAddress,
  deleteAddress,
  createAddress,
} from "./addressController";

export const addressRouter = new Hono();

addressRouter.get("/address", listAddress);
addressRouter.post("/address", createAddress);
addressRouter.get("/address/:id", getAddress);
addressRouter.delete("/address/:id", deleteAddress);
addressRouter.put("/address/:id", updateAddress);
