import { Hono } from "hono";
import { type Context } from "hono";
import {
  createrestaurantService,
  deleterestaurantService,
  getrestaurantService,
  restaurantService,
  updaterestaurantService,
  getMenuItemsByRestaurantIdService
} from "./restaurantService";

// get all users
export const listrestaurant = async (c: Context) => {
  const data = await restaurantService();
  return c.json(data);
};

export const getrestaurant = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const restaurant = await getrestaurantService(id);
    if (!restaurant) {
      return c.text("restaurant not found", 404);
    }
    return c.json(restaurant, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Create restaurant
export const createrestaurant = async (c: Context) => {
  try {
    const restaurantData = await c.req.json();
    const createdrestaurantMsg = await createrestaurantService(restaurantData);

    if (!createdrestaurantMsg) return c.text("restaurant not created", 500);
    return c.json({ msg: createdrestaurantMsg }, 201);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Update restaurant by ID
export const updaterestaurant = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const restaurantData = await c.req.json();
    const updatedrestaurantMsg = await updaterestaurantService(
      id,
      restaurantData
    );

    if (!updatedrestaurantMsg) return c.text("restaurant not updated", 404);
    return c.json({ msg: updatedrestaurantMsg }, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Delete restaurant by ID
export const deleterestaurant = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const deletedrestaurantMsg = await deleterestaurantService(id);

    if (!deletedrestaurantMsg) return c.text("restaurant not deleted", 404);
    return c.json({ msg: deletedrestaurantMsg }, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};
export const getMenuItemsByRestaurantId = async (c: Context) => {
  const id = parseInt(c.req.param("id"));
  if (isNaN(id)) return c.text("Invalid Restaurant ID", 400);

  try {
    const menuItems = await getMenuItemsByRestaurantIdService(id);
    return c.json(menuItems, 200);
  } catch (error: any) {
    return c.json({ error: error?.message }, 400);
  }
};
