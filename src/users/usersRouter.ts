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
} from "./userController";
import { Hono } from "hono";

export const userRouter = new Hono();
// userRouter.use("*", adminRoleAuth);

// get users route
userRouter.get("/users", bothRoleAuth, listUsers);
userRouter.get("/users/:id", getUser);
userRouter.post("/users", createUser);

// create a user

//update a user
userRouter.put("/users/:id", updateUser);
// delete user
userRouter.delete("/users/:id", deleteUser);

//delete user
userRouter.post("/users/:id", deleteUser);
// userRouter.put("/users/:id", updateUser);
