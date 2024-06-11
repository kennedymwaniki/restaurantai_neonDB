import { Hono } from "hono";
// import { listCities } from "./cityController";
import {
  createCity,
  deleteCity,
  getCity,
  listCities,
  updateCity,
} from "./cityController";
import {
  authentAll,
  authenticateAdmin,
  authenticateUser,
} from "../middleware/authBearer";

export const cityRouter = new Hono();

cityRouter.get("/cities", authenticateAdmin, listCities);
cityRouter.get("/cities/:id", authentAll, getCity);
cityRouter.post("/cities", authenticateAdmin, createCity);
cityRouter.delete("/cities/:id", deleteCity);
// cityRouter.get("/cities/:id", listCities);
cityRouter.put("/cities/:id", updateCity);
