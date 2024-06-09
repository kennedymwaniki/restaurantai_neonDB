import { Hono } from "hono";
import {
  listOrderMenuItem,
  createOrderMenuItem,
  deleteOrderMenuItem,
  getOrderMenuItem,
  updateOrderMenuItem,
} from "./orderMenuController";

export const orderMenuItemRouter = new Hono();

orderMenuItemRouter.get("/ordermenu", listOrderMenuItem);
orderMenuItemRouter.get("/ordermenu/:id", getOrderMenuItem);
orderMenuItemRouter.post("/ordermenu", createOrderMenuItem);
orderMenuItemRouter.put("/ordermenu/:id", updateOrderMenuItem);
orderMenuItemRouter.delete("/ordermenu", deleteOrderMenuItem);
