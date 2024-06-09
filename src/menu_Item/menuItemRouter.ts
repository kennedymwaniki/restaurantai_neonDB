import { Hono } from "hono";
import {
  createmenu,
  deleteMenu,
  getMenu,
  listmenu,
  updateMenu,
} from "./menuItemController";

export const menuRouter = new Hono();

menuRouter.get("/menuItem", listmenu);
menuRouter.get("/menuItem/:id", getMenu);
menuRouter.post("/menuItem", createmenu);
menuRouter.delete("/menuItem/:id", deleteMenu);
menuRouter.put("/menuItem/id", updateMenu);
