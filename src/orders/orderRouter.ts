import { Hono } from "Hono";
import {
  listOrders,
  createOrder,
  deleteOrder,
  getOrder,
  updateOrder,
} from "./orderController";

export const orderRouter = new Hono();

orderRouter.get("/orders", listOrders);
orderRouter.get("/orders/:id", getOrder);
orderRouter.post("/orders", createOrder);
orderRouter.put("/orders/:id", updateOrder);
orderRouter.delete("/orders/:id", deleteOrder);
