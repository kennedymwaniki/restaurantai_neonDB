import { adminRoleAuth, bothRoleAuth } from './../middleware/authBearer';
import { Hono } from "hono";
import {
  createOwner,
  deleteOwner,
  getOwner,
  getOwners,
  updateOwner,
} from "./restaurantOwnerController";

export const ownerRouter = new Hono();

ownerRouter.get("/owner", bothRoleAuth,getOwners);
ownerRouter.get("/owner/:id",bothRoleAuth, getOwner);
ownerRouter.delete("/owner/:id",adminRoleAuth, deleteOwner);
ownerRouter.post("/owner", adminRoleAuth,createOwner);
ownerRouter.put("/owner", adminRoleAuth,updateOwner);
