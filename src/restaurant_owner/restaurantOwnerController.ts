import { Hono } from "hono";
import { type Context } from "hono";
import {
  ownerService,
 createOwnerService,deleteOwnerService,getOwnerService,updateOwnerService
} from "./restaurantOwnerService";

// get all users
export const getOwners = async (c: Context) => {
  const data = await ownerService();
  return c.json(data);
};

export const getOwner = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const owner = await getOwnerService(id);
    if (!owner) {
      return c.text("Owner not found", 404);
    }
    return c.json(owner, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Create driver
export const createOwner = async (c: Context) => {
  try {
    const ownerData = await c.req.json();
    const createdStateMsg = await createOwnerService(ownerData);

    if (!createdStateMsg) return c.text("owner not created", 500);
    return c.json({ msg: createdStateMsg }, 201);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Update driver by ID
export const updateOwner = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const ownerData = await c.req.json();
    const updatedStateMsg = await updateOwnerService(id, ownerData);

    if (!updatedStateMsg) return c.text("driver not updated", 404);
    return c.json({ msg: updatedStateMsg }, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Delete driver by ID
export const deleteOwner = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const deletedStateMsg = await deleteOwnerService(id);

    if (!deletedStateMsg) return c.text("owner not deleted", 404);
    return c.json({ msg: deletedStateMsg }, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};
