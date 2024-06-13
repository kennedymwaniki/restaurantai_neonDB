import { adminRoleAuth, bothRoleAuth } from "./../middleware/authBearer";
import { Hono } from "hono";
import {
  getDriver,
  createDriver,
  deleteDriver,
  getDrivers,
  updateDriver,
  getDriverOrder,
} from "./driverController";

export const driverRouter = new Hono();

driverRouter.get("/drivers", bothRoleAuth, getDrivers);
driverRouter.get("/driversOrder/:id", getDriverOrder);
driverRouter.get("/drivers/:id", getDriver);
driverRouter.post("/drivers", adminRoleAuth, createDriver);
driverRouter.put("/drivers/:id", adminRoleAuth, updateDriver);
driverRouter.delete("/drivers/:id", adminRoleAuth, deleteDriver);
