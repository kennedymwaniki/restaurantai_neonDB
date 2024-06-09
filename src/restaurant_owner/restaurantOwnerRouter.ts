import { Hono } from "hono";
import {
  createOwner,
  deleteOwner,
  getOwner,
  getOwners,
  updateOwner,
} from "./restaurantOwnerController";

export const ownerRouter = new Hono();

ownerRouter.get("/owner", getOwners);
ownerRouter.get("/owner/:id", getOwner);
ownerRouter.delete("/owner/:id", deleteOwner);
ownerRouter.post("/owner", createOwner);
ownerRouter.put("/owner", updateOwner);
