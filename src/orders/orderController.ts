import { Hono } from "hono";
import { type Context } from "hono";
import {
createOrdersService, deleteOrdersService,getOrdersService,ordersService,updateOrdersService
} from "./orderService";

// get all users
export const listOrders = async (c: Context) => {
  const data = await ordersService();
  return c.json(data);
};

export const getOrder = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const order = await getOrdersService(id);
    if (!order) {
      return c.text("Order not found", 404);
    }
    return c.json(order, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Create order
export const createOrder = async (c: Context) => {
  try {
    const orderData = await c.req.json();
    const createdStateMsg = await createOrdersService(orderData);

    if (!createdStateMsg) return c.text("Order not created", 500);
    return c.json({ msg: createdStateMsg }, 201);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Update order by ID
export const updateOrder = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const orderData = await c.req.json();
    const updatedStateMsg = await updateOrdersService(id, orderData);

    if (!updatedStateMsg) return c.text("Order not updated", 404);
    return c.json({ msg: updatedStateMsg }, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Delete order by ID
export const deleteOrder = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const deletedStateMsg = await deleteOrdersService(id);

    if (!deletedStateMsg) return c.text("Order not deleted", 404);
    return c.json({ msg: deletedStateMsg }, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};
