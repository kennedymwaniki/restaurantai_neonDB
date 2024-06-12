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
  adminRoleAuth,
  bothRoleAuth,
  userRoleAuth,
} from "../middleware/authBearer";

export const cityRouter = new Hono();

cityRouter.get("/cities", bothRoleAuth, listCities);
cityRouter.get("/cities/:id", bothRoleAuth,getCity);
cityRouter.post("/cities", adminRoleAuth,createCity);
cityRouter.delete("/cities/:id", adminRoleAuth,deleteCity);
// cityRouter.get("/cities/:id", listCities);
cityRouter.put("/cities/:id",adminRoleAuth, updateCity);
