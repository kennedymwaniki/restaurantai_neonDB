import { Hono } from "hono";
import { type Context } from "hono";
import {
  createmenuService,
  deletemenuService,
  getmenuService,
  menuService,
  updatemenuService,
} from "./menuItemService";

// get all users
export const listmenu = async (c: Context) => {
  const data = await menuService();
  return c.json(data);
};

export const getMenu = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const menu = await getmenuService(id);
    if (!menu) {
      return c.text("menu not found", 404);
    }
    return c.json(menu, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Create menu
export const createmenu = async (c: Context) => {
  try {
    const menuData = await c.req.json();
    const createdmenuMsg = await createmenuService(menuData);

    if (!createdmenuMsg) return c.text("menuItem not created", 500);
    return c.json({ msg: createdmenuMsg }, 201);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Update menu by ID
export const updateMenu = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const menuData = await c.req.json();
    const updatedmenuMsg = await updatemenuService(id, menuData);

    if (!updatedmenuMsg) return c.text("menuItem not updated", 404);
    return c.json({ msg: updatedmenuMsg }, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Delete state by ID
export const deleteMenu = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const deletedStateMsg = await deletemenuService(id);

    if (!deletedStateMsg) return c.text("MenuItem not deleted", 404);
    return c.json({ msg: deletedStateMsg }, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};
