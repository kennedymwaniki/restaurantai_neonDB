import { Hono } from "Hono";

import {
  listrestaurant,
  createrestaurant,
  deleterestaurant,
  getrestaurant,
  updaterestaurant,
} from "./restaurantController";
export const restaurantRouter = new Hono();

restaurantRouter.get("/restaurant", listrestaurant);
restaurantRouter.get("/restaurant/:id", getrestaurant);
restaurantRouter.post("/restaurant", createrestaurant);
restaurantRouter.delete("/restaurant/:id", deleterestaurant);
restaurantRouter.put("/restaurant/:id", updaterestaurant);
