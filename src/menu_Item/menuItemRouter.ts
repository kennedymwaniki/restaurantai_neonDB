import { Hono } from "hono";
import {
  createmenu,
  deleteMenu,
  getMenu,
  listmenu,
  updateMenu,
} from "./menuItemController";
import { adminRoleAuth, bothRoleAuth } from "../middleware/authBearer";

export const menuRouter = new Hono();

menuRouter.get("/menuItem", bothRoleAuth, listmenu);
menuRouter.get("/menuItem/:id", bothRoleAuth, getMenu);
menuRouter.post("/menuItem", adminRoleAuth, createmenu);
menuRouter.delete("/menuItem/:id", adminRoleAuth, deleteMenu);
menuRouter.put("/menuItem/id", adminRoleAuth, updateMenu);
