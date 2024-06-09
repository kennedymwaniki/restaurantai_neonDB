import { Hono } from "hono";
import { type Context } from "hono";
import {
  categoryService,
  createCategoryService,
  deleteCategoryService,
  getCategoryService,
  updateCategoryService,
} from "./categoryService";

// get all users
export const listCategory = async (c: Context) => {
  const data = await categoryService();
  return c.json(data);
};

export const getCategory = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const category = await getCategoryService(id);
    if (!category) {
      return c.text("Category not found", 404);
    }
    return c.json(category, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Create category
export const createCategory = async (c: Context) => {
  try {
    const categoryData = await c.req.json();
    const createdStateMsg = await createCategoryService(categoryData);

    if (!createdStateMsg) return c.text("Category not created", 500);
    return c.json({ msg: createdStateMsg }, 201);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Update category by ID
export const updateCategory = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const categoryData = await c.req.json();
    const updatedStateMsg = await updateCategoryService(id, categoryData);

    if (!updatedStateMsg) return c.text("category not updated", 404);
    return c.json({ msg: updatedStateMsg }, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Delete category by ID
export const deleteCategory = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const deletedStateMsg = await deleteCategoryService(id);

    if (!deletedStateMsg) return c.text("category not deleted", 404);
    return c.json({ msg: deletedStateMsg }, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};
