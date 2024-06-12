"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategory = exports.listCategory = void 0;
const categoryService_1 = require("./categoryService");
// get all users
const listCategory = async (c) => {
    const data = await (0, categoryService_1.categoryService)();
    return c.json(data);
};
exports.listCategory = listCategory;
const getCategory = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const category = await (0, categoryService_1.getCategoryService)(id);
        if (!category) {
            return c.text("Category not found", 404);
        }
        return c.json(category, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.getCategory = getCategory;
// Create category
const createCategory = async (c) => {
    try {
        const categoryData = await c.req.json();
        const createdStateMsg = await (0, categoryService_1.createCategoryService)(categoryData);
        if (!createdStateMsg)
            return c.text("Category not created", 500);
        return c.json({ msg: createdStateMsg }, 201);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.createCategory = createCategory;
// Update category by ID
const updateCategory = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const categoryData = await c.req.json();
        const updatedStateMsg = await (0, categoryService_1.updateCategoryService)(id, categoryData);
        if (!updatedStateMsg)
            return c.text("category not updated", 404);
        return c.json({ msg: updatedStateMsg }, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.updateCategory = updateCategory;
// Delete category by ID
const deleteCategory = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const deletedStateMsg = await (0, categoryService_1.deleteCategoryService)(id);
        if (!deletedStateMsg)
            return c.text("category not deleted", 404);
        return c.json({ msg: deletedStateMsg }, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.deleteCategory = deleteCategory;
