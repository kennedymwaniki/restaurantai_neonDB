import { Hono } from "hono";

import {
  listrestaurant,
  createrestaurant,
  deleterestaurant,
  getrestaurant,
  updaterestaurant,
  getMenuItemsByRestaurantId,
} from "./restaurantController";
export const restaurantRouter = new Hono();

restaurantRouter.get("/restaurant/menuItems/:id", getMenuItemsByRestaurantId);
restaurantRouter.get("/restaurant", listrestaurant);
restaurantRouter.get("/restaurant/:id", getrestaurant);
restaurantRouter.post("/restaurant", createrestaurant);
restaurantRouter.delete("/restaurant/:id", deleterestaurant);
restaurantRouter.put("/restaurant/:id", updaterestaurant);
