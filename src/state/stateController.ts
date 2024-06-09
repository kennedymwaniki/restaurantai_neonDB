import { Hono } from "hono";
import { type Context } from "hono";
import {
  stateService,
  deletestateService,
  createStateService,
  getStateService,
  updateStateService,
} from "./stateService";

// get all users
export const listState = async (c: Context) => {
  const data = await stateService();
  return c.json(data);
};

export const getState = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const state = await getStateService(id);
    if (!state) {
      return c.text("State not found", 404);
    }
    return c.json(state, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Create state
export const createState = async (c: Context) => {
  try {
    const stateData = await c.req.json();
    const createdStateMsg = await createStateService(stateData);

    if (!createdStateMsg) return c.text("State not created", 500);
    return c.json({ msg: createdStateMsg }, 201);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Update state by ID
export const updateState = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const stateData = await c.req.json();
    const updatedStateMsg = await updateStateService(id, stateData);

    if (!updatedStateMsg) return c.text("State not updated", 404);
    return c.json({ msg: updatedStateMsg }, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Delete state by ID
export const deleteState = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const deletedStateMsg = await deletestateService(id);

    if (!deletedStateMsg) return c.text("State not deleted", 404);
    return c.json({ msg: deletedStateMsg }, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};
