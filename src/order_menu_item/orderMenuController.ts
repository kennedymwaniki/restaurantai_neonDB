import { Hono } from "hono";
import { type Context } from "hono";
import {
 deleteOrderMenuItemService,createOrderMenuItemService,getOrderMenuItemService,orderMenuService,
 updateOrderMenuItemService
} from "./orderMenuService";

// get all users
export const listOrderMenuItem = async (c: Context) => {
  const data = await orderMenuService();
  return c.json(data);
};

export const getOrderMenuItem = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const orderMenuItem = await getOrderMenuItemService(id);
    if (!orderMenuItem) {
      return c.text("OrderMenu Item not found", 404);
    }
    return c.json(orderMenuItem, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Create orderMenuItem
export const createOrderMenuItem = async (c: Context) => {
  try {
    const stateData = await c.req.json();
    const createdStateMsg = await createOrderMenuItemService(stateData);

    if (!createdStateMsg) return c.text("State not created", 500);
    return c.json({ msg: createdStateMsg }, 201);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Update orderMenuItem by ID
export const updateOrderMenuItem = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const stateData = await c.req.json();
    const updatedStateMsg = await updateOrderMenuItemService(id, stateData);

    if (!updatedStateMsg) return c.text("State not updated", 404);
    return c.json({ msg: updatedStateMsg }, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Delete orderMenuItem by ID
export const deleteOrderMenuItem = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const deletedStateMsg = await deleteOrderMenuItemService(id);

    if (!deletedStateMsg) return c.text("OrderMenuItem not deleted", 404);
    return c.json({ msg: deletedStateMsg }, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};
