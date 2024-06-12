import { Hono } from "hono";
import {
  getCatalogue,
  createCatalogue,
  getCatalogues,
  deleteCatalogue,
  updateCatalogue,
} from "./statusCatalogueController";
import { adminRoleAuth, bothRoleAuth } from "../middleware/authBearer";

export const catalogueRouter = new Hono();

catalogueRouter.get("/catalogue", getCatalogues);
catalogueRouter.get("/catalogue/:id", getCatalogue);
catalogueRouter.post("/catalogue", adminRoleAuth, createCatalogue);
catalogueRouter.post("/catalogue/:id", adminRoleAuth, updateCatalogue);
catalogueRouter.delete("/catalogue", adminRoleAuth, deleteCatalogue);
