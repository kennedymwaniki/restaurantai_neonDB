import { Hono } from "hono";
import { type Context } from "hono";
import {
  driversService,
  createDriverService,
  deleteDriverService,
  getDriverService,
  updateDriverService,
} from "./driverService";

// get all users
export const getDrivers = async (c: Context) => {
  const data = await driversService();
  return c.json(data);
};

export const getDriver = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const driver = await getDriverService(id);
    if (!driver) {
      return c.text("Driver not found", 404);
    }
    return c.json(driver, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Create driver
export const createDriver = async (c: Context) => {
  try {
    const driverData = await c.req.json();
    const createdStateMsg = await createDriverService(driverData);

    if (!createdStateMsg) return c.text("State not created", 500);
    return c.json({ msg: createdStateMsg }, 201);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Update driver by ID
export const updateDriver = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const driverData = await c.req.json();
    const updatedStateMsg = await updateDriverService(id, driverData);

    if (!updatedStateMsg) return c.text("driver not updated", 404);
    return c.json({ msg: updatedStateMsg }, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Delete driver by ID
export const deleteDriver = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const deletedStateMsg = await deleteDriverService(id);

    if (!deletedStateMsg) return c.text("driver not deleted", 404);
    return c.json({ msg: deletedStateMsg }, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};
