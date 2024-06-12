import { Hono } from "hono";
import {
  listOrderMenuItem,
  createOrderMenuItem,
  deleteOrderMenuItem,
  getOrderMenuItem,
  updateOrderMenuItem,
} from "./orderMenuController";
import { adminRoleAuth, bothRoleAuth } from "../middleware/authBearer";

export const orderMenuItemRouter = new Hono();

orderMenuItemRouter.get("/ordermenu", bothRoleAuth, listOrderMenuItem);
orderMenuItemRouter.get("/ordermenu/:id", bothRoleAuth, getOrderMenuItem);
orderMenuItemRouter.post("/ordermenu", adminRoleAuth, createOrderMenuItem);
orderMenuItemRouter.put("/ordermenu/:id", adminRoleAuth, updateOrderMenuItem);
orderMenuItemRouter.delete("/ordermenu", adminRoleAuth, deleteOrderMenuItem);
