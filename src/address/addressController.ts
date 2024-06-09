import { Hono } from "hono";
import { type Context } from "hono";
import {
addressService,createAddressService,deleteAddressService,getAddressService,updateAddressService
} from "./addressService";

// get all users
export const listAddress = async (c: Context) => {
  const data = await addressService();
  return c.json(data);
};

export const getAddress = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const address = await getAddressService(id);
    if (!address) {
      return c.text("Address not found", 404);
    }
    return c.json(address, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Create address
export const createAddress = async (c: Context) => {
  try {
    const stateData = await c.req.json();
    const createdStateMsg = await createAddressService(stateData);

    if (!createdStateMsg) return c.text("Address not created", 500);
    return c.json({ msg: createdStateMsg }, 201);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Update address by ID
export const updateAddress = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const stateData = await c.req.json();
    const updatedStateMsg = await updateAddressService(id, stateData);

    if (!updatedStateMsg) return c.text("Address not updated", 404);
    return c.json({ msg: updatedStateMsg }, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Delete address by ID
export const deleteAddress = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const deletedStateMsg = await deleteAddressService(id);

    if (!deletedStateMsg) return c.text("Address not deleted", 404);
    return c.json({ msg: deletedStateMsg }, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};
