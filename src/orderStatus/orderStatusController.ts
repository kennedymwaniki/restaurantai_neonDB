import { Hono } from "hono";
import { type Context } from "hono";
import {
  createOrderStatusService,
  deleteOrderStatusService,
  getOrderStatusService,
  orderStatusService,
  updateOrderStatusService,
} from "./orderStatusService";

// get all users
export const listOrderStatus = async (c: Context) => {
  const data = await orderStatusService();
  return c.json(data);
};

export const getStatusOrder = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const order = await getOrderStatusService(id);
    if (!order) {
      return c.text("OrderStatus not found", 404);
    }
    return c.json(order, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Create order
export const createOrderStatus = async (c: Context) => {
  try {
    const orderData = await c.req.json();
    const createdStateMsg = await createOrderStatusService(orderData);

    if (!createdStateMsg) return c.text("Order not created", 500);
    return c.json({ msg: createdStateMsg }, 201);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Update order by ID
export const updateOrderStatus = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const orderData = await c.req.json();
    const updatedStateMsg = await updateOrderStatusService(id, orderData);

    if (!updatedStateMsg) return c.text("Order not updated", 404);
    return c.json({ msg: updatedStateMsg }, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Delete order by ID
export const deleteOrderStatus = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const deletedStateMsg = await deleteOrderStatusService(id);

    if (!deletedStateMsg) return c.text("Order not deleted", 404);
    return c.json({ msg: deletedStateMsg }, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};
