import {
  adminRoleAuth,
  bothRoleAuth,
  userRoleAuth,
} from "../middleware/authBearer";
import {
  getUser,
  listUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserOrders,
} from "./userController";
import { Hono } from "hono";

export const userRouter = new Hono();
// userRouter.use("*", adminRoleAuth);

// get users route
userRouter.get("/users", bothRoleAuth, listUsers);
userRouter.get("/users/:id", getUser);
userRouter.post("/users", adminRoleAuth, createUser);

// create a user

//update a user
userRouter.put("/users/:id", adminRoleAuth, updateUser);
// delete user
userRouter.delete("/users/:id", adminRoleAuth, deleteUser);

//delete user
userRouter.post("/users/:id", adminRoleAuth, deleteUser);
// userRouter.put("/users/:id", updateUser);

userRouter.get("/users/userOrder/:id", getUserOrders);
