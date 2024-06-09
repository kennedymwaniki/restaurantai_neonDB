import { Hono } from "hono";
import {
  getDriver,
  createDriver,
  deleteDriver,
  getDrivers,
  updateDriver,
} from "./driverController";

export const driverRouter = new Hono();

driverRouter.get("/drivers", getDrivers);
driverRouter.get("/drivers/:id", getDriver);
driverRouter.post("/drivers", createDriver);
driverRouter.put("/drivers/:id", updateDriver);
driverRouter.delete("/drivers/:id", deleteDriver);
