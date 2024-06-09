import { Hono } from "hono";
import { type Context } from "hono";
import {
  createStatusCategoryService,
  deleteStatusCategoryService,
  getStatusCatalogueService,
  updateStatusCategoryService,
  statusCatalogueService,
} from "./statusCatalogueService";

// get all users
export const getCatalogues = async (c: Context) => {
  const data = await statusCatalogueService();
  return c.json(data);
};

export const getCatalogue = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const statusCatalogue = await getStatusCatalogueService(id);
    if (!statusCatalogue) {
      return c.text("Catalogue not found", 404);
    }
    return c.json(statusCatalogue, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Create statusCatalogue
export const createCatalogue = async (c: Context) => {
  try {
    const catalogueData = await c.req.json();
    const createdStateMsg = await createStatusCategoryService(catalogueData);

    if (!createdStateMsg) return c.text("catalogue not created", 500);
    return c.json({ msg: createdStateMsg }, 201);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Update statusCatalogue by ID
export const updateCatalogue = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const catalogueData = await c.req.json();
    const updatedStateMsg = await updateStatusCategoryService(
      id,
      catalogueData
    );

    if (!updatedStateMsg) return c.text("statusCatalogue not updated", 404);
    return c.json({ msg: updatedStateMsg }, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Delete statusCatalogue by ID
export const deleteCatalogue = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const deletedStateMsg = await deleteStatusCategoryService(id);

    if (!deletedStateMsg) return c.text("statusCatalogue not deleted", 404);
    return c.json({ msg: deletedStateMsg }, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};
