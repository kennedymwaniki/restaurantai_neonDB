import { Hono } from "hono";
import {
  listState,
  createState,
  deleteState,
  getState,
  updateState,
} from "./stateController";

export const stateRouter = new Hono();

// get users route
stateRouter.get("/state", listState);
stateRouter.get("/state/:id", getState);
stateRouter.post("/state", createState);
stateRouter.delete("/state/:id", deleteState);
stateRouter.put("/state/:id", updateState);
