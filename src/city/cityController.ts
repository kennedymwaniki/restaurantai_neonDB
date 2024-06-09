import { Hono } from "hono";
import { type Context } from "hono";
import {
  cityService,
  createCityService,
  deletestateService,
  getCityService,
  updateStateService,
} from "./cityService";

export const listCities = async (c: Context) => {
  const data = await cityService();
  return c.json(data);
};

export const getCity = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const state = await getCityService(id);
    if (!state) {
      return c.text("City not found", 404);
    }
    return c.json(state, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Create state
export const createCity = async (c: Context) => {
  try {
    const stateData = await c.req.json();
    const createdStateMsg = await createCityService(stateData);

    if (!createdStateMsg) return c.text("State not created", 500);
    return c.json({ msg: createdStateMsg }, 201);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Update state by ID
export const updateCity = async (c: Context) => {
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
export const deleteCity = async (c: Context) => {
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
