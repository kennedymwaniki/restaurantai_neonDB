import { Hono } from "hono";
import {
  adminRoleAuth,
  bothRoleAuth,
  userRoleAuth,
} from "../middleware/authBearer";
import {
  listOrderStatus,
  createOrderStatus,
  deleteOrderStatus,
  getStatusOrder,
  updateOrderStatus,
} from "./orderStatusController";

export const orderStatusRouter = new Hono();

orderStatusRouter.get("/orderStatus",bothRoleAuth,listOrderStatus);
orderStatusRouter.get("/orderStatus/:id",bothRoleAuth,getStatusOrder);
orderStatusRouter.post("/orderStatus",adminRoleAuth,getStatusOrder);
orderStatusRouter.post("/orderStatus/:id",adminRoleAuth,updateOrderStatus);
orderStatusRouter.delete("/orderStatus/:id",adminRoleAuth,deleteOrderStatus);
