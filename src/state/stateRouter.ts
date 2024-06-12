import { Hono } from "hono";
import {
  listState,
  createState,
  deleteState,
  getState,
  updateState,
} from "./stateController";
import { adminRoleAuth, bothRoleAuth } from "../middleware/authBearer";

export const stateRouter = new Hono();

// get users route
stateRouter.get("/state", bothRoleAuth, listState);
stateRouter.get("/state/:id", bothRoleAuth, getState);
stateRouter.post("/state", adminRoleAuth, createState);
stateRouter.delete("/state/:id", adminRoleAuth, deleteState);
stateRouter.put("/state/:id", adminRoleAuth, updateState);
