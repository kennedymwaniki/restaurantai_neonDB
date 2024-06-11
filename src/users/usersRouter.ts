import { authenticateAdmin, authenticateUser } from "../middleware/authBearer";
import {
  getUser,
  listUsers,
  createUser,
  updateUser,
  deleteUser,
} from "./userController";
import { Hono } from "hono";

export const userRouter = new Hono();

// get users route
userRouter.get("/users", authenticateAdmin, listUsers);
userRouter.get("/users/:id", authenticateUser, getUser);
userRouter.post("/users", createUser);

// create a user

//update a user
userRouter.put("/users/:id", updateUser);
// delete user
userRouter.delete("/users/:id", deleteUser);

//delete user
userRouter.post("/users/:id", deleteUser);
// userRouter.put("/users/:id", updateUser);
