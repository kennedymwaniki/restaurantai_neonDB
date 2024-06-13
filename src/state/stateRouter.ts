import { Hono } from "hono";
import {
  listState,
  createState,
  deleteState,
  getState,
  updateState,
  getStateCities,
} from "./stateController";
import { adminRoleAuth, bothRoleAuth } from "../middleware/authBearer";

export const stateRouter = new Hono();

// get users route
stateRouter.get("/state", bothRoleAuth, listState);

//cities inside a state
stateRouter.get("/stateCities/:id", getStateCities);

stateRouter.get("/state/:id", bothRoleAuth, getState);
stateRouter.post("/state", adminRoleAuth, createState);
stateRouter.delete("/state/:id", adminRoleAuth, deleteState);
stateRouter.put("/state/:id", adminRoleAuth, updateState);
